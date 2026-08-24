import * as THREE from 'three';
import gsap from 'gsap';
import { birthdayConfig } from '../config.js';

export class MemoryModalController {
  constructor(planetsSystem, cameraController, soundManager, snoopyPlane) {
    this.planetsSystem = planetsSystem;
    this.cameraController = cameraController;
    this.soundManager = soundManager;
    this.snoopyPlane = snoopyPlane;

    this.memories = birthdayConfig.memories;
    this.currentIndex = 0;
    this.isOpen = false;
    this.isTransitioning = false;
    this.dialogueTypewriterTimer = null;

    // Elementos del DOM
    this.modal = document.getElementById('memory-modal');
    this.cardModal = this.modal.querySelector('.memory-card-modal');
    this.labelsContainer = document.getElementById('labels-container');
    this.tagEl = document.getElementById('memory-tag');
    this.dateEl = document.getElementById('memory-date');
    this.indicatorEl = document.getElementById('memory-indicator');

    // Elementos del Diálogo NPC con Snoopy
    this.snoopyDialogueEl = document.getElementById('snoopy-dialogue-text');

    // Elementos de Vista Individual
    this.singleView = document.getElementById('single-memory-view');
    this.titleEl = document.getElementById('memory-title');
    this.descEl = document.getElementById('memory-desc');
    this.imgEl = document.getElementById('memory-img');

    // Elementos de Vista Galería con 6 Espacios
    this.galleryView = document.getElementById('gallery-6-view');
    this.galleryMainTitle = document.getElementById('gallery-main-title');
    this.galleryMainDesc = document.getElementById('gallery-main-desc');
    this.galleryGridContainer = document.getElementById('gallery-grid-container');

    // Botones de Navegación
    this.btnClose = document.getElementById('btn-close-memory');
    this.btnPrev = document.getElementById('btn-prev-memory');
    this.btnNext = document.getElementById('btn-next-memory');

    this.initLabels();
    this.initEvents();
  }

