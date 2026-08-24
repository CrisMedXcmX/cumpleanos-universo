import * as THREE from 'three';
import gsap from 'gsap';

export class HeartMorphSystem {
  constructor(scene, quality = 'high') {
    this.scene = scene;
    this.quality = quality;
    this.morphProgress = { value: 0 };
    this.heartGroup = new THREE.Group();
    this.scene.add(this.heartGroup);

    this.isActive = false;
    this.initHeartParticles();
    this.initConfettiStardust();
  }

  initHeartParticles() {
    let count = 3800;
    if (this.quality === 'medium') count = 2200;
    if (this.quality === 'low') count = 1000;

    this.count = count;
    this.originPositions = new Float32Array(count * 3);
    this.targetPositions = new Float32Array(count * 3);
    this.currentPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    const palette = [
      new THREE.Color(0xff4b72), // Rosa neón brillante
      new THREE.Color(0xe63956), // Carmesí romántico
      new THREE.Color(0xff758f), // Rosa claro
      new THREE.Color(0xf5d77f), // Destello dorado
      new THREE.Color(0xffffff)  // Blanco diamante
    ];

    for (let i = 0; i < count; i++) {
      // 1. Posiciones de origen: Dispersas en el cosmos
      const r = 80 + Math.random() * 250;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      this.originPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      this.originPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      this.originPositions[i * 3 + 2] = r * Math.cos(phi);

      this.currentPositions[i * 3] = this.originPositions[i * 3];
      this.currentPositions[i * 3 + 1] = this.originPositions[i * 3 + 1];
      this.currentPositions[i * 3 + 2] = this.originPositions[i * 3 + 2];

      // 2. Posiciones objetivo: Ecuación Paramétrica del Corazón 3D
      // Formula de corazón: x = 16 sin^3(t), y = 13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t)
      const t = Math.random() * Math.PI * 2;
      const scaleFactor = 1.1 + (Math.random() - 0.5) * 0.2; // Variación de volumen

      // Distribución interior y corteza
      const innerSpread = Math.pow(Math.random(), 0.6);
      const hx = 16 * Math.pow(Math.sin(t), 3) * scaleFactor * innerSpread;
      const hy = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scaleFactor * innerSpread;
      
      // Grosor volumétrico en Z
      const maxZ = Math.max(0.5, 10 * (1.0 - Math.abs(hy) / 22));
      const hz = (Math.random() - 0.5) * maxZ * innerSpread;

      this.targetPositions[i * 3] = hx;
      this.targetPositions[i * 3 + 1] = hy;
      this.targetPositions[i * 3 + 2] = hz;

      // Colores
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = 2.0 + Math.random() * 3.5;
      phases[i] = Math.random() * Math.PI * 2;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.currentPositions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uMorph: { value: 0.0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        uniform float uMorph;
        attribute float size;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          float twinkle = sin(uTime * 3.0 + position.x) * 0.3 + 0.7;
          gl_PointSize = size * uPixelRatio * (280.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
          
          vAlpha = 0.4 + uMorph * 0.6;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = pow(1.0 - (dist * 2.0), 2.0);
          gl_FragColor = vec4(vColor, vAlpha * intensity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.heartGroup.add(this.points);
    this.heartGroup.position.set(0, 0, 0);
  }

  initConfettiStardust() {
    const cCount = this.quality === 'low' ? 60 : 150;
    this.confettiData = [];
    const cGeo = new THREE.BufferGeometry();
    const cPos = new Float32Array(cCount * 3);
    const cColors = new Float32Array(cCount * 3);

    const confPalette = [
      new THREE.Color(0xf5d77f),
      new THREE.Color(0xe63956),
      new THREE.Color(0xffffff),
      new THREE.Color(0x70d6ff)
    ];

    for (let i = 0; i < cCount; i++) {
      cPos[i * 3] = (Math.random() - 0.5) * 80;
      cPos[i * 3 + 1] = -40 + Math.random() * 80;
      cPos[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const col = confPalette[Math.floor(Math.random() * confPalette.length)];
      cColors[i * 3] = col.r;
      cColors[i * 3 + 1] = col.g;
      cColors[i * 3 + 2] = col.b;

      this.confettiData.push({
        speedY: 4 + Math.random() * 8,
        swaySpeed: 1 + Math.random() * 2,
        swayOffset: Math.random() * Math.PI * 2
      });
    }

    cGeo.setAttribute('position', new THREE.BufferAttribute(cPos, 3));
    cGeo.setAttribute('color', new THREE.BufferAttribute(cColors, 3));

    const cMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    this.confettiPoints = new THREE.Points(cGeo, cMat);
    this.heartGroup.add(this.confettiPoints);
  }

  morphToHeart(duration = 3.5, onComplete = null) {
    this.isActive = true;

    gsap.to(this.morphProgress, {
      value: 1.0,
      duration: duration,
      ease: 'power3.inOut',
      onUpdate: () => {
        const p = this.morphProgress.value;
        this.material.uniforms.uMorph.value = p;

        const posAttr = this.geometry.attributes.position.array;
        for (let i = 0; i < this.count * 3; i++) {
          posAttr[i] = this.originPositions[i] + (this.targetPositions[i] - this.originPositions[i]) * p;
        }
        this.geometry.attributes.position.needsUpdate = true;
      },
      onComplete: () => {
        if (this.confettiPoints) {
          gsap.to(this.confettiPoints.material, { opacity: 0.85, duration: 1.5 });
        }
        if (onComplete) onComplete();
      }
    });
  }

  resetToCosmos() {
    this.isActive = false;
    this.morphProgress.value = 0;
    this.material.uniforms.uMorph.value = 0;
    if (this.confettiPoints) {
      this.confettiPoints.material.opacity = 0;
    }

    const posAttr = this.geometry.attributes.position.array;
    for (let i = 0; i < this.count * 3; i++) {
      posAttr[i] = this.originPositions[i];
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.heartGroup.scale.set(1, 1, 1);
  }

  update(delta, elapsed) {
    if (this.material) {
      this.material.uniforms.uTime.value = elapsed;
    }

    if (this.isActive && this.morphProgress.value > 0.8) {
      // Latido de corazón real y auténtico (Ritmo Lub-Dub)
      // t * 3.5 aprox 70 bpm
      const t = elapsed * 3.5;
      const beat1 = Math.pow(Math.max(0, Math.sin(t)), 6) * 0.14;
      const beat2 = Math.pow(Math.max(0, Math.sin(t + 0.5)), 6) * 0.08;
      const scale = 1.0 + beat1 + beat2;

      this.heartGroup.scale.set(scale, scale, scale);

      // Rotación suave del corazón
      this.heartGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.15;

      // Animación de confeti cósmico cayendo
      if (this.confettiPoints && this.confettiPoints.material.opacity > 0) {
        const cPos = this.confettiPoints.geometry.attributes.position.array;
        for (let i = 0; i < this.confettiData.length; i++) {
          const d = this.confettiData[i];
          cPos[i * 3 + 1] -= d.speedY * delta;
          cPos[i * 3] += Math.sin(elapsed * d.swaySpeed + d.swayOffset) * 0.15;

          if (cPos[i * 3 + 1] < -35) {
            cPos[i * 3 + 1] = 40;
            cPos[i * 3] = (Math.random() - 0.5) * 80;
          }
        }
        this.confettiPoints.geometry.attributes.position.needsUpdate = true;
      }
    }
  }
}
