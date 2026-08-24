/**
 * ============================================================================
 * UNIVERSO DE CUMPLEAÑOS — EXPERIENCIA 3D INTERACTIVA & ROMÁNTICA
 * ============================================================================
 */

import * as THREE from 'three';
import { birthdayConfig } from './config.js';
import { AppScene } from './core/scene.js';
import { AppLighting } from './core/lighting.js';
import { CameraController } from './core/camera.js';
import { SoundManager } from './core/sound.js';

import { Starfield } from './world/stars.js';
import { CosmicNebula } from './world/nebula.js';
import { MemoryPlanets } from './world/planets.js';
import { CentralSun } from './world/centralSun.js';
import { HeartMorphSystem } from './world/heartMorph.js';
import { ConstellationsSystem } from './world/constellations.js';
import { SnoopyPlane } from './world/snoopyPlane.js';
import { Letter3D } from './world/letter3D.js';

import { CursorTrail } from './ui/cursor.js';
import { MemoryModalController } from './ui/memoryModal.js';
import { LetterModalController } from './ui/letterModal.js';
import { EasterEggsController } from './ui/easterEggs.js';
import { QualitySettingsController } from './ui/qualitySettings.js';
import { NavigationManager } from './ui/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Contenedor WebGL y Escena
  const container = document.getElementById('webgl-container');
  const appScene = new AppScene(container);

  // 2. Iluminación Cinemática
  const lighting = new AppLighting(appScene.scene);

  // 3. Controlador de Cámara Cinemática
  const cameraController = new CameraController(appScene.camera, appScene.renderer.domElement);

  // 4. Gestor de Sonido Romántico
  const soundManager = new SoundManager();

  // 5. Elementos del Universo 3D
  const starfield = new Starfield(appScene.scene, appScene.quality);
  const nebula = new CosmicNebula(appScene.scene, appScene.quality);
  const memoryPlanets = new MemoryPlanets(appScene.scene, appScene.camera, appScene.quality);
  const centralSun = new CentralSun(appScene.scene, soundManager);
  const heartMorph = new HeartMorphSystem(appScene.scene, appScene.quality);
  const constellations = new ConstellationsSystem(appScene.scene);
  const snoopyPlane = new SnoopyPlane(appScene.scene);
  const letter3D = new Letter3D(appScene.scene, soundManager, () => {
    if (navigationManager) {
      navigationManager.resetJourney();
    }
  });

  // 6. Efectos del Cursor y Canvas 2D
  const cursorCanvas = document.getElementById('cursor-canvas');
  const cursorTrail = new CursorTrail(cursorCanvas);

  // 7. Controladores de UI y Modales
  const memoryModal = new MemoryModalController(memoryPlanets, cameraController, soundManager, snoopyPlane);
  
  let navigationManager = null;
  const letterModal = new LetterModalController(soundManager, () => {
    if (navigationManager) {
      navigationManager.resetJourney();
    }
  });

  const easterEggs = new EasterEggsController(soundManager, constellations);
  const qualitySettings = new QualitySettingsController(appScene, soundManager);

  navigationManager = new NavigationManager(
    appScene,
    cameraController,
    soundManager,
    heartMorph,
    letterModal,
    memoryModal,
    memoryPlanets,
    centralSun,
    snoopyPlane,
    letter3D
  );

  // 8. Raycasting e Interactividad con Objetos 3D en la Escena
  const raycaster = new THREE.Raycaster();
  const normalizedPointer = new THREE.Vector2();

  window.addEventListener('mousemove', (e) => {
    const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
    if (isIntroActive) {
      document.body.style.cursor = 'default';
      return;
    }

    normalizedPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    normalizedPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Detectar hover en planetas, Sol Central y Carta 3D
    const hitObj = memoryPlanets.getIntersectedObject(normalizedPointer, appScene.camera);
    memoryPlanets.setHoveredPlanet(hitObj);

    raycaster.setFromCamera(normalizedPointer, appScene.camera);
    const sunIntersects = raycaster.intersectObject(centralSun.coreMesh);
    centralSun.setHovered(sunIntersects.length > 0);

    const letterHit = letter3D.getIntersectedObject(raycaster);

    if (hitObj || sunIntersects.length > 0 || letterHit) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  });

  let touchStartCoord = { x: 0, y: 0 };
  let isTouchDragging = false;

  window.addEventListener('touchstart', (e) => {
    const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
    if (isIntroActive) return;

    if (e.touches.length === 1) {
      touchStartCoord.x = e.touches[0].clientX;
      touchStartCoord.y = e.touches[0].clientY;
      isTouchDragging = false;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
    if (isIntroActive) return;

    if (e.touches.length === 1) {
      const dx = Math.abs(e.touches[0].clientX - touchStartCoord.x);
      const dy = Math.abs(e.touches[0].clientY - touchStartCoord.y);
      if (dx > 7 || dy > 7) {
        isTouchDragging = true;
      }
    }
  }, { passive: true });

  // Control del botón para salir de la vista de la Luna / Snoopy
  const btnExitMoon = document.getElementById('btn-exit-moon');
  let isInMoonView = false;

  const exitMoonView = () => {
    if (!isInMoonView) return;
    isInMoonView = false;
    if (btnExitMoon) btnExitMoon.classList.remove('visible');

    const isMobile = window.innerWidth < 768;
    const overviewPos = isMobile
      ? new THREE.Vector3(0, 26, 135)
      : new THREE.Vector3(0, 32, 155);

    cameraController.moveTo(overviewPos, new THREE.Vector3(0, 12, 0), 2.0, 'power2.inOut', () => {
      const spaceGuidance = document.getElementById('space-guidance');
      if (spaceGuidance) spaceGuidance.classList.add('visible');
    });

    if (snoopyPlane) {
      snoopyPlane.resumeCosmicFlight();
    }
  };

  if (btnExitMoon) {
    btnExitMoon.addEventListener('click', (e) => {
      e.stopPropagation();
      soundManager.playClickSound();
      exitMoonView();
    });
  }

  // 8. Eventos de Selección Táctil / Click (Raycasting 3D)
  window.addEventListener('click', (e) => {
    // Si la pantalla de inicio está activa, no interactuar con el fondo 3D
    const isIntroActive = document.getElementById('intro-screen')?.classList.contains('active');
    if (isIntroActive) return;

    // Si fue un arrastre de navegación 3D, ignorar el click accidental
    if (isTouchDragging) {
      isTouchDragging = false;
      return;
    }

    // Ignorar si se hizo click en un modal abierto o botón de interfaz
    if (e.target.closest('.modal-backdrop.active') || 
        e.target.closest('.top-nav') || 
        e.target.closest('.universe-hud') || 
        e.target.closest('.planet-3d-tag') || 
        e.target.closest('.letter-overlay.active') ||
        e.target.closest('.exit-moon-btn') ||
        e.target.closest('button')) {
      return;
    }

    normalizedPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    normalizedPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(normalizedPointer, appScene.camera);

    // 0. Verificar si se hizo click en la Carta 3D (3 Clicks para Abrir)
    if (letter3D && letter3D.group.visible) {
      const letterHits = letter3D.getIntersectedObject(raycaster);
      if (letterHits) {
        navigationManager.touchLetter3D(e.clientX, e.clientY);
        return;
      }
    }

    // 1. Verificar si se hizo click en el Sol Central
    const sunIntersects = raycaster.intersectObject(centralSun.coreMesh);
    if (sunIntersects.length > 0) {
      if (isInMoonView) exitMoonView();
      navigationManager.openSunSupernova(e.clientX, e.clientY);
      return;
    }

    // 2. Verificar si se hizo click en un planeta o en Snoopy de la Luna
    const hitObj = memoryPlanets.getIntersectedObject(normalizedPointer, appScene.camera);
    if (hitObj) {
      if (hitObj.userData && hitObj.userData.type === 'memoryPlanet') {
        if (isInMoonView) exitMoonView();
        memoryModal.openMemory(hitObj.userData.index);
      } else if (hitObj.userData && hitObj.userData.isMoon) {
        if (isInMoonView) {
          // Si ya estamos viendo a Snoopy, al hacerle click salta, gira alegremente y saluda
          soundManager.playStardustChime();
          if (memoryPlanets) {
            memoryPlanets.triggerMoonSnoopyClick();
          }
          return;
        }

        isInMoonView = true;
        const snoopyTargetPos = new THREE.Vector3(0, 81.6, -134.6);
        const flightDuration = 3.0;

        soundManager.playStardustChime();

        // Ocultar guía flotante durante el viaje a la Luna
        const spaceGuidance = document.getElementById('space-guidance');
        if (spaceGuidance) spaceGuidance.classList.remove('visible');

        // Enviar a Snoopy en su avión volador hacia la posición de Snoopy en la Luna
        if (snoopyPlane) {
          snoopyPlane.flyToPlanet(snoopyTargetPos, flightDuration);
        }

        // Activar la animación de salto y saludo alegre de Snoopy en la Luna
        if (memoryPlanets) {
          memoryPlanets.triggerMoonSnoopyClick();
        }

        // Cámara en 3ra Persona centrando exactamente a Snoopy en la pantalla
        if (snoopyPlane) {
          cameraController.escortCompanionToPlanet(snoopyPlane.group, snoopyTargetPos, flightDuration, () => {
            // Al llegar, mostrar el botón para salir de la Luna
            if (btnExitMoon) btnExitMoon.classList.add('visible');
          });
        }
      }
    }
  });

  // 9. Bucle de Renderizado y Actualización
  appScene.onUpdate((delta, elapsed, mouse) => {
    cameraController.update(delta, elapsed, mouse);
    starfield.update(delta, elapsed);
    nebula.update(delta, elapsed);
    memoryPlanets.update(delta, elapsed);
    centralSun.update(delta, elapsed);
    letter3D.update(delta, elapsed);
    heartMorph.update(delta, elapsed);
    constellations.update(delta, elapsed);
    snoopyPlane.update(delta, elapsed);

    // Actualizar posiciones proyectadas en pantalla de las etiquetas de planetas
    const introActive = document.getElementById('intro-screen').classList.contains('active');
    const finaleActive = document.getElementById('finale-screen').classList.contains('active');
    const letterActive = letter3D && letter3D.group.visible;
    const sunExploded = centralSun && (centralSun.isExploding || centralSun.isDisappeared);
    const labelsEl = document.getElementById('labels-container');

    if (!introActive && !finaleActive && !letterActive && !sunExploded) {
      if (labelsEl) labelsEl.style.display = 'block';
      memoryModal.updateLabels(window.innerWidth, window.innerHeight);
    } else {
      if (labelsEl) labelsEl.style.display = 'none';
    }
  });

  // 10. Iniciar animación
  appScene.start();

  console.log('🌌 Universo Romántico iniciado con éxito para', birthdayConfig.recipientName);
});