  initLabels() {
    this.labelsContainer.innerHTML = '';
    this.labelElements = [];

    this.memories.forEach((mem, index) => {
      const tag = document.createElement('div');
      tag.className = 'planet-3d-tag';
      tag.innerHTML = `
        <span class="tag-dot"></span>
        <span class="tag-icon">${mem.icon}</span>
        <span class="tag-text">${mem.title}</span>
      `;

      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openMemory(index);
      });

      this.labelsContainer.appendChild(tag);
      this.labelElements.push(tag);
    });
  }

  initEvents() {
    this.btnClose.addEventListener('click', () => this.closeMemory());
    this.btnPrev.addEventListener('click', () => this.prevMemory());
    this.btnNext.addEventListener('click', () => this.nextMemory());

    // Cerrar al hacer click en el fondo
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeMemory();
      }
    });

    // Fallback de imagen en caso de error de carga en vista individual
    this.imgEl.addEventListener('error', () => {
      this.imgEl.src = `assets/foto${this.currentIndex + 1}.svg`;
    });
  }

  openMemory(index) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = index;
    const mem = this.memories[index];
    if (!mem) {
      this.isTransitioning = false;
      return;
    }

    this.isOpen = true;
    this.soundManager.playClickSound();

    // 1. Si el modal estaba abierto, cerrarlo inmediatamente para apreciar el vuelo espacial
    this.modal.classList.remove('active');
    if (this.dialogueTypewriterTimer) {
      clearInterval(this.dialogueTypewriterTimer);
      this.dialogueTypewriterTimer = null;
    }

    if (this.onMemoryOpened) {
      this.onMemoryOpened(index);
    }

    // Ocultar etiquetas flotantes y guía durante el viaje
    this.labelsContainer.style.display = 'none';
    const spaceGuidance = document.getElementById('space-guidance');
    if (spaceGuidance) spaceGuidance.classList.remove('visible');

    // Obtener la posición del planeta en 3D
    const planetObj = this.planetsSystem.planets[index];
    if (planetObj) {
      const targetPos = planetObj.basePos.clone();
      const travelDuration = 4.2;

      // 2. Enviar a Snoopy en su avión volador hacia ese planeta
      if (this.snoopyPlane) {
        this.snoopyPlane.flyToPlanet(targetPos, travelDuration);
      }

      const romanticMessage = mem.description || mem.snoopyDialogue;

      // 3. Cámara en 3ra Persona: Viaja directamente detrás de Snoopy disfrutando el vuelo sin modales
      this.cameraController.escortCompanionToPlanet(this.snoopyPlane.group, targetPos, travelDuration, () => {
        // 4. Al llegar al planeta: Actualizar datos de contenido en el modal
        if (this.tagEl) this.tagEl.textContent = mem.tag || `Capítulo ${index + 1}`;
        if (this.dateEl) this.dateEl.textContent = mem.date || '';
        if (this.indicatorEl) this.indicatorEl.textContent = `${index + 1} / ${this.memories.length}`;

        if (mem.isGallery && Array.isArray(mem.gallery)) {
          this.cardModal.classList.add('is-gallery');
          if (this.singleView) this.singleView.style.display = 'none';
          if (this.galleryView) this.galleryView.style.display = 'flex';

          if (this.galleryMainTitle) this.galleryMainTitle.textContent = mem.title;
          if (this.galleryMainDesc) this.galleryMainDesc.textContent = mem.description;
          this.renderGalleryItems(mem.gallery);
        } else {
          this.cardModal.classList.remove('is-gallery');
          if (this.galleryView) this.galleryView.style.display = 'none';
          if (this.singleView) this.singleView.style.display = 'block';

          if (this.titleEl) this.titleEl.textContent = mem.title;
          if (this.descEl) this.descEl.textContent = mem.description;
          if (this.imgEl) this.imgEl.src = mem.image;
        }

        // 5. Abrir diálogo y narrar
        this.modal.classList.add('active');
        this.soundManager.playStardustChime();
        this.playSnoopyDialogue(romanticMessage);
        this.isTransitioning = false;
      });
    } else {
      this.isTransitioning = false;
    }
  }

  playSnoopyDialogue(fullText) {
    if (this.dialogueTypewriterTimer) {
      clearInterval(this.dialogueTypewriterTimer);
      this.dialogueTypewriterTimer = null;
    }

    if (!this.snoopyDialogueEl) return;
    this.snoopyDialogueEl.textContent = '';
    
    let charIdx = 0;
    const speed = 22; // Milisegundos por letra

    this.dialogueTypewriterTimer = setInterval(() => {
      if (charIdx < fullText.length) {
        this.snoopyDialogueEl.textContent += fullText[charIdx];
        
        // Sonido suave de mecanografía / blip cada 4 caracteres
        if (charIdx % 4 === 0 && fullText[charIdx] !== ' ') {
          if (this.soundManager && typeof this.soundManager.playTypewriterKey === 'function') {
            this.soundManager.playTypewriterKey();
          }
        }
        charIdx++;
      } else {
        clearInterval(this.dialogueTypewriterTimer);
        this.dialogueTypewriterTimer = null;
      }
    }, speed);
  }

  renderGalleryItems(items) {
    this.galleryGridContainer.innerHTML = '';

    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'gallery-item-card';
      card.innerHTML = `
        <div class="gallery-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="gallery-thumb-img" loading="lazy" />
        </div>
        <div class="gallery-item-info">
          <h4 class="gallery-item-title">${item.title}</h4>
          <p class="gallery-item-desc">${item.description}</p>
        </div>
      `;

      const img = card.querySelector('.gallery-thumb-img');
      img.addEventListener('error', () => {
        img.src = `assets/galeria${i + 1}.svg`;
      });

      this.galleryGridContainer.appendChild(card);
    });
  }

  closeMemory() {
    this.isOpen = false;
    this.soundManager.playClickSound();
    this.modal.classList.remove('active');

    if (this.dialogueTypewriterTimer) {
      clearInterval(this.dialogueTypewriterTimer);
      this.dialogueTypewriterTimer = null;
    }

    // 1. Snoopy reanuda su vuelo cósmico libre
    if (this.snoopyPlane) {
      this.snoopyPlane.resumeCosmicFlight();
    }

    // 2. Regresar cámara a la vista panorámica del universo
    this.cameraController.moveTo(
      new THREE.Vector3(0, 18, 90),
      new THREE.Vector3(0, 0, 0),
      2.0,
      'power2.inOut',
      () => {
        const spaceGuidance = document.getElementById('space-guidance');
        if (spaceGuidance) spaceGuidance.classList.add('visible');
      }
    );
  }

  closeModal() {
    this.closeMemory();
  }

  nextMemory() {
    if (this.currentIndex >= this.memories.length - 1) {
      this.closeMemory();
      if (this.onNextAfterLastMemory) {
        this.onNextAfterLastMemory();
      }
    } else {
      this.openMemory(this.currentIndex + 1);
    }
  }

  prevMemory() {
    const prevIdx = (this.currentIndex - 1 + this.memories.length) % this.memories.length;
    this.openMemory(prevIdx);
  }

  updateLabels(width, height) {
    if (this.isOpen) {
      this.labelsContainer.style.display = 'none';
      return;
    }
    this.labelsContainer.style.display = 'block';

    const positions = this.planetsSystem.getScreenPositions(width, height);
    positions.forEach((pos, idx) => {
      const el = this.labelElements[idx];
      if (el) {
        if (pos.visible && pos.x > 0 && pos.x < width && pos.y > 0 && pos.y < height) {
          el.style.display = 'flex';
          el.style.left = `${pos.x}px`;
          el.style.top = `${pos.y - 25}px`;
        } else {
          el.style.display = 'none';
        }
      }
    });
  }
}
