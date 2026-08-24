export class QualitySettingsController {
  constructor(appScene, soundManager) {
    this.appScene = appScene;
    this.soundManager = soundManager;

    this.btnQuality = document.getElementById('btn-quality');
    this.qualityLabel = document.getElementById('quality-label');
    this.btnFullscreen = document.getElementById('btn-fullscreen');

    this.levels = ['high', 'medium', 'low'];
    this.labels = {
      high: 'Alta',
      medium: 'Media',
      low: 'Baja'
    };

    this.init();
  }

  init() {
    this.updateLabel();

    if (this.btnQuality) {
      this.btnQuality.addEventListener('click', () => {
        this.cycleQuality();
      });
    }

    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener('click', () => {
        this.toggleFullscreen();
      });
    }
  }

  updateLabel() {
    const text = this.labels[this.appScene.quality] || 'Alta';
    if (this.qualityLabel) {
      this.qualityLabel.textContent = text;
    }
    if (this.btnQuality) {
      this.btnQuality.setAttribute('title', `Calidad Gráfica: ${text}`);
    }
  }

  cycleQuality() {
    const currentIdx = this.levels.indexOf(this.appScene.quality);
    const nextIdx = (currentIdx + 1) % this.levels.length;
    const nextLevel = this.levels[nextIdx];

    this.appScene.setQuality(nextLevel);
    this.updateLabel();
    this.soundManager.playClickSound();
  }

  toggleFullscreen() {
    this.soundManager.playClickSound();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }
}
