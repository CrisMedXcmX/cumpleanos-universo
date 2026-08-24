import * as THREE from 'three';

export class CosmicNebula {
  constructor(scene, quality = 'high') {
    this.scene = scene;
    this.quality = quality;
    this.galaxyGroup = new THREE.Group();
    
    // Posición panorámica profunda e inclinación cinemática tipo Vía Láctea / Andrómeda
    this.galaxyGroup.position.set(25, -12, -420);
    this.galaxyGroup.rotation.x = Math.PI / 3.4;
    this.galaxyGroup.rotation.z = -Math.PI / 5.2;

    this.scene.add(this.galaxyGroup);

    this.createRealisticNebulaClouds();
    this.createRealisticGalaxyStars();
    this.createGalacticCoreGlow();
  }

  /**
   * 1. Nubes Volumétricas de Gas Interestelar (Texturas procedurales de Polvo Cósmico)
   */
  createRealisticNebulaClouds() {
    const cloudCanvas = document.createElement('canvas');
    cloudCanvas.width = 512;
    cloudCanvas.height = 512;
    const ctx = cloudCanvas.getContext('2d');

    // Gradiente radial orgánico y suave para el gas nebular
    const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 256);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.2, 'rgba(255, 230, 210, 0.85)');
    grad.addColorStop(0.45, 'rgba(180, 100, 230, 0.45)');
    grad.addColorStop(0.7, 'rgba(70, 40, 150, 0.18)');
    grad.addColorStop(0.9, 'rgba(30, 20, 80, 0.05)');
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const cloudTex = new THREE.CanvasTexture(cloudCanvas);

    // Colores de gas astronómico real (Emisión H-Alfa, Reflexión O-III, Gas molecular)
    const gasColors = [
      { color: 0xffd166, size: 220, pos: [0, 0, 0], opacity: 0.28 },       // Núcleo cálido
      { color: 0xe63956, size: 300, pos: [-40, 5, 30], opacity: 0.22 },    // Región H-Alfa
      { color: 0x9d4edd, size: 360, pos: [50, -5, -40], opacity: 0.20 },   // Velo violeta
      { color: 0x70d6ff, size: 340, pos: [-80, 8, -60], opacity: 0.18 },   // Gas ionizado azul
      { color: 0xf72585, size: 280, pos: [70, -8, 60], opacity: 0.19 },    // Filamento magenta
      { color: 0x4361ee, size: 400, pos: [0, 0, 0], opacity: 0.15 }        // Halo exterior
    ];

    gasColors.forEach(cfg => {
      const geo = new THREE.PlaneGeometry(cfg.size, cfg.size);
      const mat = new THREE.MeshBasicMaterial({
        map: cloudTex,
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...cfg.pos);
      mesh.rotation.x = (Math.random() - 0.5) * 0.15;
      mesh.rotation.y = (Math.random() - 0.5) * 0.15;
      mesh.rotation.z = Math.random() * Math.PI * 2;
      this.galaxyGroup.add(mesh);
    });
  }

  /**
   * 2. Sistema Estelar de Alta Fidelidad con 4 Brazos Espirales Logarítmicos y Cúmulos
   */
  createRealisticGalaxyStars() {
    let count = 65000;
    if (this.quality === 'medium') count = 38000;
    if (this.quality === 'low') count = 18000;

    const arms = 4;
    const maxRadius = 360;
    const coreRadius = 55;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const temperatures = new Float32Array(count);

    // Paleta espectral estelar real (Clasificación de Harvard: O, B, A, F, G, K, M)
    const colCore = new THREE.Color(0xfff3d6);    // Blanco cálido nuclear
    const colBulge = new THREE.Color(0xffcaa2);   // Gigantes rojas/amarillas del bulbo (K/M)
    const colDust = new THREE.Color(0xff8452);    // Ámbar profundo / polvo caliente
    const colHAlpha = new THREE.Color(0xff2a7a);  // Nebulosas de emisión H-II (rosa/carmesí)
    const colArmBlue = new THREE.Color(0x80d8ff); // Estrellas jóvenes calientes tipo O/B
    const colDeepBlue = new THREE.Color(0xa7c5eb);// Azul cielo estelar
    const colOuterHalo = new THREE.Color(0xb5838d);// Halo estelar exterior

    for (let i = 0; i < count; i++) {
      let r, x, y, z;
      const isCoreStar = i < count * 0.32; // 32% de estrellas concentradas en el bulbo galáctico

      if (isCoreStar) {
        // --- NÚCLEO / BULBO GALÁCTICO (Distribución elipsoidal exponencial) ---
        r = Math.pow(Math.random(), 2.2) * coreRadius;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        x = r * Math.sin(phi) * Math.cos(theta) * 1.35; // Elongación de barra nuclear
        y = r * Math.cos(phi) * 0.42;                   // Aplanamiento vertical del disco
        z = r * Math.sin(phi) * Math.sin(theta) * 0.85;

        // Color de estrellas viejas y densas del bulbo
        const normR = r / coreRadius;
        const starColor = colCore.clone().lerp(colBulge, normR);
        if (Math.random() < 0.25) starColor.lerp(colDust, Math.random() * 0.6);

        colors[i * 3] = starColor.r;
        colors[i * 3 + 1] = starColor.g;
        colors[i * 3 + 2] = starColor.b;

        sizes[i] = Math.random() * 2.8 + 1.2;
        temperatures[i] = Math.random();

      } else {
        // --- BRAZOS ESPIRALES LOGARÍTMICOS (Ecuación espiral astronómica) ---
        r = coreRadius + Math.pow(Math.random(), 1.15) * (maxRadius - coreRadius);
        const normR = (r - coreRadius) / (maxRadius - coreRadius);

        // Espiral logarítmica con curvatura natural
        const armIndex = i % arms;
        const baseAngle = (armIndex * (Math.PI * 2 / arms));
        const logSpiral = Math.log(r / coreRadius + 0.1) * 2.4;
        const spiralAngle = baseAngle + logSpiral;

        // Dispersión gaussiana volumétrica a lo largo de los brazos
        const spreadRadius = Math.pow(Math.random(), 2.5) * (18 + normR * 38);
        const spreadAngle = Math.random() * Math.PI * 2;

        x = Math.cos(spiralAngle) * r + Math.cos(spreadAngle) * spreadRadius;
        // Grosor vertical del disco galáctico (más fino en los brazos, tenue en el halo)
        y = (Math.random() - 0.5) * (12 + normR * 26) * Math.pow(1.0 - normR * 0.3, 2);
        z = Math.sin(spiralAngle) * r + Math.sin(spreadAngle) * spreadRadius;

        // Coloración según región del brazo
        let starColor;
        const isHIIKnot = Math.random() < 0.18; // Cúmulo de emisión rosa H-Alpha

        if (isHIIKnot) {
          starColor = colHAlpha.clone().lerp(colBulge, Math.random() * 0.4);
        } else if (normR < 0.4) {
          starColor = colDust.clone().lerp(colArmBlue, normR / 0.4);
        } else if (normR < 0.8) {
          starColor = colArmBlue.clone().lerp(colDeepBlue, (normR - 0.4) / 0.4);
        } else {
          starColor = colDeepBlue.clone().lerp(colOuterHalo, (normR - 0.8) / 0.2);
        }

        colors[i * 3] = starColor.r;
        colors[i * 3 + 1] = starColor.g;
        colors[i * 3 + 2] = starColor.b;

        // Estrellas supergigantes azules brillantes en los brazos
        const isGiantStar = Math.random() < 0.06;
        sizes[i] = isGiantStar ? Math.random() * 4.2 + 2.5 : Math.random() * 2.2 + 0.8;
        temperatures[i] = Math.random();
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aTemp', new THREE.BufferAttribute(temperatures, 1));

    // Shader astronómico con Airy Disk, resplandor difuso y parpadeo realista
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute float aTemp;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Parpadeo estelar suave y armónico
          float twinkle = sin(uTime * 0.65 + aTemp * 6.28318) * 0.18 + 0.82;
          
          // Escala óptica con perspectiva astronómica
          gl_PointSize = aSize * uPixelRatio * (280.0 / -mvPosition.z) * twinkle;
          gl_Position = projectionMatrix * mvPosition;
          
          vAlpha = 0.6 + aTemp * 0.4;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // 1. Núcleo estelar brillante (Airy Disk de alta energía)
          float core = 1.0 - smoothstep(0.0, 0.12, dist);
          
          // 2. Halo difuso exterior (Caída exponencial de luz estelar)
          float halo = exp(-dist * 5.2);
          
          // 3. Fusión de luz estelar de alta pureza
          float intensity = core * 1.8 + halo * 0.9;
          
          // Corona ligeramente blanca en el centro de cada estrella
          vec3 finalColor = mix(vColor, vec3(1.0), core * 0.65);
          
          gl_FragColor = vec4(finalColor, vAlpha * intensity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    this.points = new THREE.Points(geometry, this.material);
    this.galaxyGroup.add(this.points);
  }

  /**
   * 3. Núcleo Galáctico Supermasivo con Corona de Resplandor Óptico
   */
  createGalacticCoreGlow() {
    // Corona Interior Brillante
    const innerGeo = new THREE.SphereGeometry(14, 32, 32);
    innerGeo.scale(1.4, 0.55, 1.0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xfffaed,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    this.galaxyGroup.add(innerCore);

    // Corona Intermedia Cálida (Ámbar / Oro)
    const midGeo = new THREE.SphereGeometry(28, 24, 24);
    midGeo.scale(1.5, 0.5, 1.1);
    const midMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const midCore = new THREE.Mesh(midGeo, midMat);
    this.galaxyGroup.add(midCore);

    // Corona Exterior Cósmica (Magenta / Violeta profundo)
    const outerGeo = new THREE.SphereGeometry(55, 20, 20);
    outerGeo.scale(1.6, 0.45, 1.2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    this.galaxyGroup.add(outerCore);
  }

  update(delta, elapsed) {
    if (this.material) {
      this.material.uniforms.uTime.value = elapsed;
    }
    // Rotación majestuosa, suave e hipnótica del disco galáctico
    if (this.galaxyGroup) {
      this.galaxyGroup.rotation.y = elapsed * 0.0035;
    }
  }
}
