import * as THREE from 'three';

export class AppScene {
  constructor(container) {
    this.container = container;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Configuración de Calidad Adaptativa
    this.quality = this.detectOptimalQuality();
    
    // Escena Three.js
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x03030c, 0.0012);

    // Cámara Principal adaptada a orientación móvil/desktop
    const isPortraitMobile = this.width < 768 && this.width < this.height;
    this.camera = new THREE.PerspectiveCamera(
      isPortraitMobile ? 66 : 55,
      this.width / this.height,
      0.1,
      2500
    );
    this.camera.position.set(0, 0, 120);

    // Renderizador WebGL de Alto Rendimiento
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality !== 'low',
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.applyQualitySettings();
    this.renderer.setSize(this.width, this.height);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    this.container.appendChild(this.renderer.domElement);

    // Reloj y Estado
    this.clock = new THREE.Clock();
    this.updateCallbacks = [];
    
    // Parallax y Mouse
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.setupEvents();
  }

  detectOptimalQuality() {
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || window.innerWidth < 768;
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    if (isMobile || isLowPower) {
      return 'medium';
    }
    return 'high';
  }

  setQuality(level) {
    if (['high', 'medium', 'low'].includes(level)) {
      this.quality = level;
      this.applyQualitySettings();
    }
  }

  applyQualitySettings() {
    let dpr = 1;
    if (this.quality === 'high') {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    } else if (this.quality === 'medium') {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    } else {
      dpr = 1;
    }
    this.renderer.setPixelRatio(dpr);
  }

  setupEvents() {
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true });
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;

    // Adaptación dinámica de FOV según dimensiones de pantalla y orientación
    if (this.width < 768 && this.width < this.height) {
      this.camera.fov = 66; // Modo vertical móvil
    } else if (this.height <= 550) {
      this.camera.fov = 48; // Modo horizontal panorámico compacto
    } else {
      this.camera.fov = 55; // Desktop estándar
    }

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.applyQualitySettings();
  }

  onMouseMove(e) {
    this.mouse.targetX = (e.clientX / this.width) * 2 - 1;
    this.mouse.targetY = -(e.clientY / this.height) * 2 + 1;
  }

  onTouchMove(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      this.mouse.targetX = (touch.clientX / this.width) * 2 - 1;
      this.mouse.targetY = -(touch.clientY / this.height) * 2 + 1;
    }
  }

  onUpdate(callback) {
    this.updateCallbacks.push(callback);
  }

  start() {
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = Math.min(this.clock.getDelta(), 0.1);
      const elapsed = this.clock.getElapsedTime();

      // Suavizado de mouse
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

      for (const cb of this.updateCallbacks) {
        cb(delta, elapsed, this.mouse);
      }

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}
