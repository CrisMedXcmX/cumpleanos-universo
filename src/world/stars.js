import * as THREE from 'three';

export class Starfield {
  constructor(scene, quality = 'high') {
    this.scene = scene;
    this.quality = quality;
    this.shootingStars = [];
    this.goldenStar = null;

    this.createStarLayers();
    this.createGoldenEasterEggStar();
  }

  createStarLayers() {
    let count = 4000;
    if (this.quality === 'medium') count = 2200;
    if (this.quality === 'low') count = 1000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    // Paleta de estrellas cósmicas
    const palette = [
      new THREE.Color(0xffffff), // Blanco puro
      new THREE.Color(0xf5d77f), // Oro cálido
      new THREE.Color(0xf3a6b2), // Rosa suave
      new THREE.Color(0x70d6ff), // Azul celestial
      new THREE.Color(0xffcbf2)  // Violeta rosado
    ];

    for (let i = 0; i < count; i++) {
      // Distribución esférica amplia
      const radius = 250 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3.5 + 1.2;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));

    // Custom Shader para un parpadeo estelar suave y de alta fidelidad
    this.starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        attribute float phase;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          // Efecto de parpadeo (twinkle) suave
          float twinkle = sin(uTime * 1.8 + phase) * 0.4 + 0.6;
          vAlpha = twinkle;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Crear un punto circular suave con caída radial
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float intensity = pow(1.0 - (dist * 2.0), 1.5);
          gl_FragColor = vec4(vColor, vAlpha * intensity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    this.starPoints = new THREE.Points(geometry, this.starMaterial);
    this.scene.add(this.starPoints);
  }

  createGoldenEasterEggStar() {
    // Estrella secreta especial dorada que brilla de forma singular
    const geo = new THREE.SphereGeometry(1.5, 16, 16);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffe066,
      wireframe: false
    });
    this.goldenStar = new THREE.Mesh(geo, mat);
    this.goldenStar.position.set(45, 35, -40);
    this.goldenStar.userData = { isEasterEggStar: true };

    // Halo brillante
    const glowGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const halo = new THREE.Mesh(glowGeo, glowMat);
    this.goldenStar.add(halo);
    this.scene.add(this.goldenStar);
  }

  spawnShootingStar() {
    if (this.shootingStars.length >= 3) return;

    // Crear una estrella fugaz
    const startX = (Math.random() - 0.5) * 300;
    const startY = 80 + Math.random() * 80;
    const startZ = -50 - Math.random() * 150;

    const length = 40 + Math.random() * 30;
    const dir = new THREE.Vector3(-1.2, -0.6, 0.4).normalize();

    const points = [
      new THREE.Vector3(0, 0, 0),
      dir.clone().multiplyScalar(-length)
    ];

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: 0xffecc4,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });

    const line = new THREE.Line(geo, mat);
    line.position.set(startX, startY, startZ);

    const starObj = {
      mesh: line,
      dir: dir,
      speed: 180 + Math.random() * 100,
      life: 0,
      maxLife: 1.4
    };

    this.shootingStars.push(starObj);
    this.scene.add(line);
  }

  update(delta, elapsed) {
    if (this.starMaterial) {
      this.starMaterial.uniforms.uTime.value = elapsed;
    }

    if (this.starPoints) {
      this.starPoints.rotation.y = elapsed * 0.008;
      this.starPoints.rotation.x = elapsed * 0.003;
    }

    if (this.goldenStar) {
      const s = 1 + Math.sin(elapsed * 4) * 0.25;
      this.goldenStar.scale.set(s, s, s);
    }

    // Gestionar estrellas fugaces aleatorias
    if (Math.random() < 0.015) {
      this.spawnShootingStar();
    }

    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const star = this.shootingStars[i];
      star.life += delta;

      star.mesh.position.addScaledVector(star.dir, star.speed * delta);
      const alpha = 1.0 - (star.life / star.maxLife);
      star.mesh.material.opacity = Math.max(0, alpha);

      if (star.life >= star.maxLife) {
        this.scene.remove(star.mesh);
        star.mesh.geometry.dispose();
        star.mesh.material.dispose();
        this.shootingStars.splice(i, 1);
      }
    }
  }
}
