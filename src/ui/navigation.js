import * as THREE from 'three';
import gsap from 'gsap';
import { birthdayConfig } from '../config.js';

export class NavigationManager {
  constructor(appScene, cameraController, soundManager, heartMorphSystem, letterModalController, memoryModalController, memoryPlanets = null, centralSun = null, snoopyPlane = null, letter3D = null) {
    this.appScene = appScene;
    this.camera = cameraController;
    this.sound = soundManager;
    this.heartMorph = heartMorphSystem;
    this.letterModal = letterModalController;
    this.memoryModal = memoryModalController;
    this.memoryPlanets = memoryPlanets;
    this.centralSun = centralSun;
    this.snoopyPlane = snoopyPlane;
    this.letter3D = letter3D;

    this.currentStep = 0; // 0: Planeta 1, 1: Planeta 2, 2: Planeta 3, 3: Luna, 4: Sol
    this.totalSteps = 5;

    this.visitedPlanets = new Set();
    this.visitedMoon = false;
    this.visitedSun = false;

    // DOM Elements
    this.introScreen = document.getElementById('intro-screen');
    this.universeHud = document.getElementById('universe-hud');
    this.spaceGuidance = document.getElementById('space-guidance');
    this.finaleScreen = document.getElementById('finale-screen');

    // Botones de navegación
    this.btnStart = document.getElementById('btn-start-journey');
    this.btnPrev = document.getElementById('btn-prev-stage');
    this.btnNext = document.getElementById('btn-next-stage');
    this.stepButtons = [
      document.getElementById('step-btn-0'),
      document.getElementById('step-btn-1'),
      document.getElementById('step-btn-2'),
      document.getElementById('step-btn-moon'),
      document.getElementById('step-btn-4')
    ];

    // Elementos del Finale
    this.finaleStep1 = document.getElementById('finale-step1');
    this.finaleStep2 = document.getElementById('finale-step2');
    this.finaleReveal = document.getElementById('finale-main-reveal');
    this.finaleMainTitle = document.getElementById('finale-main-title');
    this.finaleLoveMsg = document.getElementById('finale-love-msg');
    this.finaleWishMsg = document.getElementById('finale-wish-msg');
    this.btnMakeWish = document.getElementById('btn-make-wish');
    this.btnReplay = document.getElementById('btn-replay');
    this.btnFreeModeFinale = document.getElementById('btn-free-mode-finale');

    // Botón de Audio en Top Bar
    this.btnAudio = document.getElementById('btn-audio');

    this.initTexts();
    this.initEvents();
  }

  initTexts() {
    const cfg = birthdayConfig;
    const badgeEl = document.getElementById('intro-badge');
    const line1El = document.getElementById('intro-line1');
    const line2El = document.getElementById('intro-line2');
    const dedEl = document.getElementById('intro-dedication');
    const startEl = document.getElementById('intro-start-text');

    if (badgeEl) badgeEl.textContent = cfg.intro.badge;
    if (line1El) line1El.textContent = cfg.intro.quoteLine1;
    if (line2El) line2El.textContent = cfg.intro.quoteLine2;
    if (dedEl) dedEl.textContent = cfg.intro.dedication;
    if (startEl) startEl.textContent = cfg.intro.startButton;

    if (this.finaleStep1) this.finaleStep1.textContent = cfg.finale.preTitle1;
    if (this.finaleStep2) this.finaleStep2.textContent = cfg.finale.preTitle2;
    if (this.finaleMainTitle) this.finaleMainTitle.textContent = cfg.finale.mainTitle;
    if (this.finaleLoveMsg) this.finaleLoveMsg.textContent = cfg.finale.heartMessage;
    if (this.finaleWishMsg) this.finaleWishMsg.textContent = cfg.finale.wishMessage;
  }

