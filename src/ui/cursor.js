/**
 * ============================================================================
 * ESTELA DE POLVO ESTELAR Y CORAZONES DEL CURSOR
 * ============================================================================
 */

export class CursorTrail {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    this.particles = [];
    this.hearts = [];
    this.mouse = { x: -100, y: -100, isMoving: false };
    this.lastSpawn = 0;

    this.resize();
    this.initEvents();
    this.startLoop();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initEvents() {
    window.addEventListener('resize', this.resize.bind(this));

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.spawnTrailParticle(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        this.mouse.x = touch.clientX;
        this.mouse.y = touch.clientY;
        this.spawnTrailParticle(touch.clientX, touch.clientY);
      }
    }, { passive: true });

    window.addEventListener('click', (e) => {
      this.spawnClickHeart(e.clientX, e.clientY);
      this.spawnSparkleBurst(e.clientX, e.clientY);
    });
  }

  spawnTrailParticle(x, y) {
    const now = performance.now();
    if (now - this.lastSpawn < 25) return; // Limitar frecuencia para máximo rendimiento
    this.lastSpawn = now;

    if (this.particles.length > 80) return;

    this.particles.push({
      x: x + (Math.random() - 0.5) * 8,
      y: y + (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2 - 0.5,
      size: Math.random() * 2.8 + 1.2,
      alpha: 0.9,
      color: Math.random() > 0.4 ? '#f5d77f' : '#f3a6b2',
      decay: 0.025 + Math.random() * 0.02
    });
  }

  spawnClickHeart(x, y) {
    for (let i = 0; i < 3; i++) {
      this.hearts.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: -1.8 - Math.random() * 2.5,
        size: 14 + Math.random() * 10,
        alpha: 1,
        rotation: (Math.random() - 0.5) * 0.4,
        decay: 0.016 + Math.random() * 0.01
      });
    }
  }

  spawnSparkleBurst(x, y) {
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1.5,
        alpha: 1,
        color: '#ffffff',
        decay: 0.035
      });
    }
  }

  drawHeart(ctx, x, y, size, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.fillStyle = '#e63956';
    ctx.shadowColor = '#ff4b72';
    ctx.shadowBlur = 12;

    const s = size / 20;
    ctx.beginPath();
    ctx.moveTo(0, s * -5);
    ctx.bezierCurveTo(s * 5, s * -15, s * 15, s * -5, 0, s * 12);
    ctx.bezierCurveTo(s * -15, s * -5, s * -5, s * -15, 0, s * -5);
    ctx.fill();
    ctx.restore();
  }

  startLoop() {
    const loop = () => {
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Dibujar partículas de estela
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 6;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }

      // Dibujar corazones flotantes
      for (let i = this.hearts.length - 1; i >= 0; i--) {
        const h = this.hearts[i];
        h.x += h.vx;
        h.y += h.vy;
        h.alpha -= h.decay;

        if (h.alpha <= 0) {
          this.hearts.splice(i, 1);
          continue;
        }

        this.drawHeart(this.ctx, h.x, h.y, h.size, h.alpha, h.rotation);
      }

      requestAnimationFrame(loop);
    };

    loop();
  }
}
