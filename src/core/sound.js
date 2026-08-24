import { birthdayConfig } from '../config.js';

export class SoundManager {
  constructor() {
    this.config = birthdayConfig.audio;
    this.isPlaying = false;
    this.isMuted = false;
    this.audioElement = null;
    this.hasCustomAudio = false;

    // Web Audio API Context para sintetizador ambiental de respaldo & SFX
    this.audioCtx = null;
    this.synthGain = null;
    this.synthInterval = null;
    this.padOscillators = [];

    this.initAudioElement();
  }

  initAudioElement() {
    try {
      this.audioElement = new Audio();
      this.audioElement.src = this.config.musicUrl;
      this.audioElement.loop = true;
      this.audioElement.volume = this.config.volume || 0.6;

      this.audioElement.addEventListener('canplaythrough', () => {
        this.hasCustomAudio = true;
      });

      this.audioElement.addEventListener('error', () => {
        this.hasCustomAudio = false;
      });
    } catch (e) {
      this.hasCustomAudio = false;
    }
  }

  initWebAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.synthGain = this.audioCtx.createGain();
        this.synthGain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
        this.synthGain.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.initWebAudio();

    if (this.hasCustomAudio && this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlaying = true;
      }).catch(() => {
        // Si falla la reproducción del archivo, iniciar sintetizador
        this.startAmbientSynth();
        this.isPlaying = true;
      });
    } else {
      // Iniciar sintetizador armónico celestial
      this.startAmbientSynth();
      this.isPlaying = true;
    }
  }

  pause() {
    if (this.audioElement && this.hasCustomAudio) {
      this.audioElement.pause();
    }
    this.stopAmbientSynth();
    this.isPlaying = false;
  }

  /**
   * Generador armónico celestial romántico con Web Audio API
   * Acordes etéreos con filtro cálido y campanillas suaves
   */
  startAmbientSynth() {
    if (!this.audioCtx || this.synthInterval) return;

    // Escala pentatónica romántica (Eb mayor etéreo: Eb4, F4, G4, Bb4, C5, Eb5, G5)
    const chordProgressions = [
      [155.56, 196.00, 233.08, 311.13], // Eb Maj7 (Eb3, G3, Bb3, Eb4)
      [130.81, 196.00, 233.08, 261.63], // Cm7 (C3, G3, Bb3, C4)
      [103.83, 155.56, 207.65, 261.63], // Ab Maj7 (Ab2, Eb3, Ab3, C4)
      [116.54, 174.61, 233.08, 293.66]  // Bb sus (Bb2, F3, Bb3, D4)
    ];

    let currentChordIndex = 0;

    const playChord = () => {
      if (!this.audioCtx || !this.isPlaying) return;
      const now = this.audioCtx.currentTime;
      const freqs = chordProgressions[currentChordIndex];
      currentChordIndex = (currentChordIndex + 1) % chordProgressions.length;

      freqs.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + Math.sin(now) * 100, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 2.5);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 7.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.synthGain);

        osc.start(now);
        osc.stop(now + 8);
      });

      // Tocar una campanita estelar aleatoria
      this.playStardustChime();
    };

    playChord();
    this.synthInterval = setInterval(playChord, 7000);
  }

  stopAmbientSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  playStardustChime() {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    const chimeFreqs = [587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51];
    const randFreq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(randFreq, now + 1.2);

    gain.gain.setValueAtTime(0.001, now + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.03, now + 1.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    osc.connect(gain);
    gain.connect(this.synthGain);

    osc.start(now + 1.2);
    osc.stop(now + 3.8);
  }

  playClickSound() {
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {
      // Ignorar errores de autoplay previo a interacción
    }
  }

  playHeartbeatSound() {
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      
      // Primer pulso "Lub"
      const osc1 = this.audioCtx.createOscillator();
      const gain1 = this.audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65, now);
      osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc1.connect(gain1);
      gain1.connect(this.audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);

      // Segundo pulso "Dub"
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(75, now + 0.15);
      osc2.frequency.exponentialRampToValueAtTime(45, now + 0.28);
      gain2.gain.setValueAtTime(0.07, now + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc2.connect(gain2);
      gain2.connect(this.audioCtx.destination);
      osc2.start(now + 0.15);
      osc2.stop(now + 0.35);
    } catch (e) {}
  }

  playTypewriterKey() {
    this.initWebAudio();
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      const freqs = [659.25, 783.99, 880.00, 987.77, 1046.50];
      const freq = freqs[Math.floor(Math.random() * freqs.length)];
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  playStardustChime() {
    this.initWebAudio();
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      [1046.50, 1318.51, 1567.98, 2093.00].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.02, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.4);
      });
    } catch (e) {}
  }

  playSupernovaBlast() {
    this.initWebAudio();
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;

      // 1. Inhale de energía cósmica celestial (0s a 1.4s) — Armónicos suaves en ascenso
      const riseChord = [261.63, 329.63, 392.00, 523.25, 659.25];
      riseChord.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * 0.75, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 1.35);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 1.35);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.045 / riseChord.length, now + 1.25);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.42);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 1.45);
      });

      // 2. Sub-bajo cinematográfico profundo y sedoso (Sub-drop sin distorsión)
      const subOsc = this.audioCtx.createOscillator();
      const subGain = this.audioCtx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(95, now + 1.35);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + 3.8);

      subGain.gain.setValueAtTime(0.001, now + 1.35);
      subGain.gain.linearRampToValueAtTime(0.22, now + 1.45);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);

      subOsc.connect(subGain);
      subGain.connect(this.audioCtx.destination);
      subOsc.start(now + 1.35);
      subOsc.stop(now + 4.4);

      // 3. Resplandor armónico majestuoso (Acorde cósmico expansivo Eb Maj9)
      const bloomChord = [155.56, 233.08, 311.13, 392.00, 466.16, 587.33, 783.99, 1174.66];
      bloomChord.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 1.4);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, now + 1.4);
        filter.frequency.exponentialRampToValueAtTime(600, now + 4.5);

        const stagger = idx * 0.04;
        gain.gain.setValueAtTime(0.001, now + 1.4 + stagger);
        gain.gain.linearRampToValueAtTime(0.055, now + 1.55 + stagger);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + 1.4 + stagger);
        osc.stop(now + 4.8);
      });

      // 4. Campanillas de polvo estelar descendiendo suavemente
      [1046.50, 1318.51, 1567.98, 2093.00, 2637.02].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 1.7 + i * 0.14);

        gain.gain.setValueAtTime(0.025, now + 1.7 + i * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.7 + i * 0.14 + 1.8);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + 1.7 + i * 0.14);
        osc.stop(now + 1.7 + i * 0.14 + 2.0);
      });
    } catch (e) {}
  }

  playSolarHitSound(level = 1) {
    this.initWebAudio();
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;

      if (level === 1) {
        // Golpe 1: Campana de cristal pura + pop táctil satisfactorio (C5 + C6)
        const notes = [523.25, 1046.50, 1567.98];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.02);

          const vol = i === 0 ? 0.08 : 0.04;
          gain.gain.setValueAtTime(vol, now + i * 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.02 + 0.45);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + i * 0.02);
          osc.stop(now + i * 0.02 + 0.5);
        });

        // Pop táctil sub
        const sub = this.audioCtx.createOscillator();
        const subGain = this.audioCtx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(90, now);
        sub.frequency.exponentialRampToValueAtTime(45, now + 0.09);
        subGain.gain.setValueAtTime(0.06, now);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
        sub.connect(subGain);
        subGain.connect(this.audioCtx.destination);
        sub.start(now);
        sub.stop(now + 0.11);

      } else if (level === 2) {
        // Golpe 2: Resonancia de cristal dorado más rica (E5 + B5 + E6)
        const notes = [659.25, 987.77, 1318.51, 1975.53];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.025);

          const vol = i === 0 ? 0.09 : 0.05;
          gain.gain.setValueAtTime(vol, now + i * 0.025);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.025 + 0.65);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + i * 0.025);
          osc.stop(now + i * 0.025 + 0.7);
        });

        // Pop táctil sub más cálido
        const sub = this.audioCtx.createOscillator();
        const subGain = this.audioCtx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(110, now);
        sub.frequency.exponentialRampToValueAtTime(50, now + 0.12);
        subGain.gain.setValueAtTime(0.08, now);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
        sub.connect(subGain);
        subGain.connect(this.audioCtx.destination);
        sub.start(now);
        sub.stop(now + 0.14);

      } else {
        // Golpe 3: Cascada armónica luminosa triunfal (G5, C6, E6, G6, C7)
        const notes = [783.99, 1046.50, 1318.51, 1567.98, 2093.00];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.03);

          gain.gain.setValueAtTime(0.07, now + i * 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.03 + 0.95);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + i * 0.03);
          osc.stop(now + i * 0.03 + 1.0);
        });

        // Pulso resonante expansivo
        const sub = this.audioCtx.createOscillator();
        const subGain = this.audioCtx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(130, now);
        sub.frequency.exponentialRampToValueAtTime(40, now + 0.22);
        subGain.gain.setValueAtTime(0.1, now);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
        sub.connect(subGain);
        subGain.connect(this.audioCtx.destination);
        sub.start(now);
        sub.stop(now + 0.25);
      }
    } catch (e) {}
  }
}
