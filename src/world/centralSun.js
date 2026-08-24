import * as THREE from 'three';
import gsap from 'gsap';

export class CentralSun {
  constructor(scene, soundManager) {
    this.scene = scene;
    this.sound = soundManager;

    this.group = new THREE.Group();
    this.group.position.set(0, 12, 0);
    this.scene.add(this.group);

    this.isExploding = false;
    this.isHovered = false;
    this.isDisappeared = false;
    this.hitCount = 0;
    this.maxHits = 3;

    this.initSunTexture();
    this.initSun();
    this.initSupernovaShockwave();
  }

  initSunTexture() {
    // Generar textura procedural de plasma solar granulado y ardiente
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Gradiente de plasma solar
    const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.2, '#ffe066');
    grad.addColorStop(0.5, '#ff8800');
    grad.addColorStop(0.8, '#ff2200');
    grad.addColorStop(1, '#990000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Erupciones y manchas de plasma
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 22 + 4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() < 0.5 
        ? 'rgba(255, 255, 200, 0.45)' 
        : 'rgba(255, 60, 0, 0.4)';
      ctx.fill();
    }

    this.sunTexture = new THREE.CanvasTexture(canvas);
    this.sunTexture.wrapS = THREE.RepeatWrapping;
    this.sunTexture.wrapT = THREE.RepeatWrapping;
  }

  initSun() {
    this.sunGroup = new THREE.Group();
    this.group.add(this.sunGroup);

    // 1. Núcleo Solar Fuego Ardiente
    const coreGeo = new THREE.SphereGeometry(8.5, 48, 48);
    this.coreMat = new THREE.MeshStandardMaterial({
      map: this.sunTexture,
      color: 0xffea75,
      emissive: 0xff4d00,
      emissiveIntensity: 3.5,
      emissiveMap: this.sunTexture,
      roughness: 0.1,
      metalness: 0.05
    });
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMat);
    this.coreMesh.userData = { type: 'centralSun', isSun: true };
    this.sunGroup.add(this.coreMesh);

    // 2. Capa de Plasma Interior Brillante (Corona 1)
    const coronaGeo1 = new THREE.SphereGeometry(10.8, 32, 32);
    this.coronaMat1 = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.coronaMesh1 = new THREE.Mesh(coronaGeo1, this.coronaMat1);
    this.sunGroup.add(this.coronaMesh1);

    // 3. Atmósfera de Llamaradas Solares (Corona 2)
    const coronaGeo2 = new THREE.SphereGeometry(13.8, 32, 32);
    this.coronaMat2 = new THREE.MeshBasicMaterial({
      color: 0xff3300,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.coronaMesh2 = new THREE.Mesh(coronaGeo2, this.coronaMat2);
    this.sunGroup.add(this.coronaMesh2);

    // 4. Halo Dorado Gigante (Corona 3)
    const coronaGeo3 = new THREE.SphereGeometry(17.5, 24, 24);
    this.coronaMat3 = new THREE.MeshBasicMaterial({
      color: 0xffdd00,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.coronaMesh3 = new THREE.Mesh(coronaGeo3, this.coronaMat3);
    this.sunGroup.add(this.coronaMesh3);

    // 5. Protuberancias y Bucles de Fuego Solar (Solar Flare Loops)
    const flareGeo1 = new THREE.TorusGeometry(13.0, 0.45, 16, 64);
    this.flareMat1 = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    this.flareRing1 = new THREE.Mesh(flareGeo1, this.flareMat1);
    this.flareRing1.rotation.x = Math.PI / 2.2;
    this.sunGroup.add(this.flareRing1);

    const flareGeo2 = new THREE.TorusGeometry(15.5, 0.38, 16, 64);
    this.flareMat2 = new THREE.MeshBasicMaterial({
      color: 0xff0044,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    this.flareRing2 = new THREE.Mesh(flareGeo2, this.flareMat2);
    this.flareRing2.rotation.x = -Math.PI / 2.6;
    this.flareRing2.rotation.y = Math.PI / 3;
    this.sunGroup.add(this.flareRing2);

    const flareGeo3 = new THREE.TorusGeometry(17.2, 0.3, 16, 64);
    this.flareMat3 = new THREE.MeshBasicMaterial({
      color: 0xffcc00,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    this.flareRing3 = new THREE.Mesh(flareGeo3, this.flareMat3);
    this.flareRing3.rotation.z = Math.PI / 2.5;
    this.sunGroup.add(this.flareRing3);

    // 6. Luz Solar Radiante en el Cosmos
    this.sunLight = new THREE.PointLight(0xffdd66, 3.5, 450);
    this.sunLight.position.set(0, 0, 0);
    this.sunGroup.add(this.sunLight);

    // 7. Nube de Chispas y Fulguraciones Solares
    const pCount = 260;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 9.5 + Math.random() * 7.5;
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    this.pMat = new THREE.PointsMaterial({
      color: 0xffea75,
      size: 1.8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    this.particles = new THREE.Points(pGeo, this.pMat);
    this.sunGroup.add(this.particles);
  }

  initSupernovaShockwave() {
    this.shockwaveGroup = new THREE.Group();
    this.group.add(this.shockwaveGroup);

    // Anillo Gigante de Onda Expansiva Supernova
    const shockGeo = new THREE.RingGeometry(0.5, 5.0, 64);
    this.shockMat = new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    this.shockRing = new THREE.Mesh(shockGeo, this.shockMat);
    this.shockRing.rotation.x = Math.PI / 2;
    this.shockwaveGroup.add(this.shockRing);

    // Esfera de Destello Explosivo Supernova
    const blastGeo = new THREE.SphereGeometry(1.0, 32, 32);
    this.blastMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    this.blastSphere = new THREE.Mesh(blastGeo, this.blastMat);
    this.shockwaveGroup.add(this.blastSphere);

    // 400 Partículas Expansivas de la Supernova
    const bpCount = 400;
    const bpGeo = new THREE.BufferGeometry();
    const bpPos = new Float32Array(bpCount * 3);
    this.bpVel = [];
    for (let i = 0; i < bpCount; i++) {
      bpPos[i * 3] = 0;
      bpPos[i * 3 + 1] = 0;
      bpPos[i * 3 + 2] = 0;

      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(40 + Math.random() * 80);
      this.bpVel.push(v);
    }
    bpGeo.setAttribute('position', new THREE.BufferAttribute(bpPos, 3));
    this.bpMat = new THREE.PointsMaterial({
      color: 0xffdf70,
      size: 2.2,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    this.blastParticles = new THREE.Points(bpGeo, this.bpMat);
    this.shockwaveGroup.add(this.blastParticles);
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
          this.sunGroup.position.x = (Math.random() - 0.5) * curInt * 2.4;
          this.sunGroup.position.y = (Math.random() - 0.5) * curInt * 2.4;
          this.sunGroup.position.z = (Math.random() - 0.5) * curInt * 2.4;
        } else {
          this.sunGroup.position.set(0, 0, 0);
        }
      },
      onComplete: () => {
        this.sunGroup.position.set(0, 0, 0);
        this.shakeTween = null;
      }
    });
  }

  registerHit(onExplodePeak = null, onComplete = null) {
    if (this.isExploding || this.isDisappeared) return null;
    this.hitCount++;

    if (this.hitCount === 1) {
      // Impacto 1 / 3: Pulso de energía dorada + Shake del Sol
      if (this.sound) this.sound.playSolarHitSound(1);
      this.shake(1.4, 0.3);

      gsap.to(this.sunGroup.scale, {
        x: 1.35,
        y: 1.35,
        z: 1.35,
        duration: 0.18,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      this.coreMat.emissiveIntensity = 5.5;
      gsap.to(this.coreMat, {
        emissiveIntensity: 3.5,
        duration: 0.8,
        ease: 'power2.out'
      });

      return {
        hit: 1,
        maxHits: 3,
        message: '⚡ Energía Solar: 1/3 (¡Toca 2 veces más!)'
      };
    } else if (this.hitCount === 2) {
      // Impacto 2 / 3: Sobrecarga de plasma + Shake violento del Sol
      if (this.sound) this.sound.playSolarHitSound(2);
      this.shake(2.8, 0.4);

      gsap.to(this.sunGroup.scale, {
        x: 1.6,
        y: 1.6,
        z: 1.6,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      this.coreMat.emissiveIntensity = 8.0;
      this.coreMat.emissive.setHex(0xffffff);
      gsap.to(this.coreMat, {
        emissiveIntensity: 4.5,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          if (!this.isExploding && !this.isDisappeared) {
            this.coreMat.emissive.setHex(0xff4d00);
          }
        }
      });

      return {
        hit: 2,
        maxHits: 3,
        message: '🔥 ¡Sobrecarga Inminente! 2/3 (¡Un toque final!)'
      };
    } else {
      // Impacto 3 / 3: Shake épico y DETONACIÓN SUPERNOVA
      this.shake(4.8, 0.65);
      this.triggerSupernova(onExplodePeak, onComplete);
      return {
        hit: 3,
        maxHits: 3,
        message: '💥 ¡SUPERNOVA DESATADA! 💥'
      };
    }
  }

  triggerSupernova(onExplodePeak = null, onComplete = null) {
    if (this.isExploding || this.isDisappeared) return;
    this.isExploding = true;

    // 1. Fase 1: Implosión Cinemática y Tensión Gravitacional (1.4s)
    if (this.sound) {
      this.sound.playSupernovaBlast();
    }

    gsap.to(this.sunGroup.scale, {
      x: 0.22,
      y: 0.22,
      z: 0.22,
      duration: 1.4,
      ease: 'power2.in',
      onStart: () => {
        this.coreMat.emissiveIntensity = 12.0;
        this.coreMat.emissive.setHex(0xffffff);
      },
      onComplete: () => {
        // 2. DETONACIÓN SUPERNOVA CINEMÁTICA A CÁMARA LENTA
        // DESAPARECER EL SOL COMPLETAMENTE
        this.sunGroup.visible = false;
        this.sunLight.intensity = 0;
        this.isDisappeared = true;

        // Esfera de destello cegador que se expande a cámara lenta
        this.blastSphere.scale.set(1, 1, 1);
        this.blastMat.opacity = 1;
        gsap.to(this.blastSphere.scale, {
          x: 95,
          y: 95,
          z: 95,
          duration: 3.2,
          ease: 'power2.out'
        });
        gsap.to(this.blastMat, {
          opacity: 0,
          duration: 2.8,
          ease: 'power2.in'
        });

        // Onda expansiva de choque (Shockwave Ring) a más de 380 unidades a cámara lenta
        this.shockRing.scale.set(1, 1, 1);
        this.shockMat.opacity = 1;
        gsap.to(this.shockRing.scale, {
          x: 75,
          y: 75,
          z: 75,
          duration: 4.5,
          ease: 'power3.out'
        });
        gsap.to(this.shockMat, {
          opacity: 0,
          duration: 4.2,
          ease: 'power2.in'
        });

        // Partículas de Supernova que vuelan en 360° a cámara lenta
        this.bpMat.opacity = 1;
        const posAttr = this.blastParticles.geometry.attributes.position;
        const pArr = posAttr.array;
        const progObj = { t: 0 };

        gsap.to(progObj, {
          t: 1,
          duration: 4.5,
          ease: 'power2.out',
          onUpdate: () => {
            for (let i = 0; i < this.bpVel.length; i++) {
              pArr[i * 3] = this.bpVel[i].x * progObj.t;
              pArr[i * 3 + 1] = this.bpVel[i].y * progObj.t;
              pArr[i * 3 + 2] = this.bpVel[i].z * progObj.t;
            }
            posAttr.needsUpdate = true;
          }
        });

        gsap.to(this.bpMat, {
          opacity: 0,
          duration: 3.8,
          delay: 0.6,
          ease: 'power2.in',
          onComplete: () => {
            this.isExploding = false;
            if (onComplete) onComplete();
          }
        });

        // Notificar en el pico de la explosión para iniciar la cinemática de cámara panorámica y desintegración
        if (onExplodePeak) onExplodePeak();
      }
    });
  }

  setHovered(isHovered) {
    this.isHovered = isHovered;
  }

  update(delta, elapsed) {
    if (!this.isExploding && !this.isDisappeared) {
      // Rotación solar continua y texturizada
      this.coreMesh.rotation.y += delta * 0.35;
      this.coronaMesh1.rotation.y -= delta * 0.25;
      this.coronaMesh2.rotation.x += delta * 0.2;
      this.coronaMesh3.rotation.z -= delta * 0.15;

      this.flareRing1.rotation.z += delta * 0.6;
      this.flareRing2.rotation.z -= delta * 0.5;
      this.flareRing3.rotation.y += delta * 0.45;

      this.particles.rotation.y += delta * 0.3;

      // Respiración de energía estelar
      const pulse = Math.sin(elapsed * 2.5) * 0.08;
      const targetBaseScale = this.isHovered ? 1.18 : 1.0;
      const finalScale = targetBaseScale + pulse;
      this.sunGroup.scale.set(finalScale, finalScale, finalScale);

      // Flotación cósmica
      this.group.position.y = 12 + Math.sin(elapsed * 1.5) * 1.2;

      if (this.isHovered) {
        this.coreMat.emissiveIntensity = 4.8;
      } else {
        this.coreMat.emissiveIntensity = 3.5 + Math.sin(elapsed * 3.5) * 0.6;
      }
    }
  }

  restoreSun(duration = 1.5) {
    this.isExploding = false;
    this.isDisappeared = false;
    this.hitCount = 0;
    this.sunGroup.visible = true;
    this.coreMat.emissiveIntensity = 3.5;
    this.coreMat.emissive.setHex(0xff4d00);
    this.sunLight.intensity = 3.5;

    gsap.fromTo(
      this.sunGroup.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      { x: 1.0, y: 1.0, z: 1.0, duration: duration, ease: 'back.out(1.5)' }
    );
  }
}
