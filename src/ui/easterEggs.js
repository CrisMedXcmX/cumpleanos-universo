import { birthdayConfig } from '../config.js';

export class EasterEggsController {
  constructor(soundManager, constellationsSystem) {
    this.soundManager = soundManager;
    this.constellationsSystem = constellationsSystem;
    this.config = birthdayConfig.easterEggs;

    // DOM Elements
    this.toastContainer = document.getElementById('toast-container');
    this.btnSecretStar = document.getElementById('btn-secret-star');
    this.secretModal = document.getElementById('secret-modal');
    this.btnCloseSecret = document.getElementById('btn-close-secret');
    this.btnDismissSecret = document.getElementById('btn-dismiss-secret');
    this.secretTitle = document.getElementById('secret-title');
    this.secretText = document.getElementById('secret-text');
    this.btnLoveBurst = document.getElementById('btn-love-burst');

    this.initEvents();
  }

  initEvents() {
    // Botón de Lluvia de Amor
    if (this.btnLoveBurst) {
      this.btnLoveBurst.addEventListener('click', () => {
        this.triggerLoveShower();
      });
    }

    // Modal de la Estrella Dorada
    if (this.btnSecretStar) {
      this.btnSecretStar.addEventListener('click', () => {
        this.openSecretStarModal();
      });
    }

    const closeSecret = () => {
      this.soundManager.playClickSound();
      this.secretModal.classList.remove('active');
    };

    this.btnCloseSecret.addEventListener('click', closeSecret);
    this.btnDismissSecret.addEventListener('click', closeSecret);
    this.secretModal.addEventListener('click', (e) => {
      if (e.target === this.secretModal) closeSecret();
    });

    // Atajos de teclado ('L' para lluvia de amor, 'C' para constelación)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'l' || e.key === 'L') {
        this.triggerLoveShower();
      } else if (e.key === 'c' || e.key === 'C') {
        this.toggleConstellations();
      }
    });
  }

  openSecretStarModal() {
    this.soundManager.playClickSound();
    this.soundManager.playStardustChime();

    this.secretTitle.textContent = this.config.goldenStar.title;
    this.secretText.textContent = this.config.goldenStar.message;
    this.secretModal.classList.add('active');
  }

  triggerMoonSecret() {
    this.soundManager.playStardustChime();
    this.showToast(this.config.moonMessage.message, '🌙');
  }

  triggerLoveShower() {
    this.soundManager.playStardustChime();
    const quotes = this.config.loveKeys;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.showToast(randomQuote, '❤️');
  }

  toggleConstellations() {
    if (this.constellationsSystem) {
      const active = this.constellationsSystem.toggleConstellation();
      this.soundManager.playStardustChime();
      this.showToast(
        active ? '✨ Constelación de Nuestro Amor revelada' : '✨ Constelación oculta',
        '🌌'
      );
    }
  }

  showToast(message, icon = '✦') {
    if (!this.toastContainer) {
      this.toastContainer = document.getElementById('toast-container');
      if (!this.toastContainer) {
        this.toastContainer = document.createElement('div');
        this.toastContainer.id = 'toast-container';
        this.toastContainer.className = 'toast-container';
        document.body.appendChild(this.toastContainer);
      }
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>${icon}</span> ${message}`;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
}
