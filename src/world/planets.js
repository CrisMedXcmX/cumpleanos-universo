import * as THREE from 'three';
import gsap from 'gsap';
import { birthdayConfig } from '../config.js';

export class MemoryPlanets {
  constructor(scene, camera, quality = 'high') {
    this.scene = scene;
    this.camera = camera;
    this.quality = quality;
    this.planets = [];
    this.hoveredPlanet = null;
    this.moon = null;

    // Raycaster para interactividad de mouse
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.initTextures();
    this.initPlanets();
    this.initRomanticMoon();
  }

  initTextures() {
    this.textures = [
      this.createQuartzEarthTexture(),
      this.createGasGiantTexture(),
      this.createCrimsonMagmaTexture(),
      this.createIceAuroraTexture()
    ];
    this.cloudsTexture = this.createCloudsTexture();
    this.saturnRingsTexture = this.createSaturnRingsTexture();
  }

  createQuartzEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Océano de cuarzo rosa y púrpura suave
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#fca3b9');
    grad.addColorStop(0.5, '#f47293');
    grad.addColorStop(1, '#8b264e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Continentes de cristal y oro rosado
    ctx.fillStyle = '#ffe3ec';
    for (let i = 0; i < 35; i++) {
      const cx = Math.random() * 512;
      const cy = 40 + Math.random() * 176;
      const r = 18 + Math.random() * 45;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Casquetes polares dorados brillantes
    ctx.fillStyle = '#fff4cc';
    ctx.fillRect(0, 0, 512, 24);
    ctx.fillRect(0, 232, 512, 24);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  createCloudsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 512, 256);

    // Remolinos de nubes etéreas
    for (let i = 0; i < 60; i++) {
      const cx = Math.random() * 512;
      const cy = Math.random() * 256;
      const rw = 25 + Math.random() * 70;
      const rh = 8 + Math.random() * 18;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rw, rh, Math.random() * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  createGasGiantTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Bandas atmosféricas de Saturno en miel, oro y ocre
    const colors = ['#f5d77f', '#d49b28', '#ffd885', '#b37714', '#ffe8a3', '#e0a936', '#f7ebc6'];
    const bandHeight = 256 / colors.length;
    colors.forEach((c, idx) => {
      ctx.fillStyle = c;
      ctx.fillRect(0, idx * bandHeight, 512, bandHeight + 2);
    });

    // Gran Tormenta Ovalada Dorada
    ctx.fillStyle = '#fff2bf';
    ctx.beginPath();
    ctx.ellipse(320, 145, 42, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  createSaturnRingsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');

    // Gradiente radial para los anillos con División de Cassini
    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.15, 'rgba(245, 215, 127, 0.3)'); // Anillo C
    grad.addColorStop(0.35, 'rgba(255, 235, 160, 0.95)'); // Anillo B brillante
    grad.addColorStop(0.65, 'rgba(255, 225, 140, 0.9)');
    grad.addColorStop(0.68, 'rgba(0,0,0,0)'); // División de Cassini
    grad.addColorStop(0.72, 'rgba(230, 185, 90, 0.8)'); // Anillo A
    grad.addColorStop(0.95, 'rgba(210, 160, 60, 0.4)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 1);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  createCrimsonMagmaTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Obsidiana volcánica oscura y terciopelo carmesí
    ctx.fillStyle = '#1c030d';
    ctx.fillRect(0, 0, 512, 256);

    // Ríos y lagos de magma carmesí incandescente
    ctx.fillStyle = '#ff2b54';
    for (let i = 0; i < 50; i++) {
      const cx = Math.random() * 512;
      const cy = Math.random() * 256;
      const r = 8 + Math.random() * 32;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Vetas de lava dorada brillante
    ctx.fillStyle = '#ffd166';
    for (let i = 0; i < 25; i++) {
      const cx = Math.random() * 512;
      const cy = Math.random() * 256;
      ctx.fillRect(cx, cy, 18 + Math.random() * 40, 3 + Math.random() * 6);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  createIceAuroraTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Océano profundo cian / azul zafiro ártico
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#0077b6');
    grad.addColorStop(0.5, '#0096c7');
    grad.addColorStop(1, '#023e8a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Vórtices y tormentas de hielo turquesa
    ctx.fillStyle = '#90e0ef';
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * 512;
      const cy = Math.random() * 256;
      const r = 12 + Math.random() * 38;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Gran Vórtice Polar Ártico
    ctx.fillStyle = '#caf0f8';
    ctx.beginPath();
    ctx.arc(160, 90, 30, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  initPlanets() {
    const memoryData = birthdayConfig.memories;
    const segs = this.quality === 'low' ? 32 : 64;

    const positions = [
      new THREE.Vector3(-95, 24, 45),   // 1: Rosa Cuarzo Terrestre (Sin anillos, con Nubes y Luna Cristal)
      new THREE.Vector3(-38, 48, -85),  // 2: Saturno Auténtico (Anillos majestuosos y bandas doradas)
      new THREE.Vector3(52, 36, -75),   // 3: Carmesí Magma (Sin anillos, con Cinturón de Asteroides 3D)
      new THREE.Vector3(108, 16, 50)    // 4: Gigante de Hielo (Anillo polar fino vertical y Auroras)
    ];

    memoryData.forEach((data, index) => {
      const group = new THREE.Group();
      const pos = positions[index] || new THREE.Vector3((index - 1.5) * 55, 20, -20);
      group.position.copy(pos);

      const radius = 5.4;

      // 1. Esfera del Planeta con su textura procedural única
      const geo = new THREE.SphereGeometry(radius, segs, segs);
      const mat = new THREE.MeshStandardMaterial({
        map: this.textures[index] || null,
        color: data.color || 0xffffff,
        emissive: data.emissive || 0x220511,
        emissiveIntensity: 0.85,
        roughness: index === 1 ? 0.45 : (index === 2 ? 0.3 : 0.2),
        metalness: index === 0 ? 0.15 : 0.1
      });

      const sphereMesh = new THREE.Mesh(geo, mat);
      sphereMesh.userData = {
        type: 'memoryPlanet',
        index: index,
        memoryId: data.id,
        title: data.title,
        data: data
      };
      group.add(sphereMesh);

      // 2. Atmósfera exterior de halo (Fresnel Glow)
      const haloGeo = new THREE.SphereGeometry(radius * 1.18, 32, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      group.add(halo);

      let cloudsMesh = null;
      let asteroidGroup = null;
      let crystalMoon = null;
      let saturnRing = null;
      let polarRing = null;
      let aurorasGroup = null;

      // =======================================================================
      // ELEMENTOS ÚNICOS SEGÚN CADA PLANETA (NO TODOS SATURNO)
      // =======================================================================

      if (index === 0) {
        // --- PLANETA 1: TIERRA DE CUARZO (Capa de Nubes + Luna de Cristal) ---
        const cloudGeo = new THREE.SphereGeometry(radius * 1.03, 32, 32);
        const cloudMat = new THREE.MeshStandardMaterial({
          map: this.cloudsTexture,
          transparent: true,
          opacity: 0.5,
          blending: THREE.AdditiveBlending
        });
        cloudsMesh = new THREE.Mesh(cloudGeo, cloudMat);
        group.add(cloudsMesh);

        // Satélite / Luna de Cristal propia
        const moonGeo = new THREE.SphereGeometry(1.1, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xfca3b9,
          emissiveIntensity: 0.9,
          roughness: 0.2
        });
        crystalMoon = new THREE.Mesh(moonGeo, moonMat);
        crystalMoon.position.set(11, 2, 0);
        group.add(crystalMoon);
      } 
      else if (index === 1) {
        // --- PLANETA 2: EL AUTÉNTICO SATURNO (Anillos de Oro con División de Cassini) ---
        const ringGeo = new THREE.RingGeometry(radius * 1.45, radius * 2.6, 64);
        // Mapear coordenadas UV cilíndricas para que la textura radial se aplique como bandas
        const posAttr = ringGeo.attributes.position;
        const uvs = ringGeo.attributes.uv;
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);
          const dist = Math.sqrt(x * x + y * y);
          const normDist = (dist - radius * 1.45) / (radius * 2.6 - radius * 1.45);
          uvs.setXY(i, normDist, 0.5);
        }

        const ringMat = new THREE.MeshBasicMaterial({
          map: this.saturnRingsTexture,
          color: 0xfff4cc,
          transparent: true,
          opacity: 0.88,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending
        });
        saturnRing = new THREE.Mesh(ringGeo, ringMat);
        saturnRing.rotation.x = Math.PI / 2.35; // Inclinación axial realista
        group.add(saturnRing);
      }
      else if (index === 2) {
        // --- PLANETA 3: MAGMA Y OBSIDIANA (Cinturón de 28 Asteroides Rocosos 3D) ---
        asteroidGroup = new THREE.Group();
        const astGeo = new THREE.DodecahedronGeometry(0.32, 0);
        const astMat = new THREE.MeshStandardMaterial({
          color: 0x4a1220,
          emissive: 0xff3355,
          emissiveIntensity: 0.5,
          roughness: 0.8
        });

        for (let a = 0; a < 28; a++) {
          const ast = new THREE.Mesh(astGeo, astMat);
          const angle = (a / 28) * Math.PI * 2;
          const r = radius * (1.6 + Math.random() * 0.7);
          ast.position.set(
            Math.cos(angle) * r,
            (Math.random() - 0.5) * 2.2,
            Math.sin(angle) * r
          );
          ast.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
          asteroidGroup.add(ast);
        }
        group.add(asteroidGroup);
      }
      else if (index === 3) {
        // --- PLANETA 4: GIGANTE DE HIELO (Anillo Polar Vertical Fino + Auroras Boreales) ---
        const polarRingGeo = new THREE.RingGeometry(radius * 1.35, radius * 1.5, 48);
        const polarRingMat = new THREE.MeshBasicMaterial({
          color: 0x90e0ef,
          transparent: true,
          opacity: 0.45,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending
        });
        polarRing = new THREE.Mesh(polarRingGeo, polarRingMat);
        polarRing.rotation.y = Math.PI / 2; // Vertical como Urano
        group.add(polarRing);

        // Auroras en los polos
        aurorasGroup = new THREE.Group();
        const auroraGeo = new THREE.RingGeometry(0.5, radius * 0.6, 24);
        const auroraMat = new THREE.MeshBasicMaterial({
          color: 0x70d6ff,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide
        });
        const auroraNorth = new THREE.Mesh(auroraGeo, auroraMat);
        auroraNorth.position.y = radius * 0.98;
        auroraNorth.rotation.x = Math.PI / 2;

        const auroraSouth = auroraNorth.clone();
        auroraSouth.position.y = -radius * 0.98;
        aurorasGroup.add(auroraNorth);
        aurorasGroup.add(auroraSouth);
        group.add(aurorasGroup);
      }

      // Satélites de polvo estelar brillante
      const particleCount = this.quality === 'low' ? 14 : 28;
      const partGeo = new THREE.BufferGeometry();
      const partPos = new Float32Array(particleCount * 3);
      for (let p = 0; p < particleCount; p++) {
        const angle = (p / particleCount) * Math.PI * 2;
        const dist = radius * (1.7 + Math.random() * 0.8);
        partPos[p * 3] = Math.cos(angle) * dist;
        partPos[p * 3 + 1] = (Math.random() - 0.5) * 2.0;
        partPos[p * 3 + 2] = Math.sin(angle) * dist;
      }
      partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
      const partMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.0,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      const orbitalPoints = new THREE.Points(partGeo, partMat);
      group.add(orbitalPoints);

      this.scene.add(group);

      this.planets.push({
        group: group,
        mesh: sphereMesh,
        halo: halo,
        orbitalPoints: orbitalPoints,
        cloudsMesh: cloudsMesh,
        crystalMoon: crystalMoon,
        saturnRing: saturnRing,
        asteroidGroup: asteroidGroup,
        polarRing: polarRing,
        aurorasGroup: aurorasGroup,
        basePos: pos.clone(),
        data: data,
        index: index,
        hoverScale: 1.0,
        floatOffset: Math.random() * Math.PI * 2
      });
    });
  }

  initRomanticMoon() {
    // Luna brillante flotando en el cosmos
    const moonGroup = new THREE.Group();
    moonGroup.position.set(0, 75, -135);

    const geo = new THREE.SphereGeometry(6.2, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xfffaed,
      emissive: 0x8a7035,
      emissiveIntensity: 0.9,
      roughness: 0.55
    });
    const moonMesh = new THREE.Mesh(geo, mat);
    moonMesh.userData = { type: 'moon', isMoon: true };
    moonGroup.add(moonMesh);

    // Cráteres decorativos lunares
    const craterMat = new THREE.MeshStandardMaterial({
      color: 0xe8dcbd,
      emissive: 0x4a3a18,
      emissiveIntensity: 0.5,
      roughness: 0.8
    });
    [
      { r: 1.1, pos: [2.8, 1.2, 4.8] },
      { r: 0.8, pos: [-3.2, 2.5, 4.2] },
      { r: 1.4, pos: [-1.5, -3.8, 4.4] },
      { r: 0.9, pos: [3.5, -2.4, 4.1] },
      { r: 0.6, pos: [0.5, 3.4, 4.9] }
    ].forEach(c => {
      const cGeo = new THREE.CylinderGeometry(c.r, c.r * 1.15, 0.35, 16);
      const cMesh = new THREE.Mesh(cGeo, craterMat);
      const p = new THREE.Vector3(...c.pos).normalize().multiplyScalar(6.15);
      cMesh.position.copy(p);
      cMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p.clone().normalize());
      moonGroup.add(cMesh);
    });

    // Halo lunar
    const haloGeo = new THREE.SphereGeometry(6.6, 24, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    const moonHalo = new THREE.Mesh(haloGeo, haloMat);
    moonGroup.add(moonHalo);

    // =======================================================================
    // 3D SNOOPY EN LA LUNA SALUDANDO CON EL BRAZO
    // =======================================================================
    const snoopyOnMoon = new THREE.Group();
    snoopyOnMoon.position.set(0, 6.1, 0.4);
    snoopyOnMoon.scale.set(1.4, 1.4, 1.4);
    moonGroup.add(snoopyOnMoon);

    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.05
    });

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.35
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0xd90429,
      roughness: 0.4,
      emissive: 0x6e0018,
      emissiveIntensity: 0.4
    });

    // 1. Cuerpo de Snoopy
    const bodyGeo = new THREE.SphereGeometry(0.85, 16, 16);
    bodyGeo.scale(0.85, 1.15, 0.85);
    const bodyMesh = new THREE.Mesh(bodyGeo, whiteMat);
    bodyMesh.position.set(0, 0.9, 0);
    snoopyOnMoon.add(bodyMesh);

    // Mancha negra en la espalda
    const spotGeo = new THREE.SphereGeometry(0.42, 12, 12);
    spotGeo.scale(0.9, 0.7, 0.4);
    const spotMesh = new THREE.Mesh(spotGeo, blackMat);
    spotMesh.position.set(0, 1.0, -0.72);
    snoopyOnMoon.add(spotMesh);

    // Collar rojo
    const collarGeo = new THREE.TorusGeometry(0.52, 0.09, 8, 20);
    collarGeo.rotateX(Math.PI / 2);
    const collarMesh = new THREE.Mesh(collarGeo, collarMat);
    collarMesh.position.set(0, 1.85, 0);
    snoopyOnMoon.add(collarMesh);

    // 2. Cabeza alargada icónica de Snoopy
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 2.3, 0.1);
    snoopyOnMoon.add(headGroup);

