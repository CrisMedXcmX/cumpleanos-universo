import gsap from 'gsap';
import { birthdayConfig } from '../config.js';

export class LetterModalController {
  constructor(soundManager, onCompleteCallback) {
    this.soundManager = soundManager;
    this.onCompleteCallback = onCompleteCallback;

    this.config = birthdayConfig.letterSection;
    this.isOpened = false;
    this.isTyping = false;
    this.hasFinishedTyping = false;

    // Elementos del DOM
    this.overlay = document.getElementById('letter-overlay');
    this.envelopeWrapper = document.getElementById('envelope-wrapper');
    this.envelopeCard = document.getElementById('envelope-card');
    this.btnOpen = document.getElementById('btn-open-letter');
    this.parchmentWrapper = document.getElementById('parchment-wrapper');
    this.letterTitle = document.getElementById('letter-title');
    this.letterDate = document.getElementById('letter-date');
    this.letterBody = document.getElementById('letter-body');
    this.letterSignOff = document.getElementById('letter-sign-off');
    this.letterSignature = document.getElementById('letter-signature');
    this.btnAfterLetter = document.getElementById('btn-after-letter');

    this.initContents();
    this.initEvents();
  }

  initContents() {
    this.letterTitle.textContent = this.config.title;
    this.letterDate.textContent = this.config.dateStamp || birthdayConfig.birthdayDate;
    this.letterSignOff.textContent = this.config.signOff;
    this.letterSignature.textContent = this.config.signature || birthdayConfig.senderName;
    if (this.btnAfterLetter) {
      this.btnAfterLetter.innerHTML = '<span>Reiniciar viaje ✦</span>';
    }
  }

  initEvents() {
    const handleOpen = () => {
      if (!this.isOpened) {
        this.openLetter();
      }
    };

    if (this.btnOpen) this.btnOpen.addEventListener('click', handleOpen);
    if (this.envelopeCard) this.envelopeCard.addEventListener('click', handleOpen);

    // Click en el pergamino durante el tipeo para saltar la animación al instante
    if (this.parchmentWrapper) {
      this.parchmentWrapper.addEventListener('click', (e) => {
        if (this.isTyping && !e.target.closest('#btn-after-letter')) {
          this.skipTypewriter();
        }
      });
    }

    if (this.btnAfterLetter) {
      this.btnAfterLetter.addEventListener('click', () => {
        this.soundManager.playClickSound();
        this.hideSection();
        if (this.onCompleteCallback) {
          this.onCompleteCallback();
        }
      });
    }
  }

  showSection() {
    this.overlay.classList.add('active');
    if (this.envelopeWrapper) this.envelopeWrapper.classList.remove('hidden');
    this.hideBackgroundHUD();
  }

  hideSection() {
    this.overlay.classList.remove('active');
    this.isOpened = false;
    this.restoreBackgroundHUD();
  }

  openLetterDirectly() {
    this.overlay.classList.add('active');
    if (this.envelopeWrapper) this.envelopeWrapper.classList.add('hidden');
    if (this.parchmentWrapper) this.parchmentWrapper.classList.add('visible');
    this.isOpened = true;
    this.hideBackgroundHUD();
    this.startTypewriter();
  }

  openLetter() {
    this.isOpened = true;
    this.soundManager.playClickSound();
    this.soundManager.playStardustChime();
    this.hideBackgroundHUD();

    gsap.to(this.envelopeWrapper, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        this.envelopeWrapper.classList.add('hidden');
        this.parchmentWrapper.classList.add('visible');
        this.startTypewriter();
      }
    });
  }

  hideBackgroundHUD() {
    const hud = document.getElementById('universe-hud');
    if (hud) {
      hud.style.opacity = '0';
      hud.style.pointerEvents = 'none';
      hud.style.transition = 'opacity 0.4s ease';
    }

    const topNav = document.getElementById('top-nav');
    if (topNav) {
      topNav.style.opacity = '0';
      topNav.style.pointerEvents = 'none';
      topNav.style.transition = 'opacity 0.4s ease';
    }

    const guidance = document.getElementById('space-guidance');
    if (guidance) guidance.style.display = 'none';

    const labels = document.getElementById('labels-container');
    if (labels) labels.style.display = 'none';
  }

  restoreBackgroundHUD() {
    const hud = document.getElementById('universe-hud');
    if (hud) {
      hud.style.opacity = '1';
      hud.style.pointerEvents = 'auto';
    }

    const topNav = document.getElementById('top-nav');
    if (topNav) {
      topNav.style.opacity = '1';
      topNav.style.pointerEvents = 'auto';
    }

    const guidance = document.getElementById('space-guidance');
    if (guidance) guidance.style.display = 'flex';

    const labels = document.getElementById('labels-container');
    if (labels) labels.style.display = 'block';
  }

  skipTypewriter() {
    if (this.hasFinishedTyping) return;
    this.isTyping = false;
    this.hasFinishedTyping = true;
    if (this.soundManager) this.soundManager.playStardustChime();

    this.letterBody.innerHTML = '';
    const paragraphs = this.config.letterText;
    paragraphs.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      this.letterBody.appendChild(p);
    });

    this.letterBody.scrollTop = 0;

    gsap.to(this.btnAfterLetter, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  async startTypewriter() {
    if (this.isTyping) return;
    this.isTyping = true;
    this.hasFinishedTyping = false;
    this.letterBody.innerHTML = '';

    if (this.btnAfterLetter) {
      this.btnAfterLetter.style.opacity = '0';
      this.btnAfterLetter.style.transform = 'translateY(10px)';
    }

    const paragraphs = this.config.letterText;
    
    for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
      if (!this.isTyping) break; // Si se llamó a skipTypewriter()

      const text = paragraphs[pIdx];
      const pElement = document.createElement('p');
      this.letterBody.appendChild(pElement);

      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      pElement.appendChild(cursor);

      for (let cIdx = 0; cIdx < text.length; cIdx++) {
        if (!this.isTyping) break;

        cursor.insertAdjacentText('beforebegin', text[cIdx]);
        this.letterBody.scrollTop = this.letterBody.scrollHeight;

        const delay = text[cIdx] === ' ' ? 8 : (text[cIdx] === '.' || text[cIdx] === ',') ? 35 : 12;
        await new Promise(r => setTimeout(r, delay));
      }

      cursor.remove();
      this.letterBody.scrollTop = this.letterBody.scrollHeight;
      await new Promise(r => setTimeout(r, 90));
    }

    this.hasFinishedTyping = true;
    this.isTyping = false;

    // Mostrar botón de reinicio sutil
    gsap.to(this.btnAfterLetter, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }
}
