import * as THREE from 'three';
import gsap from 'gsap';

export class Letter3D {
  constructor(scene, soundManager) {
    this.scene = scene;
    this.sound = soundManager;

    this.group = new THREE.Group();
    this.group.position.set(0, 12, 0);
    this.group.visible = false;
    this.group.scale.set(0.001, 0.001, 0.001);
    this.scene.add(this.group);

    this.hitCount = 0;
    this.maxHits = 3;
    this.isOpen = false;
    this.isOpening = false;
    this.isHovered = false;

    this.initMaterials();
    this.initEnvelopeModel();
    this.initStardustAura();
  }

  initMaterials() {
    // Terciopelo Carmesí Cósmico del Sobre
    this.envelopeMat = new THREE.MeshStandardMaterial({
      color: 0x220c24,
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x3b0e2b,
      emissiveIntensity: 0.5
    });

    // Borde Dorado Elegante
    this.goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xf5d77f,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x735c18,
      emissiveIntensity: 0.35
    });

    // Sello de Cera Carmesí / Rubí
    this.waxMat = new THREE.MeshStandardMaterial({
      color: 0xc41e3a,
      roughness: 0.25,
      metalness: 0.3,
      emissive: 0x6e0018,
      emissiveIntensity: 0.7
    });

    // Corazón Dorado en el Sello
    this.sealHeartMat = new THREE.MeshStandardMaterial({
      color: 0xffe680,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xffd166,
      emissiveIntensity: 0.9
    });

    // Hoja 3D de Pergamino que emerge del sobre
    const sheetCanvas = document.createElement('canvas');
    sheetCanvas.width = 512;
    sheetCanvas.height = 720;
    const sCtx = sheetCanvas.getContext('2d');
    const bg = sCtx.createRadialGradient(256, 360, 40, 256, 360, 400);
    bg.addColorStop(0, '#fffefb');
    bg.addColorStop(0.7, '#faf1dd');
    bg.addColorStop(1, '#ebd8b2');
    sCtx.fillStyle = bg;
    sCtx.fillRect(0, 0, 512, 720);

    sCtx.strokeStyle = 'rgba(212, 175, 55, 0.85)';
    sCtx.lineWidth = 6;
    sCtx.strokeRect(16, 16, 480, 688);

    sCtx.fillStyle = '#b8860b';
    sCtx.font = 'bold 22px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.fillText('✦  ✦  ✦', 256, 65);

    sCtx.fillStyle = '#1c0512';
    sCtx.font = 'bold 28px sans-serif';
    sCtx.fillText('Una carta para ti', 256, 115);

    this.parchmentSheetTex = new THREE.CanvasTexture(sheetCanvas);

    this.sheetMat = new THREE.MeshStandardMaterial({
      map: this.parchmentSheetTex,
      roughness: 0.35,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveMap: this.parchmentSheetTex,
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide
    });
  }

  initEnvelopeModel() {
    this.envelopeMeshGroup = new THREE.Group();
    this.group.add(this.envelopeMeshGroup);

    // 1. Cuerpo del sobre 3D sólido y elegante
    const backGeo = new THREE.BoxGeometry(15, 10.5, 0.3);
    this.backMesh = new THREE.Mesh(backGeo, this.envelopeMat);
    this.backMesh.position.z = -0.2;
    this.envelopeMeshGroup.add(this.backMesh);

    // Frontal del bolsillo que cubre totalmente el interior
    const frontGeo = new THREE.BoxGeometry(15, 8.0, 0.3);
    this.frontMesh = new THREE.Mesh(frontGeo, this.envelopeMat);
    this.frontMesh.position.set(0, -1.25, 0.2);
    this.envelopeMeshGroup.add(this.frontMesh);

    // Biseles dorados del sobre
    const trimGeo = new THREE.BoxGeometry(15.2, 10.7, 0.15);
    const trimMesh = new THREE.Mesh(trimGeo, this.goldTrimMat);
    trimMesh.position.z = -0.3;
    this.envelopeMeshGroup.add(trimMesh);

    // 2. Hoja de Pergamino 3D (OCULTA al inicio, solo se revela al abrir el sobre)
    const sheetGeo = new THREE.PlaneGeometry(13.6, 19.2);
    this.sheetMesh = new THREE.Mesh(sheetGeo, this.sheetMat);
    this.sheetMesh.position.set(0, -3.5, 0);
    this.sheetMesh.scale.set(0.72, 0.45, 1);
    this.sheetMesh.visible = false; // Totalmente oculta mientras el sobre está cerrado
    this.envelopeMeshGroup.add(this.sheetMesh);

    // 3. Solapa Triangular Superior Abatible (Pivote en Y=5.25)
    this.flapPivot = new THREE.Group();
    this.flapPivot.position.set(0, 5.25, 0.22);
    this.envelopeMeshGroup.add(this.flapPivot);

    const flapShape = new THREE.Shape();
    flapShape.moveTo(-7.5, 0);
    flapShape.lineTo(7.5, 0);
    flapShape.lineTo(0, -5.5);
    flapShape.closePath();

    const flapGeo = new THREE.ShapeGeometry(flapShape);
    this.flapMesh = new THREE.Mesh(flapGeo, this.envelopeMat);
    this.flapMesh.userData = { type: 'letter3D', isLetter: true };
    this.flapPivot.add(this.flapMesh);

    const flapTrim = new THREE.Mesh(flapGeo, this.goldTrimMat);
    flapTrim.position.z = -0.04;
    flapTrim.scale.set(1.015, 1.015, 1);
    this.flapPivot.add(flapTrim);

    // 4. Sello de Cera 3D con Corazón Dorado
    this.sealGroup = new THREE.Group();
    this.sealGroup.position.set(0, -5.3, 0.18);
    this.flapPivot.add(this.sealGroup);

    const sealBaseGeo = new THREE.CylinderGeometry(1.3, 1.35, 0.25, 24);
    sealBaseGeo.rotateX(Math.PI / 2);
    this.sealBase = new THREE.Mesh(sealBaseGeo, this.waxMat);
    this.sealBase.userData = { type: 'letter3D', isLetter: true };
    this.sealGroup.add(this.sealBase);

    const sealRimGeo = new THREE.TorusGeometry(1.25, 0.18, 12, 24);
    const sealRim = new THREE.Mesh(sealRimGeo, this.waxMat);
    this.sealGroup.add(sealRim);

    // Corazón dorado 3D
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, -0.4);
    heartShape.bezierCurveTo(-0.4, -0.1, -0.65, 0.3, -0.65, 0.55);
    heartShape.bezierCurveTo(-0.65, 0.85, -0.35, 1.05, 0, 0.75);
    heartShape.bezierCurveTo(0.35, 1.05, 0.65, 0.85, 0.65, 0.55);
    heartShape.bezierCurveTo(0.65, 0.3, 0.4, -0.1, 0, -0.4);

    const heartExtrude = { depth: 0.14, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 };
    const sealHeartGeo = new THREE.ExtrudeGeometry(heartShape, heartExtrude);
    sealHeartGeo.scale(0.85, 0.85, 0.85);
    sealHeartGeo.center();
    this.sealHeartMesh = new THREE.Mesh(sealHeartGeo, this.sealHeartMat);
    this.sealHeartMesh.position.z = 0.15;
    this.sealHeartMesh.userData = { type: 'letter3D', isLetter: true };
    this.sealGroup.add(this.sealHeartMesh);

    this.sealLight = new THREE.PointLight(0xffd166, 2.2, 32);
    this.sealLight.position.set(0, 0, 1.4);
    this.sealGroup.add(this.sealLight);
  }

  initStardustAura() {
    const pCount = 65;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    this.pOrbit = [];

    for (let i = 0; i < pCount; i++) {
      const radius = 9 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 12;
      const speed = 0.35 + Math.random() * 0.7;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      this.pOrbit.push({ radius, angle, y, speed });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.auraMat = new THREE.PointsMaterial({
      color: 0xffd166,
      size: 1.4,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.auraParticles = new THREE.Points(geo, this.auraMat);
    this.group.add(this.auraParticles);
  }

  spawnLetter() {
    this.group.visible = true;
    this.hitCount = 0;
    this.isOpen = false;
    this.isOpening = false;

    // Resetear transformaciones
    this.flapPivot.rotation.x = 0;
    this.sheetMesh.visible = false;
    this.sheetMesh.position.set(0, -3.5, 0);
    this.sheetMesh.scale.set(0.72, 0.45, 1);
    this.envelopeMeshGroup.position.set(0, 0, 0);
    this.envelopeMeshGroup.scale.set(1, 1, 1);
    this.sealGroup.scale.set(1, 1, 1);
    this.waxMat.emissiveIntensity = 0.7;
    this.waxMat.emissive.setHex(0x6e0018);

    gsap.fromTo(
      this.group.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      { x: 1.0, y: 1.0, z: 1.0, duration: 1.8, ease: 'back.out(1.5)' }
    );
  }

  shake(intensity = 1.0, duration = 0.32) {
    if (this.shakeTween) this.shakeTween.kill();
    const shakeObj = { intensity: intensity };

    this.shakeTween = gsap.to(shakeObj, {
      intensity: 0,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const cur = shakeObj.intensity;
        if (cur > 0.01) {
          this.envelopeMeshGroup.position.x = (Math.random() - 0.5) * cur * 1.8;
          this.envelopeMeshGroup.position.y = (Math.random() - 0.5) * cur * 1.8;
          this.envelopeMeshGroup.position.z = (Math.random() - 0.5) * cur * 1.2;
        } else {
          this.envelopeMeshGroup.position.set(0, 0, 0);
        }
      },
      onComplete: () => {
        this.envelopeMeshGroup.position.set(0, 0, 0);
        this.shakeTween = null;
      }
    });
  }

  registerHit(onOpenCallback = null) {
    if (this.isOpening || this.isOpen || !this.group.visible) return null;
    this.hitCount++;

    if (this.hitCount === 1) {
      if (this.sound) this.sound.playSolarHitSound(1);
      this.shake(1.2, 0.28);

      gsap.to(this.envelopeMeshGroup.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      this.waxMat.emissiveIntensity = 2.2;
      this.sealHeartMat.emissiveIntensity = 3.0;
      this.sealLight.intensity = 4.0;
      gsap.to(this.waxMat, { emissiveIntensity: 0.7, duration: 0.8 });
      gsap.to(this.sealHeartMat, { emissiveIntensity: 0.9, duration: 0.8 });
      gsap.to(this.sealLight, { intensity: 2.2, duration: 0.8 });

      return {
        hit: 1,
        maxHits: 3,
        message: '💌 ⚡ Sello Cósmico: 1/3 (¡Toca 2 veces más para abrir la carta!)'
      };
    } else if (this.hitCount === 2) {
      if (this.sound) this.sound.playSolarHitSound(2);
      this.shake(2.4, 0.38);

      gsap.to(this.envelopeMeshGroup.scale, {
        x: 1.35,
        y: 1.35,
        z: 1.35,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      this.waxMat.emissiveIntensity = 5.0;
      this.waxMat.emissive.setHex(0xff3366);
      this.sealHeartMat.emissiveIntensity = 6.0;
      this.sealLight.intensity = 8.0;

      gsap.to(this.waxMat, {
        emissiveIntensity: 1.2,
        duration: 0.8,
        onComplete: () => this.waxMat.emissive.setHex(0x6e0018)
      });
      gsap.to(this.sealHeartMat, { emissiveIntensity: 1.2, duration: 0.8 });
      gsap.to(this.sealLight, { intensity: 2.2, duration: 0.8 });

      return {
        hit: 2,
        maxHits: 3,
        message: '💌 🔥 ¡Sello a punto de romperse: 2/3! (¡Un toque final!)'
      };
    } else {
      // Impacto 3 / 3: Apertura 3D del sobre, extracción del pergamino 3D y despliegue del modal
      this.openEnvelopeAnimation(onOpenCallback);
      return {
        hit: 3,
        maxHits: 3,
        message: '💌 ✨ ¡CARTA ABIERTA! ✨'
      };
    }
  }

  openEnvelopeAnimation(onOpenCallback = null) {
    if (this.isOpening || this.isOpen) return;
    this.isOpening = true;

    if (this.sound) {
      this.sound.playStardustChime();
      this.sound.playSolarHitSound(2);
    }

    this.shake(3.2, 0.45);

    const tl = gsap.timeline();

    // 1. Destello y desvanecimiento del sello
    tl.to(this.sealGroup.scale, {
      x: 1.8,
      y: 1.8,
      z: 1.8,
      duration: 0.35,
      ease: 'power2.out'
    })
    .to(this.sealGroup.scale, {
      x: 0.001,
      y: 0.001,
      z: 0.001,
      duration: 0.3,
      ease: 'power2.in'
    })

    // 2. Solapa superior rota hacia atrás 180 grados abriéndose en 3D
    .to(this.flapPivot.rotation, {
      x: -Math.PI * 0.96,
      duration: 1.0,
      ease: 'power2.inOut',
      onStart: () => {
        // La hoja de pergamino se vuelve visible en el momento en que la solapa se abre
        this.sheetMesh.visible = true;
      }
    }, '-=0.2')

    // 3. La hoja de pergamino 3D sale del sobre y se despliega hacia el frente
    .to(this.sheetMesh.position, {
      y: 7.5,
      z: 3.5,
      duration: 1.4,
      ease: 'power2.out'
    }, '-=0.4')
    .to(this.sheetMesh.scale, {
      x: 1.0,
      y: 1.0,
      duration: 1.4,
      ease: 'power2.out'
    }, '-=1.4')

    // 4. El modelo 3D se disuelve suavemente para dar paso al modal centrado
    .to(this.group.scale, {
      x: 0.001,
      y: 0.001,
      z: 0.001,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => {
        this.isOpen = true;
        this.isOpening = false;
        this.group.visible = false;
        if (onOpenCallback) onOpenCallback();
      }
    }, '-=0.2');
  }

  hideLetter() {
    gsap.to(this.group.scale, {
      x: 0.001,
      y: 0.001,
      z: 0.001,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => {
        this.group.visible = false;
        this.isOpen = false;
        this.isOpening = false;
      }
    });
  }

  getIntersectedObject(raycaster) {
    if (!this.group.visible || this.isOpening || this.isOpen) return null;
    const intersects = raycaster.intersectObjects([this.backMesh, this.frontMesh, this.flapMesh, this.sealBase, this.sealHeartMesh], true);
    return intersects.length > 0 ? this : null;
  }

  update(delta, elapsed) {
    if (this.group.visible && !this.isOpen) {
      // Flotación cósmica suave del sobre 3D
      this.group.position.y = 12 + Math.sin(elapsed * 2.0) * 0.7;
      this.group.rotation.y = Math.sin(elapsed * 1.2) * 0.1;

      // Movimiento orbital del aura de polvo estelar
      if (this.auraParticles) {
        const posAttr = this.auraParticles.geometry.attributes.position;
        const pArr = posAttr.array;

        for (let i = 0; i < this.pOrbit.length; i++) {
          const p = this.pOrbit[i];
          p.angle += delta * p.speed;
          pArr[i * 3] = Math.cos(p.angle) * p.radius;
          pArr[i * 3 + 1] = p.y + Math.sin(elapsed * 2 + i) * 0.5;
          pArr[i * 3 + 2] = Math.sin(p.angle) * p.radius;
        }
        posAttr.needsUpdate = true;
      }
    }
  }
}