    const craniumGeo = new THREE.SphereGeometry(0.78, 16, 16);
    const craniumMesh = new THREE.Mesh(craniumGeo, whiteMat);
    craniumMesh.position.set(0, 0.2, -0.15);
    headGroup.add(craniumMesh);

    const snoutGeo = new THREE.CylinderGeometry(0.48, 0.65, 1.15, 16);
    snoutGeo.rotateX(Math.PI / 2);
    const snoutMesh = new THREE.Mesh(snoutGeo, whiteMat);
    snoutMesh.position.set(0, 0, 0.55);
    headGroup.add(snoutMesh);

    // Nariz negra redonda brillante
    const noseGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const noseMesh = new THREE.Mesh(noseGeo, blackMat);
    noseMesh.position.set(0, 0.15, 1.18);
    headGroup.add(noseMesh);

    // Ojos negros ovalados icónicos de Snoopy con destello
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.1,
      metalness: 0.2
    });
    const sparkleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Ojo Izquierdo
    const eyeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    eyeGeo.scale(0.75, 1.25, 0.45);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(0.36, 0.38, 0.52);
    eyeL.rotation.y = 0.32;
    eyeL.rotation.z = -0.12;

    const sparkleL = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), sparkleMat);
    sparkleL.position.set(0.04, 0.08, 0.08);
    eyeL.add(sparkleL);
    headGroup.add(eyeL);

    // Ojo Derecho
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(-0.36, 0.38, 0.52);
    eyeR.rotation.y = -0.32;
    eyeR.rotation.z = 0.12;

    const sparkleR = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), sparkleMat);
    sparkleR.position.set(-0.04, 0.08, 0.08);
    eyeR.add(sparkleR);
    headGroup.add(eyeR);

    // Cejas / Marcas de expresión sonrientes
    const browGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.28, 8);
    browGeo.rotateZ(Math.PI / 3);
    const browL = new THREE.Mesh(browGeo, blackMat);
    browL.position.set(0.38, 0.65, 0.45);
    browL.rotation.y = 0.25;
    const browR = new THREE.Mesh(browGeo, blackMat);
    browR.position.set(-0.38, 0.65, 0.45);
    browR.rotation.y = -0.25;
    browR.rotation.z = -Math.PI / 3;
    headGroup.add(browL);
    headGroup.add(browR);

    // Orejas negras caídas
    const earGeo = new THREE.SphereGeometry(0.32, 12, 12);
    earGeo.scale(0.45, 1.5, 0.8);
    const earL = new THREE.Mesh(earGeo, blackMat);
    earL.position.set(0.75, 0.1, -0.2);
    earL.rotation.z = -0.35;
    const earR = new THREE.Mesh(earGeo, blackMat);
    earR.position.set(-0.75, 0.1, -0.2);
    earR.rotation.z = 0.35;
    headGroup.add(earL);
    headGroup.add(earR);

    // 3. Patas de Snoopy de pie en la Luna
    const footGeo = new THREE.SphereGeometry(0.32, 12, 12);
    footGeo.scale(0.85, 0.6, 1.35);
    const footL = new THREE.Mesh(footGeo, whiteMat);
    footL.position.set(0.38, 0.15, 0.2);
    const footR = new THREE.Mesh(footGeo, whiteMat);
    footR.position.set(-0.38, 0.15, 0.2);
    snoopyOnMoon.add(footL);
    snoopyOnMoon.add(footR);

    // Cola pequeña con punta negra
    const tailGeo = new THREE.CylinderGeometry(0.08, 0.14, 0.6, 8);
    tailGeo.rotateX(-Math.PI / 3);
    const tailMesh = new THREE.Mesh(tailGeo, whiteMat);
    tailMesh.position.set(0, 0.6, -0.85);
    snoopyOnMoon.add(tailMesh);

    // 4. Brazo Izquierdo (Relajado al costado)
    const armLGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.75, 10);
    armLGeo.rotateZ(0.25);
    const armL = new THREE.Mesh(armLGeo, whiteMat);
    armL.position.set(-0.75, 1.0, 0);
    snoopyOnMoon.add(armL);

    // 5. BRAZO DERECHO ARTICULADO (SALUDANDO CON EL BRAZO)
    const wavingArmPivot = new THREE.Group();
    wavingArmPivot.position.set(0.68, 1.45, 0);
    snoopyOnMoon.add(wavingArmPivot);

    const armRGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.95, 10);
    armRGeo.translate(0, 0.45, 0);
    const armRMesh = new THREE.Mesh(armRGeo, whiteMat);
    armRMesh.position.set(0, 0, 0);
    wavingArmPivot.add(armRMesh);

    // Patita / Mano de Snoopy que saluda
    const pawGeo = new THREE.SphereGeometry(0.22, 10, 10);
    pawGeo.scale(1.1, 1.1, 0.75);
    const pawMesh = new THREE.Mesh(pawGeo, whiteMat);
    pawMesh.position.set(0, 0.95, 0);
    wavingArmPivot.add(pawMesh);

    // Inclinación inicial hacia arriba para saludar
    wavingArmPivot.rotation.z = -1.4;

    // 6. Pequeño Corazón Flotante Luminoso sobre Snoopy
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, -0.2);
    heartShape.bezierCurveTo(-0.2, -0.05, -0.35, 0.15, -0.35, 0.3);
    heartShape.bezierCurveTo(-0.35, 0.45, -0.2, 0.55, 0, 0.4);
    heartShape.bezierCurveTo(0.2, 0.55, 0.35, 0.45, 0.35, 0.3);
    heartShape.bezierCurveTo(0.35, 0.15, 0.2, -0.05, 0, -0.2);
    const heartGeo = new THREE.ExtrudeGeometry(heartShape, { depth: 0.1, bevelEnabled: true, bevelSize: 0.02 });
    heartGeo.scale(0.8, 0.8, 0.8);
    heartGeo.center();
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0xff3366,
      emissive: 0xff3366,
      emissiveIntensity: 0.9,
      roughness: 0.2
    });
    const floatingHeart = new THREE.Mesh(heartGeo, heartMat);
    floatingHeart.position.set(0, 3.8, 0.2);
    snoopyOnMoon.add(floatingHeart);

    this.scene.add(moonGroup);
    this.moon = {
      group: moonGroup,
      mesh: moonMesh,
      snoopy: snoopyOnMoon,
      wavingArm: wavingArmPivot,
      floatingHeart: floatingHeart,
      isWavingFast: false
    };
  }

  triggerMoonSnoopyWave() {
    this.triggerMoonSnoopyClick();
  }

  triggerMoonSnoopyClick() {
    if (!this.moon) return;

    this.moon.isWavingFast = true;

    if (this.moon.snoopy) {
      // Salto feliz con giro elástico
      gsap.killTweensOf(this.moon.snoopy.position);
      gsap.killTweensOf(this.moon.snoopy.rotation);
      gsap.killTweensOf(this.moon.snoopy.scale);

      // Salto hacia arriba en la luna
      gsap.to(this.moon.snoopy.position, {
        y: 7.6,
        duration: 0.28,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      // Giro 360 alegre
      gsap.to(this.moon.snoopy.rotation, {
        y: this.moon.snoopy.rotation.y + Math.PI * 2,
        duration: 0.65,
        ease: 'back.out(1.8)'
      });

      // Escala elástica
      gsap.to(this.moon.snoopy.scale, {
        x: 1.8,
        y: 1.8,
        z: 1.8,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'back.out(2)'
      });
    }

    // Efecto de pulso en el corazón
    if (this.moon.floatingHeart) {
      gsap.to(this.moon.floatingHeart.scale, {
        x: 1.6,
        y: 1.6,
        z: 1.6,
        duration: 0.22,
        yoyo: true,
        repeat: 3,
        ease: 'power1.inOut'
      });
    }

    setTimeout(() => {
      if (this.moon) this.moon.isWavingFast = false;
    }, 4500);
  }

  getIntersectedObject(normalizedMouse, camera) {
    this.raycaster.setFromCamera(normalizedMouse, camera);
    const objects = this.planets.map(p => p.mesh);

    if (this.moon) {
      if (this.moon.mesh) objects.push(this.moon.mesh);
      if (this.moon.snoopy) {
        this.moon.snoopy.traverse(child => {
          if (child.isMesh) {
            child.userData = { type: 'moon', isMoon: true, isMoonSnoopy: true };
            objects.push(child);
          }
        });
      }
    }

    const intersects = this.raycaster.intersectObjects(objects, true);
    if (intersects.length > 0) {
      return intersects[0].object;
    }
    return null;
  }

  setHoveredPlanet(planetMesh) {
    this.planets.forEach(p => {
      p.isHovered = planetMesh && p.mesh === planetMesh;
    });
  }

  getScreenPositions(width, height) {
    return this.planets.map(p => {
      const worldPos = new THREE.Vector3();
      p.mesh.getWorldPosition(worldPos);

      const screenPos = worldPos.clone().project(this.camera);
      const x = (screenPos.x * 0.5 + 0.5) * width;
      const y = (-(screenPos.y * 0.5) + 0.5) * height;
      const isVisible = screenPos.z < 1.0;

      return {
        index: p.index,
        data: p.data,
        x: x,
        y: y,
        visible: isVisible
      };
    });
  }

  update(delta, elapsed) {
    this.planets.forEach((p, idx) => {
      // Rotación propia del planeta
      p.mesh.rotation.y += delta * 0.35;

      // Rotación de nubes del Planeta 1
      if (p.cloudsMesh) {
        p.cloudsMesh.rotation.y += delta * 0.48;
      }

      // Órbita de la Luna de Cristal del Planeta 1
      if (p.crystalMoon) {
        const mAngle = elapsed * 0.9;
        p.crystalMoon.position.x = Math.cos(mAngle) * 11;
        p.crystalMoon.position.z = Math.sin(mAngle) * 11;
      }

      // Rotación del Cinturón de Asteroides del Planeta 3
      if (p.asteroidGroup) {
        p.asteroidGroup.rotation.y += delta * 0.4;
      }

      // Rotación de polvo estelar orbital
      if (p.orbitalPoints) {
        p.orbitalPoints.rotation.y += delta * 0.28;
      }

      // Flotación cósmica suave
      const bob = Math.sin(elapsed * 1.2 + p.floatOffset) * 0.7;
      p.group.position.y = p.basePos.y + bob;

      // Animación de hover suave
      const targetScale = p.isHovered ? 1.18 : 1.0;
      p.hoverScale += (targetScale - p.hoverScale) * 0.12;
      p.mesh.scale.set(p.hoverScale, p.hoverScale, p.hoverScale);

      if (p.isHovered) {
        p.mesh.material.emissiveIntensity = 1.6;
      } else {
        p.mesh.material.emissiveIntensity = 0.85;
      }
    });

    if (this.moon) {
      this.moon.mesh.rotation.y += delta * 0.15;
      this.moon.group.position.y = 75 + Math.sin(elapsed * 0.8) * 0.9;

      // Animación de saludo del brazo de Snoopy en la Luna
      if (this.moon.wavingArm) {
        const waveSpeed = this.moon.isWavingFast ? 10 : 5.5;
        const waveAngle = Math.sin(elapsed * waveSpeed) * 0.42;
        this.moon.wavingArm.rotation.z = -1.45 + waveAngle;
        this.moon.wavingArm.rotation.x = Math.cos(elapsed * waveSpeed * 0.5) * 0.2;
      }

      // Palpitar del corazoncito flotante
      if (this.moon.floatingHeart) {
        this.moon.floatingHeart.position.y = 3.8 + Math.sin(elapsed * 3) * 0.15;
        this.moon.floatingHeart.rotation.y = elapsed * 1.5;
      }
    }
  }

  setPlanetsDimmed(dimmed, duration = 1.2) {
    this.planets.forEach(p => {
      gsap.to(p.group.scale, {
        x: dimmed ? 0.001 : 1.0,
        y: dimmed ? 0.001 : 1.0,
        z: dimmed ? 0.001 : 1.0,
        duration: duration,
        ease: 'power2.inOut'
      });
    });

    if (this.moon && this.moon.group) {
      gsap.to(this.moon.group.scale, {
        x: dimmed ? 0.001 : 1.0,
        y: dimmed ? 0.001 : 1.0,
        z: dimmed ? 0.001 : 1.0,
        duration: duration,
        ease: 'power2.inOut'
      });
    }
  }

  expandPlanetsSupernova(duration = 3.8) {
    this.disintegratePlanetsSupernova(duration);
  }

  disintegratePlanetsSupernova(duration = 3.8) {
    this.planets.forEach(p => {
      const dir = p.basePos.clone().normalize();
      const targetPos = p.basePos.clone().add(dir.multiplyScalar(75));
      
      // Expansión a cámara lenta empujada por la onda expansiva
      gsap.to(p.group.position, {
        x: targetPos.x,
        y: targetPos.y + 12,
        z: targetPos.z,
        duration: duration,
        ease: 'power2.out'
      });

      // Desvanecimiento suave y disolución en la luz cósmica
      gsap.to(p.group.scale, {
        x: 0.0001,
        y: 0.0001,
        z: 0.0001,
        duration: duration * 0.9,
        ease: 'power2.inOut',
        onComplete: () => {
          p.group.visible = false;
        }
      });
    });

    if (this.moon && this.moon.group) {
      gsap.to(this.moon.group.scale, {
        x: 0.0001,
        y: 0.0001,
        z: 0.0001,
        duration: duration * 0.9,
        ease: 'power2.inOut',
        onComplete: () => {
          this.moon.group.visible = false;
        }
      });
    }
  }

  restorePlanetsPosition(duration = 1.4) {
    this.planets.forEach(p => {
      p.group.visible = true;
      gsap.to(p.group.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: duration,
        ease: 'power2.out'
      });
      gsap.to(p.group.position, {
        x: p.basePos.x,
        y: p.basePos.y,
        z: p.basePos.z,
        duration: duration,
        ease: 'power2.inOut'
      });
    });

    if (this.moon && this.moon.group) {
      this.moon.group.visible = true;
      gsap.to(this.moon.group.scale, {
        x: 1.0,
        y: 1.0,
        z: 1.0,
        duration: duration,
        ease: 'power2.out'
      });
    }
  }
}
