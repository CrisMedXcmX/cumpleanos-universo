import * as THREE from 'three';
import gsap from 'gsap';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // Vectores de posición y objetivo
    this.currentTarget = new THREE.Vector3(0, 0, 0);
    this.targetPosition = new THREE.Vector3(0, 0, 100);
    
    // Coordenadas orbitales en 360 grados
    this.orbitRadius = 95;
    this.orbitAngles = {
      theta: 0,
      phi: Math.PI / 2
    };

    // Física de arrastre, inercia y flick táctil
    this.isDragging = false;
    this.touchStartPos = { x: 0, y: 0 };
    this.previousTouch = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.touchPinchDist = 0;
    this.friction = 0.93;

    // Límites de inclinación vertical (Zona de confort ergonómica)
    this.minPhi = Math.PI * 0.38; // ~68°
    this.maxPhi = Math.PI * 0.62; // ~112°

    this.currentTween = null;
    this.setupIntuitiveTouchAndMouse();
  }

  setupIntuitiveTouchAndMouse() {
    const isInteractiveUI = (target) => {
      const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
      if (isIntroActive) return true;

      return !!target.closest(
        '.modal-backdrop.active, .top-nav, .universe-hud, .cosmic-button, .wax-seal, .parchment-container, .memory-card-modal, .planet-3d-tag, .game-title-section.active'
      );
    };

    const handleTouchStart = (e) => {
      if (isInteractiveUI(e.target)) return;

      if (e.touches.length === 1) {
        this.isDragging = true;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.touchStartPos.x = e.touches[0].clientX;
        this.touchStartPos.y = e.touches[0].clientY;
        this.previousTouch.x = e.touches[0].clientX;
        this.previousTouch.y = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.touchPinchDist = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (e) => {
      if (isInteractiveUI(e.target)) return;

      if (e.touches.length === 1 && this.isDragging) {
        if (e.cancelable) e.preventDefault();

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const deltaX = currentX - this.previousTouch.x;
        const deltaY = currentY - this.previousTouch.y;

        const sensitivity = 0.0055;
        this.orbitAngles.theta -= deltaX * sensitivity;
        this.orbitAngles.phi = Math.max(
          this.minPhi,
          Math.min(this.maxPhi, this.orbitAngles.phi - deltaY * (sensitivity * 0.7))
        );

        this.velocity.x = -deltaX * sensitivity;
        this.velocity.y = -deltaY * (sensitivity * 0.7);

        this.previousTouch.x = currentX;
        this.previousTouch.y = currentY;
      } else if (e.touches.length === 2) {
        if (e.cancelable) e.preventDefault();

        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (this.touchPinchDist > 0) {
          const delta = this.touchPinchDist - dist;
          this.orbitRadius = Math.max(40, Math.min(150, this.orbitRadius + delta * 0.35));
        }
        this.touchPinchDist = dist;
      }
    };

    const handleTouchEnd = () => {
      this.isDragging = false;
      this.touchPinchDist = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    window.addEventListener('mousedown', (e) => {
      if (isInteractiveUI(e.target)) return;

      this.isDragging = true;
      this.velocity.x = 0;
      this.velocity.y = 0;
      this.previousTouch.x = e.clientX;
      this.previousTouch.y = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;

      const deltaX = e.clientX - this.previousTouch.x;
      const deltaY = e.clientY - this.previousTouch.y;

      const sensitivity = 0.0045;
      this.orbitAngles.theta -= deltaX * sensitivity;
      this.orbitAngles.phi = Math.max(
        this.minPhi,
        Math.min(this.maxPhi, this.orbitAngles.phi - deltaY * (sensitivity * 0.7))
      );

      this.velocity.x = -deltaX * sensitivity;
      this.velocity.y = -deltaY * (sensitivity * 0.7);

      this.previousTouch.x = e.clientX;
      this.previousTouch.y = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('wheel', (e) => {
      const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
      if (isIntroActive) return;
      if (e.target.closest('.memory-card-modal') || e.target.closest('.parchment-container')) return;
      this.orbitRadius = Math.max(40, Math.min(150, this.orbitRadius + e.deltaY * 0.07));
    }, { passive: true });
  }

  /**
   * Transición cinemática suave con alabeo hacia un objetivo
   */
  moveTo(position, lookAtTarget, duration = 2.0, ease = 'power2.inOut', onComplete = null) {
    if (this.currentTween) {
      this.currentTween.kill();
    }

    this.velocity.x = 0;
    this.velocity.y = 0;

    const pos = position instanceof THREE.Vector3 ? position : new THREE.Vector3(position.x, position.y, position.z);
    const target = lookAtTarget instanceof THREE.Vector3 ? lookAtTarget : new THREE.Vector3(lookAtTarget.x, lookAtTarget.y, lookAtTarget.z);

    const offset = pos.clone().sub(target);
    const newRadius = offset.length();
    const newPhi = Math.acos(Math.max(-1, Math.min(1, offset.y / newRadius)));
    const newTheta = Math.atan2(offset.x, offset.z);

    const tweenObj = {
      tx: this.currentTarget.x,
      ty: this.currentTarget.y,
      tz: this.currentTarget.z,
      radius: this.orbitRadius,
      theta: this.orbitAngles.theta,
      phi: this.orbitAngles.phi
    };

    const dTheta = newTheta - this.orbitAngles.theta;
    const maxTilt = Math.max(-0.06, Math.min(0.06, dTheta * 0.08));

    this.currentTween = gsap.to(tweenObj, {
      tx: target.x,
      ty: target.y,
      tz: target.z,
      radius: newRadius,
      theta: newTheta,
      phi: newPhi,
      duration: duration,
      ease: ease,
      onUpdate: () => {
        this.currentTarget.set(tweenObj.tx, tweenObj.ty, tweenObj.tz);
        this.orbitRadius = tweenObj.radius;
        this.orbitAngles.theta = tweenObj.theta;
        this.orbitAngles.phi = tweenObj.phi;

        this.applyOrbitPosition();

        if (this.currentTween) {
          const progress = this.currentTween.progress();
          this.camera.rotation.z = Math.sin(progress * Math.PI) * maxTilt;
        }
      },
      onComplete: () => {
        this.camera.rotation.z = 0;
        if (onComplete) onComplete();
      }
    });
  }

  /**
   * CÁMARA EN 3RA PERSONA: Viaja directamente DETRÁS de Snoopy como en un videojuego en 3ra persona
   */
  escortCompanionToPlanet(companionGroup, targetPlanetPos, duration = 3.2, onComplete = null) {
    if (this.currentTween) {
      this.currentTween.kill();
    }

    this.velocity.x = 0;
    this.velocity.y = 0;

    const isMobile = window.innerWidth < 768;
    const finalCamOffset = isMobile 
      ? new THREE.Vector3(1.5, 4.0, 18) 
      : new THREE.Vector3(12, 5.0, 24);

    const startCamPos = this.camera.position.clone();
    const finalCamPos = targetPlanetPos.clone().add(finalCamOffset);
    const finalLookAt = targetPlanetPos.clone();

    const progressObj = { t: 0 };

    this.currentTween = gsap.to(progressObj, {
      t: 1,
      duration: duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const t = progressObj.t;

        // 1. Posición instantánea de Snoopy
        const snoopyPos = companionGroup.position.clone();

        // 2. Posición de Cámara en 3RA PERSONA (Directamente detrás y ligeramente por encima de Snoopy)
        // Offset detrás del fuselaje y cola para vista de videojuego en 3ra persona
        const chaseBehind = isMobile
          ? new THREE.Vector3(-14, 5.5, 14)
          : new THREE.Vector3(-18, 6.5, 18);
        const thirdPersonChasePos = snoopyPos.clone().add(chaseBehind);

        // 3. Trayectoria de Cámara:
        // - Fase 1 (t < 0.22): Entrada suave desde la posición anterior hacia la 3ra persona de Snoopy
        // - Fase 2 (0.22 <= t <= 0.84): Vuelo en 3RA PERSONA persiguiendo a Snoopy a través del cosmos
        // - Fase 3 (t > 0.84): Barrido suave al frente del planeta para lectura y diálogo
        let currentCamPos;
        if (t < 0.22) {
          const localT = t / 0.22;
          const easeIn = localT * localT;
          currentCamPos = startCamPos.clone().lerp(thirdPersonChasePos, easeIn);
        } else if (t <= 0.84) {
          currentCamPos = thirdPersonChasePos;
        } else {
          const localT = (t - 0.84) / 0.16;
          const easeOut = localT * (2 - localT);
          currentCamPos = thirdPersonChasePos.clone().lerp(finalCamPos, easeOut);
        }

        this.camera.position.copy(currentCamPos);

        // 4. LookAt en 3ra Persona: Enfoca directamente a Snoopy en el tercio inferior-medio
        // y proyecta hacia el horizonte estelar y planeta
        let currentTargetLook;
        if (t <= 0.84) {
          // Mirar hacia adelante sobre la trompa de Snoopy
          currentTargetLook = snoopyPos.clone().add(new THREE.Vector3(6, 1.2, -3));
        } else {
          const localT = (t - 0.84) / 0.16;
          currentTargetLook = snoopyPos.clone().lerp(finalLookAt, localT);
        }

        this.currentTarget.copy(currentTargetLook);
        this.camera.lookAt(this.currentTarget);

        // 5. Inclinación cinemática sutil que acompaña las alas de Snoopy
        const rollTilt = Math.sin(t * Math.PI) * (isMobile ? 0.04 : 0.065);
        this.camera.rotation.z = rollTilt;
      },
      onComplete: () => {
        this.camera.position.copy(finalCamPos);
        this.currentTarget.copy(finalLookAt);
        this.camera.lookAt(this.currentTarget);
        this.camera.rotation.z = 0;

        // Sincronizar ángulos orbitales para navegación táctil inmediata
        const offset = this.camera.position.clone().sub(this.currentTarget);
        this.orbitRadius = offset.length();
        this.orbitAngles.phi = Math.acos(Math.max(-1, Math.min(1, offset.y / this.orbitRadius)));
        this.orbitAngles.theta = Math.atan2(offset.x, offset.z);

        if (onComplete) onComplete();
      }
    });
  }

  applyOrbitPosition() {
    this.camera.position.x = this.currentTarget.x + this.orbitRadius * Math.sin(this.orbitAngles.phi) * Math.sin(this.orbitAngles.theta);
    this.camera.position.y = this.currentTarget.y + this.orbitRadius * Math.cos(this.orbitAngles.phi);
    this.camera.position.z = this.currentTarget.z + this.orbitRadius * Math.sin(this.orbitAngles.phi) * Math.cos(this.orbitAngles.theta);
    this.camera.lookAt(this.currentTarget);
  }

  update(delta, elapsed, mouse) {
    if (!this.currentTween || !this.currentTween.isActive()) {
      if (!this.isDragging) {
        if (Math.abs(this.velocity.x) > 0.0001 || Math.abs(this.velocity.y) > 0.0001) {
          this.orbitAngles.theta += this.velocity.x;
          this.orbitAngles.phi = Math.max(
            this.minPhi,
            Math.min(this.maxPhi, this.orbitAngles.phi + this.velocity.y)
          );

          this.velocity.x *= this.friction;
          this.velocity.y *= this.friction;
        } else {
          this.orbitAngles.theta += delta * 0.018;

          const targetLevelPhi = Math.PI / 2;
          this.orbitAngles.phi += (targetLevelPhi - this.orbitAngles.phi) * 0.04;
        }
      }

      this.applyOrbitPosition();
    }
  }

  shake(intensity = 1.0, duration = 0.35) {
    if (this.shakeTween) this.shakeTween.kill();

    const shakeObj = { intensity: intensity };

    this.shakeTween = gsap.to(shakeObj, {
      intensity: 0,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const curInt = shakeObj.intensity;
        if (curInt > 0.01) {
          this.camera.position.x += (Math.random() - 0.5) * curInt * 1.6;
          this.camera.position.y += (Math.random() - 0.5) * curInt * 1.6;
          this.camera.position.z += (Math.random() - 0.5) * curInt * 1.0;
        }
      },
      onComplete: () => {
        this.shakeTween = null;
      }
    });
  }
}