  initEvents() {
    // Iniciar viaje desde Intro
    this.btnStart.addEventListener('click', () => {
      this.sound.play();
      this.updateAudioButtonState(true);
      this.introScreen.classList.remove('active');
      this.universeHud.classList.add('visible');
      this.spaceGuidance.classList.add('visible');
      this.showUniverseOverview();
    });

    // Control de Audio
    this.btnAudio.addEventListener('click', () => {
      const playing = this.sound.togglePlay();
      this.updateAudioButtonState(playing);
    });

    // Navegación HUD Anterior / Siguiente
    this.btnPrev.addEventListener('click', () => {
      this.sound.playClickSound();
      this.goToStep(Math.max(0, this.currentStep - 1));
    });

    this.btnNext.addEventListener('click', () => {
      this.sound.playClickSound();
      const nextStep = this.currentStep + 1;
      if (nextStep < 4) {
        this.goToStep(nextStep);
      } else {
        this.focusSunAndPrompt();
      }
    });

    // Clicks en los pasos del Timeline
    this.stepButtons.forEach((btn, idx) => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        this.sound.playClickSound();
        if (idx < 4) {
          this.goToStep(idx);
        } else {
          this.focusSunAndPrompt();
        }
      });
    });

    // Notificación automática cuando se abre un recuerdo desde el mapa 3D
    if (this.memoryModal) {
      this.memoryModal.onMemoryOpened = (planetIdx) => {
        this.markPlanetVisited(planetIdx);
        this.currentStep = planetIdx;
        this.updateTimelineUI();
      };
      this.memoryModal.onNextAfterLastMemory = () => {
        // Al terminar el capítulo 3 (Galería), llevar al siguiente paso: La Luna de Snoopy
        this.goToStep(3);
      };
    }

    // Finale Acciones
    if (this.btnMakeWish) {
      this.btnMakeWish.addEventListener('click', () => {
        this.sound.playStardustChime();
        this.sound.playHeartbeatSound();

        this.btnMakeWish.innerHTML = '✨ ¡Deseo enviado al universo con amor! ❤️';
        this.btnMakeWish.disabled = true;
      });
    }

    if (this.btnReplay) {
      this.btnReplay.addEventListener('click', () => {
        this.sound.playClickSound();
        window.location.reload();
      });
    }

    if (this.btnFreeModeFinale) {
      this.btnFreeModeFinale.addEventListener('click', () => {
        this.sound.playClickSound();
        this.finaleScreen.classList.remove('active');
        this.universeHud.classList.add('visible');
        if (this.memoryPlanets) {
          this.memoryPlanets.setPlanetsDimmed(false, 1.2);
          this.memoryPlanets.restorePlanetsPosition(1.2);
        }
      });
    }

    // Teclado
    window.addEventListener('keydown', (e) => {
      if (this.introScreen.classList.contains('active')) return;
      if (e.key === 'ArrowRight') {
        this.goToStep(Math.min(this.totalSteps - 1, this.currentStep + 1));
      } else if (e.key === 'ArrowLeft') {
        this.goToStep(Math.max(0, this.currentStep - 1));
      }
    });
  }

  markPlanetVisited(planetIdx) {
    this.visitedPlanets.add(planetIdx);
    const btn = this.stepButtons[planetIdx];
    if (btn) {
      btn.classList.add('visited');
      btn.classList.remove('unvisited');
      const statusIcon = btn.querySelector('.step-status-icon');
      if (statusIcon) statusIcon.textContent = '✓';
    }
  }

  markMoonVisited() {
    this.visitedMoon = true;
    const moonBtn = this.stepButtons[3];
    if (moonBtn) {
      moonBtn.classList.add('visited');
      moonBtn.classList.remove('unvisited');
      const statusIcon = moonBtn.querySelector('.step-status-icon');
      if (statusIcon) statusIcon.textContent = '✓';
    }
  }

  markSunVisited() {
    this.visitedSun = true;
    const sunBtn = this.stepButtons[4];
    if (sunBtn) {
      sunBtn.classList.add('visited');
      sunBtn.classList.remove('unvisited');
    }
  }

  showUniverseOverview() {
    this.currentStep = -1;
    this.updateTimelineUI();

    if (this.spaceGuidance) {
      this.spaceGuidance.classList.add('visible');
    }

    if (this.memoryPlanets) {
      this.memoryPlanets.restorePlanetsPosition(1.0);
      this.memoryPlanets.setPlanetsDimmed(false, 1.0);
    }
    this.letterModal.hideSection();

    const isMobile = window.innerWidth < 768;
    const camPos = isMobile
      ? new THREE.Vector3(0, 26, 140)
      : new THREE.Vector3(0, 32, 160);

    this.camera.moveTo(
      camPos,
      new THREE.Vector3(0, 10, -5),
      2.5,
      'power2.inOut'
    );
  }

  goToStep(stepIndex) {
    this.currentStep = stepIndex;
    this.updateTimelineUI();

    if (this.spaceGuidance) {
      this.spaceGuidance.classList.remove('visible');
    }

    if (stepIndex !== 3) {
      this.isInMoonView = false;
      if (this.onExitMoon) this.onExitMoon();
    }

    if (stepIndex < 3) {
      // 1. Visitar Planeta de Recuerdos (Capítulo 1-3)
      if (this.memoryPlanets) {
        this.memoryPlanets.restorePlanetsPosition(1.0);
        this.memoryPlanets.setPlanetsDimmed(false, 1.0);
      }
      this.letterModal.hideSection();
      this.markPlanetVisited(stepIndex);
      this.memoryModal.openMemory(stepIndex);
    } else if (stepIndex === 3) {
      // 2. Visitar la Luna de Snoopy
      this.visitMoon();
    } else if (stepIndex === 4) {
      // 3. Enfocar el Sol Central y dar la instrucción de 3 toques
      this.focusSunAndPrompt();
    }
  }

  visitMoon() {
    this.currentStep = 3;
    this.isInMoonView = true;
    this.markMoonVisited();
    this.updateTimelineUI();

    if (this.memoryModal) {
      if (typeof this.memoryModal.closeMemory === 'function') {
        this.memoryModal.closeMemory();
      } else if (typeof this.memoryModal.closeModal === 'function') {
        this.memoryModal.closeModal();
      }
    }

    const snoopyTargetPos = new THREE.Vector3(0, 81.6, -134.6);
    const flightDuration = 3.2;

    this.sound.playStardustChime();

    // Enviar a Snoopy en su avión volador hacia la Luna
    if (this.snoopyPlane) {
      this.snoopyPlane.flyToPlanet(snoopyTargetPos, flightDuration);
    }

    // Salto y saludo alegre de Snoopy en la Luna
    if (this.memoryPlanets) {
      this.memoryPlanets.triggerMoonSnoopyClick();
    }

    // Cámara en 3ra persona detrás de Snoopy
    if (this.snoopyPlane) {
      this.camera.escortCompanionToPlanet(this.snoopyPlane.group, snoopyTargetPos, flightDuration, () => {
        const btnExitMoon = document.getElementById('btn-exit-moon');
        if (btnExitMoon) btnExitMoon.classList.add('visible');
      });
    }

    this.showToast('🌙 🐾 ¡Aterrizaste en la Luna con Snoopy! Toca a Snoopy para saludarlo ✨', '🌙');
  }

  focusSunAndPrompt() {
    this.currentStep = 4;
    this.isInMoonView = false;
    if (this.onExitMoon) this.onExitMoon();
    this.updateTimelineUI();

    if (this.spaceGuidance) {
      this.spaceGuidance.classList.remove('visible');
    }

    // Ocultar botón de salida de la luna si estaba visible
    const btnExitMoon = document.getElementById('btn-exit-moon');
    if (btnExitMoon) btnExitMoon.classList.remove('visible');

    if (this.memoryModal) {
      if (typeof this.memoryModal.closeMemory === 'function') {
        this.memoryModal.closeMemory();
      } else if (typeof this.memoryModal.closeModal === 'function') {
        this.memoryModal.closeModal();
      }
    }

    if (this.memoryModal) {
      if (typeof this.memoryModal.closeMemory === 'function') {
        this.memoryModal.closeMemory();
      } else if (typeof this.memoryModal.closeModal === 'function') {
        this.memoryModal.closeModal();
      }
    }

    const sunPos = this.centralSun ? this.centralSun.group.position.clone() : new THREE.Vector3(0, 12, 0);
    const isMobile = window.innerWidth < 768;
    const sunCamPos = isMobile
      ? new THREE.Vector3(0, 14, 46)
      : new THREE.Vector3(0, 16, 52);

    this.camera.moveTo(sunCamPos, sunPos, 2.2, 'power2.inOut');
    this.showToast('☀️ ✨ ¡Has llegado al Sol Central! Toca el Sol 3 veces para detonar la supernova 💥', '☀️');
  }

  touchSun(clickX, clickY) {
    this.markSunVisited();
    this.currentStep = 4;
    this.updateTimelineUI();

    // Cerrar modal de recuerdos si estaba abierto
    if (this.memoryModal) {
      if (typeof this.memoryModal.closeMemory === 'function') {
        this.memoryModal.closeMemory();
      } else if (typeof this.memoryModal.closeModal === 'function') {
        this.memoryModal.closeModal();
      }
    }

    const sunPos = this.centralSun ? this.centralSun.group.position.clone() : new THREE.Vector3(0, 12, 0);
    const isMobile = window.innerWidth < 768;
    const closeCamPos = sunPos.clone().add(isMobile ? new THREE.Vector3(0, 6, 32) : new THREE.Vector3(0, 8, 38));

    // Si la cámara está lejos, enfocar el Sol primero
    if (this.camera && this.camera.camera) {
      const currentDist = this.camera.camera.position.distanceTo(sunPos);
      if (currentDist > 55) {
        this.camera.moveTo(closeCamPos, sunPos, 1.8, 'power2.inOut');
      }
    }

    if (this.centralSun) {
      const hitResult = this.centralSun.registerHit(
        () => {
          // A. Pico de la Supernova: Onda expansiva y alejamiento panorámico cinemático a cámara lenta (4.8s)
          const expandedCamPos = isMobile
            ? new THREE.Vector3(0, 36, 165)
            : new THREE.Vector3(0, 52, 210);
          this.camera.moveTo(expandedCamPos, new THREE.Vector3(0, 12, 0), 4.8, 'power2.out');

          // B. Desaparición y desintegración gradual de todos los planetas con la onda expansiva
          if (this.memoryPlanets) {
            this.memoryPlanets.disintegratePlanetsSupernova(3.8);
          }

          // Ocultar etiquetas flotantes
          const labelsEl = document.getElementById('labels-container');
          if (labelsEl) labelsEl.style.display = 'none';

          // C. Aparición del Modelo 3D de la Carta en el centro del cosmos
          setTimeout(() => {
            if (this.letter3D) {
              this.letter3D.spawnLetter();
              const letterPos = new THREE.Vector3(0, 12, 0);
              const closeLetterCam = isMobile
                ? new THREE.Vector3(0, 12.2, 30)
                : new THREE.Vector3(0, 13.5, 36);
              this.camera.moveTo(closeLetterCam, letterPos, 2.2, 'power2.inOut');
            } else {
              this.letterModal.openLetterDirectly();
            }
          }, 3400);
        }
      );

      if (hitResult && hitResult.hit) {
        // Shake de la cámara sincronizado con el impacto del Sol
        if (this.camera && typeof this.camera.shake === 'function') {
          if (hitResult.hit === 1) {
            this.camera.shake(1.5, 0.32);
          } else if (hitResult.hit === 2) {
            this.camera.shake(3.0, 0.42);
          } else if (hitResult.hit >= 3) {
            this.camera.shake(5.5, 0.75);
          }
        }

        // Mostrar número flotante directamente en la posición del click / touch
        this.spawnFloatingHitNumber(hitResult.hit, 3, clickX, clickY, 'sun');
      }
    } else {
      if (this.letter3D) {
        this.letter3D.spawnLetter();
      } else {
        this.letterModal.openLetterDirectly();
      }
    }
  }

  touchLetter3D(clickX, clickY) {
    if (!this.letter3D || !this.letter3D.group.visible) return;

    const hitResult = this.letter3D.registerHit(() => {
      // Al abrirse el sobre 3D con el 3er toque, abrir el modal centrado y responsive
      if (this.letterModal) {
        this.letterModal.openLetterDirectly();
      }
    });

    if (hitResult && hitResult.hit) {
      if (this.camera && typeof this.camera.shake === 'function') {
        if (hitResult.hit === 1) this.camera.shake(1.2, 0.25);
        else if (hitResult.hit === 2) this.camera.shake(2.2, 0.35);
        else if (hitResult.hit >= 3) this.camera.shake(3.8, 0.55);
      }

      // Mostrar número flotante directamente en la posición del click / touch
      this.spawnFloatingHitNumber(hitResult.hit, 3, clickX, clickY, 'letter');
    }
  }

  openSunSupernova(clickX, clickY) {
    this.touchSun(clickX, clickY);
  }

  spawnFloatingHitNumber(hit, maxHits = 3, clientX, clientY, type = 'sun') {
    const x = (clientX !== undefined && clientX !== null) ? clientX : window.innerWidth / 2;
    const y = (clientY !== undefined && clientY !== null) ? clientY : window.innerHeight / 2;

    const floatEl = document.createElement('div');
    floatEl.className = 'floating-hit-counter';

    const isLast = hit >= maxHits;
    floatEl.innerHTML = `<span class="hit-num">${hit}</span>`;

    floatEl.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%) scale(0.6);
      pointer-events: none;
      user-select: none;
      z-index: 9999;
      font-family: 'Outfit', sans-serif;
      font-size: ${isLast ? '3.2rem' : hit === 2 ? '2.5rem' : '2.0rem'};
      font-weight: 800;
      letter-spacing: 1px;
      color: ${isLast ? '#ffd166' : hit === 2 ? '#ff6b81' : '#ffffff'};
      text-shadow: 0 0 16px ${isLast ? 'rgba(255, 209, 102, 0.95)' : 'rgba(230, 57, 86, 0.85)'},
                   0 0 30px rgba(255, 209, 102, 0.6),
                   0 4px 12px rgba(0, 0, 0, 0.95);
      opacity: 0;
    `;

    document.body.appendChild(floatEl);

    gsap.timeline({
      onComplete: () => {
        floatEl.remove();
      }
    })
    .to(floatEl, {
      opacity: 1,
      scale: 1.35,
      y: -28,
      duration: 0.16,
      ease: 'back.out(2.5)'
    })
    .to(floatEl, {
      opacity: 0,
      scale: 0.9,
      y: -80,
      duration: 0.52,
      ease: 'power2.in'
    }, '+=0.12');
  }

  showToast(message, icon = '✦') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.background = 'rgba(230, 57, 86, 0.85)';
    toast.style.borderColor = '#ffd166';
    toast.style.boxShadow = '0 0 20px rgba(255, 209, 102, 0.4)';
    toast.innerHTML = `<span>${icon}</span> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  updateTimelineUI() {
    this.stepButtons.forEach((btn, idx) => {
      if (!btn) return;
      if (idx === this.currentStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.updateWalkthroughGuidance();
  }

  updateWalkthroughGuidance() {
    const guidanceEl = document.getElementById('guidance-text');

    // Quitar clases de resaltado previo
    this.stepButtons.forEach(b => b?.classList.remove('walkthrough-highlight'));

    if (!this.visitedPlanets.has(0)) {
      this.stepButtons[0]?.classList.add('walkthrough-highlight');
      if (guidanceEl) guidanceEl.innerHTML = '✨ <strong>Paso 1:</strong> Toca el <strong>Planeta 1 (Capítulo I)</strong> en la barra inferior para comenzar la historia';
    } else if (!this.visitedPlanets.has(1)) {
      this.stepButtons[1]?.classList.add('walkthrough-highlight');
      if (guidanceEl) guidanceEl.innerHTML = '✨ <strong>Paso 2:</strong> Continúa al <strong>Planeta 2 (Capítulo II)</strong>';
    } else if (!this.visitedPlanets.has(2)) {
      this.stepButtons[2]?.classList.add('walkthrough-highlight');
      if (guidanceEl) guidanceEl.innerHTML = '✨ <strong>Paso 3:</strong> Descubre la galería en el <strong>Planeta 3 (Capítulo III)</strong>';
    } else if (!this.visitedMoon) {
      this.stepButtons[3]?.classList.add('walkthrough-highlight');
      if (guidanceEl) guidanceEl.innerHTML = '🌙 ✨ <strong>Paso 4:</strong> ¡Viaja a la <strong>Luna con Snoopy</strong> 🐾!';
    } else {
      this.stepButtons[4]?.classList.add('walkthrough-highlight');
      if (guidanceEl) guidanceEl.innerHTML = '☀️ ✨ ¡Todo explorado! Toca el <strong>Sol Central</strong> para detonar la supernova 💥';
    }
  }

  updateAudioButtonState(playing) {
    if (playing) {
      this.btnAudio.classList.add('playing');
    } else {
      this.btnAudio.classList.remove('playing');
    }
  }

  showFinaleStage() {
    this.introScreen.classList.remove('active');
    this.spaceGuidance.classList.remove('visible');
    this.letterModal.hideSection();
    this.finaleScreen.classList.add('active');

    // Ocultar / opacar planetas durante el gran mensaje final de cumpleaños
    if (this.memoryPlanets) {
      this.memoryPlanets.setPlanetsDimmed(true, 1.5);
    }

    // Ocultar HUD temporalmente durante la revelación del cumpleaños
    this.universeHud.classList.remove('visible');

    // Cámara en posición dramática de visión cósmica
    this.camera.moveTo(
      new THREE.Vector3(0, 0, 80),
      new THREE.Vector3(0, 0, 0),
      3.0,
      'power2.inOut'
    );

    // Secuencia de texto cinematográfico del Finale
    const tl = gsap.timeline();

    // 1. "Y ahora..."
    tl.to(this.finaleStep1, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' })
      .to(this.finaleStep1, { opacity: 0, y: -20, duration: 0.8, delay: 1.5, ease: 'power2.in' })
      
      // 2. "Es tu día. ✨"
      .to(this.finaleStep2, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' })
      .to(this.finaleStep2, { opacity: 0, y: -20, duration: 0.8, delay: 1.5, ease: 'power2.in' })
      
      // 3. Revelar título y activar Corazón 3D y Avión de Snoopy
      .call(() => {
        this.finaleReveal.style.display = 'flex';
        this.sound.playHeartbeatSound();
        this.heartMorph.morphToHeart(3.2);

        // Activar el avión de Snoopy volando alrededor del Corazón 3D
        if (this.snoopyPlane) {
          this.snoopyPlane.group.visible = true;
          this.snoopyPlane.flyAroundHeart();
        }
      })
      .to(this.finaleReveal, { opacity: 1, duration: 1.5, ease: 'power2.out' });
  }

  resetJourney() {
    if (this.sound) {
      this.sound.playClickSound();
      this.sound.playStardustChime();
    }

    // 1. Resetear estados de navegación y timeline
    this.visitedPlanets.clear();
    this.visitedSun = false;
    this.currentStep = 0;
    this.updateTimelineUI();

    // 2. Ocultar carta 3D si estaba visible
    if (this.letter3D) {
      if (this.letter3D.btnContinue) {
        this.letter3D.btnContinue.style.pointerEvents = 'none';
        this.letter3D.btnContinue.style.opacity = '0';
        this.letter3D.btnContinue.style.transform = 'translateX(-50%) translateY(30px)';
      }
      this.letter3D.group.visible = false;
      this.letter3D.isOpen = false;
      this.letter3D.isOpening = false;
      this.letter3D.isTyping = false;
    }

    // 3. Restaurar Sol Central y Planetas
    if (this.centralSun) {
      this.centralSun.restoreSun(1.8);
    }
    if (this.memoryPlanets) {
      this.memoryPlanets.restorePlanetsPosition(1.8);
    }

    // 4. Restaurar interfaz superior e inferior
    const topNav = document.getElementById('top-nav');
    if (topNav) {
      topNav.style.opacity = '1';
      topNav.style.pointerEvents = 'auto';
    }

    const universeHud = document.getElementById('universe-hud');
    if (universeHud) {
      universeHud.style.opacity = '1';
      universeHud.style.pointerEvents = 'auto';
    }

    // 5. Restaurar etiquetas flotantes
    const labelsEl = document.getElementById('labels-container');
    if (labelsEl) labelsEl.style.display = 'block';

    // 6. Mover la cámara a la vista panorámica del universo
    const isMobile = window.innerWidth < 768;
    const overviewPos = isMobile
      ? new THREE.Vector3(0, 24, 115)
      : new THREE.Vector3(0, 28, 125);
    this.camera.moveTo(overviewPos, new THREE.Vector3(0, 12, 0), 2.2, 'power2.inOut');

    // 7. Mensaje toast
    this.showToast('✨ ¡Universo reiniciado con éxito! Puedes explorar de nuevo 🪐', '🌌');
  }
}
