import * as THREE from 'three';
import gsap from 'gsap';

export class SnoopyPlane {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Configuración del Vuelo
    this.isFlying = true;
    this.flightSpeed = 26;
    this.flightDirection = 1; // 1 = hacia la derecha (+X), -1 = hacia la izquierda (-X)
    this.isTurning = false;
    this.minX = -260;
    this.maxX = 260;
    this.startX = -260;
    this.baseY = 22;
    this.baseZ = -35;
    this.isDoingBarrelRoll = false;

    // Estado Aerodinámico y Órbita de Planetas
    this.isOrbitingPlanet = false;
    this.orbitPlanetCenter = new THREE.Vector3();
    this.orbitRadius = 8.0;
    this.orbitAngle = 0;
    this.orbitSpeed = 0.85;

    this.currentThrottle = 1.0;

    // Partículas de estela
    this.smokePuffs = [];

    this.buildHighQuality3DSnoopyAndPlane();
    this.resetFlight();
  }

  buildHighQuality3DSnoopyAndPlane() {
    this.planeMeshGroup = new THREE.Group();

    // Paleta de Materiales PBR
    const redPaintMat = new THREE.MeshStandardMaterial({
      color: 0xd90429,
      roughness: 0.25,
      metalness: 0.35,
      emissive: 0x4a000f,
      emissiveIntensity: 0.4
    });

    const darkRedMat = new THREE.MeshStandardMaterial({
      color: 0x9d0208,
      roughness: 0.3,
      metalness: 0.2
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      metalness: 0.95,
      roughness: 0.1
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5d77f,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x4a3a10,
      emissiveIntensity: 0.3
    });

    const engineMetalMat = new THREE.MeshStandardMaterial({
      color: 0x2b2d42,
      metalness: 0.8,
      roughness: 0.3
    });

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x582f0e,
      roughness: 0.6
    });

    const blackTireMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.8
    });

    const snoopyWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.05
    });

    const snoopyBlackMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.3
    });

    const goggleGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x70d6ff,
      metalness: 0.2,
      roughness: 0.05,
      transmission: 0.6,
      thickness: 0.5,
      emissive: 0x1d4e6b,
      emissiveIntensity: 0.6
    });

    const scarfMat = new THREE.MeshStandardMaterial({
      color: 0xff0054,
      roughness: 0.4,
      emissive: 0x6e0024,
      emissiveIntensity: 0.5
    });

    // =========================================================================
    // 1. FUSELAJE AERODINÁMICO (+X ES EL FRENTE / NARIZ)
    // =========================================================================
    const fuselageGroup = new THREE.Group();

    const bodyGeo = new THREE.CylinderGeometry(1.6, 0.7, 9.5, 24);
    bodyGeo.rotateZ(Math.PI / 2);
    const fuselageMesh = new THREE.Mesh(bodyGeo, redPaintMat);
    fuselageGroup.add(fuselageMesh);

    const cowlGeo = new THREE.SphereGeometry(1.6, 24, 24);
    cowlGeo.scale(0.9, 1, 1);
    const cowlMesh = new THREE.Mesh(cowlGeo, engineMetalMat);
    cowlMesh.position.set(4.5, 0, 0);
    fuselageGroup.add(cowlMesh);

    const cockpitHoleGeo = new THREE.CylinderGeometry(1.2, 1.2, 2.2, 16);
    const cockpitHoleMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0f });
    const cockpitHole = new THREE.Mesh(cockpitHoleGeo, cockpitHoleMat);
    cockpitHole.position.set(-0.2, 0.8, 0);
    fuselageGroup.add(cockpitHole);

    const rimGeo = new THREE.TorusGeometry(1.25, 0.15, 12, 24);
    rimGeo.rotateX(Math.PI / 2);
    const rimMesh = new THREE.Mesh(rimGeo, woodMat);
    rimMesh.position.set(-0.2, 1.45, 0);
    fuselageGroup.add(rimMesh);

    const shieldGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.6, 16, 1, false, 0, Math.PI);
    shieldGeo.rotateZ(Math.PI / 2);
    const shieldMesh = new THREE.Mesh(shieldGeo, goggleGlassMat);
    shieldMesh.position.set(1.1, 1.8, 0);
    shieldMesh.rotation.y = Math.PI / 2;
    fuselageGroup.add(shieldMesh);

    const exhaustGeo = new THREE.CylinderGeometry(0.18, 0.18, 2.2, 12);
    exhaustGeo.rotateZ(Math.PI / 3);
    const exhaustL = new THREE.Mesh(exhaustGeo, engineMetalMat);
    exhaustL.position.set(2.0, -0.4, 1.6);
    const exhaustR = new THREE.Mesh(exhaustGeo, engineMetalMat);
    exhaustR.position.set(2.0, -0.4, -1.6);
    fuselageGroup.add(exhaustL);
    fuselageGroup.add(exhaustR);

    // =========================================================================
    // 2. ALAS SUPERIORES E INFERIORES (+Z / -Z SON LAS ALAS)
    // =========================================================================
    const wingsGroup = new THREE.Group();

    // Ala superior elevada sobre cabinas para no solapar la cabeza de Snoopy
    const topWingGeo = new THREE.BoxGeometry(2.8, 0.22, 15);
    const topWing = new THREE.Mesh(topWingGeo, redPaintMat);
    topWing.position.set(1.0, 3.85, 0);
    wingsGroup.add(topWing);

    const bottomWingGeo = new THREE.BoxGeometry(2.4, 0.18, 13);
    const bottomWing = new THREE.Mesh(bottomWingGeo, redPaintMat);
    bottomWing.position.set(0.8, -0.8, 0);
    wingsGroup.add(bottomWing);

    // Puntales exteriores (Interplane Struts)
    const strutPositions = [
      { x: 0.9, y: 1.525, z: 5.8 },
      { x: 0.9, y: 1.525, z: -5.8 },
      { x: 0.9, y: 1.525, z: 2.8 },
      { x: 0.9, y: 1.525, z: -2.8 }
    ];

    const strutGeo = new THREE.CylinderGeometry(0.08, 0.08, 4.65, 8);
    strutPositions.forEach(p => {
      const strut = new THREE.Mesh(strutGeo, darkRedMat);
      strut.position.set(p.x, p.y, p.z);
      wingsGroup.add(strut);
    });

    // Puntales centrales del fuselaje al ala superior (Cabane Struts)
    const cabanePositions = [
      { x: 0.3, y: 2.625, z: 1.2 },
      { x: 0.3, y: 2.625, z: -1.2 },
      { x: 1.5, y: 2.625, z: 1.2 },
      { x: 1.5, y: 2.625, z: -1.2 }
    ];
    const cabaneGeo = new THREE.CylinderGeometry(0.07, 0.07, 2.45, 8);
    cabanePositions.forEach(p => {
      const cabane = new THREE.Mesh(cabaneGeo, darkRedMat);
      cabane.position.set(p.x, p.y, p.z);
      wingsGroup.add(cabane);
    });

    // =========================================================================
    // 3. COLA Y TIMÓN (-X ES LA COLA)
    // =========================================================================
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-4.2, 0, 0);

    const finGeo = new THREE.BoxGeometry(2.4, 2.4, 0.15);
    const finMesh = new THREE.Mesh(finGeo, redPaintMat);
    finMesh.position.set(0, 1.4, 0);
    finMesh.rotation.z = -0.35;
    tailGroup.add(finMesh);

    const stabGeo = new THREE.BoxGeometry(1.6, 0.15, 5.5);
    const stabMesh = new THREE.Mesh(stabGeo, redPaintMat);
    stabMesh.position.set(0.2, 0.3, 0);
    tailGroup.add(stabMesh);

    // =========================================================================
    // 4. TREN DE ATERRIZAJE
    // =========================================================================
    const gearGroup = new THREE.Group();
    gearGroup.position.set(1.6, -1.8, 0);

    const wheelGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.35, 16);
    wheelGeo.rotateX(Math.PI / 2);
    const wheelL = new THREE.Mesh(wheelGeo, blackTireMat);
    wheelL.position.set(0, 0, 1.8);
    const wheelR = new THREE.Mesh(wheelGeo, blackTireMat);
    wheelR.position.set(0, 0, -1.8);

    const axleGeo = new THREE.CylinderGeometry(0.06, 0.06, 3.6);
    axleGeo.rotateX(Math.PI / 2);
    const axle = new THREE.Mesh(axleGeo, chromeMat);

    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8);
    const legL = new THREE.Mesh(legGeo, darkRedMat);
    legL.position.set(0, 0.6, 1.5);
    legL.rotation.z = 0.2;
    const legR = new THREE.Mesh(legGeo, darkRedMat);
    legR.position.set(0, 0.6, -1.5);
    legR.rotation.z = 0.2;

    gearGroup.add(wheelL);
    gearGroup.add(wheelR);
    gearGroup.add(axle);
    gearGroup.add(legL);
    gearGroup.add(legR);

    // =========================================================================
    // 5. HÉLICE GIRATORIA (+X)
    // =========================================================================
    this.propellerGroup = new THREE.Group();
    this.propellerGroup.position.set(5.4, 0, 0);

    const spinnerGeo = new THREE.ConeGeometry(0.7, 1.2, 16);
    spinnerGeo.rotateZ(-Math.PI / 2);
    const spinner = new THREE.Mesh(spinnerGeo, chromeMat);
    this.propellerGroup.add(spinner);

    const bladeGeo = new THREE.BoxGeometry(0.12, 4.4, 0.45);
    const blade1 = new THREE.Mesh(bladeGeo, goldMat);
    const blade2 = blade1.clone();
    blade2.rotation.x = Math.PI / 2;
    this.propellerGroup.add(blade1);
    this.propellerGroup.add(blade2);

    const blurDiscGeo = new THREE.RingGeometry(0.4, 2.3, 24);
    blurDiscGeo.rotateY(Math.PI / 2);
    const blurDiscMat = new THREE.MeshBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    this.propellerBlur = new THREE.Mesh(blurDiscGeo, blurDiscMat);
    this.propellerGroup.add(this.propellerBlur);

    // =========================================================================
    // 6. SNOOPY EN 3D (Sentado en cabina con cabeza despejada)
    // =========================================================================
    this.snoopyGroup = new THREE.Group();
    this.snoopyGroup.position.set(-0.2, 0.95, 0);

    const torsoGeo = new THREE.SphereGeometry(1.1, 16, 16);
    torsoGeo.scale(0.9, 1.2, 0.85);
    const torso = new THREE.Mesh(torsoGeo, snoopyWhiteMat);
    torso.position.set(0, 0.2, 0);
    this.snoopyGroup.add(torso);

    const headGroup = new THREE.Group();
    headGroup.position.set(0.35, 1.2, 0);

    const skullGeo = new THREE.SphereGeometry(1.1, 24, 24);
    skullGeo.scale(1.1, 1.05, 0.95);
    const skull = new THREE.Mesh(skullGeo, snoopyWhiteMat);
    headGroup.add(skull);

    const snoutGeo = new THREE.CylinderGeometry(0.75, 0.85, 1.6, 24);
    snoutGeo.rotateZ(Math.PI / 2);
    const snout = new THREE.Mesh(snoutGeo, snoopyWhiteMat);
    snout.position.set(1.0, -0.15, 0);
    headGroup.add(snout);

    const snoutTipGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const snoutTip = new THREE.Mesh(snoutTipGeo, snoopyWhiteMat);
    snoutTip.position.set(1.8, -0.15, 0);
    headGroup.add(snoutTip);

    const noseGeo = new THREE.SphereGeometry(0.3, 16, 16);
    noseGeo.scale(0.8, 1, 1);
    const nose = new THREE.Mesh(noseGeo, snoopyBlackMat);
    nose.position.set(2.45, 0.05, 0);
    headGroup.add(nose);

    const eyeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    eyeGeo.scale(0.5, 1.2, 0.5);
    const eyeL = new THREE.Mesh(eyeGeo, snoopyBlackMat);
    eyeL.position.set(0.9, 0.35, 0.72);
    eyeL.rotation.y = 0.3;
    const eyeR = new THREE.Mesh(eyeGeo, snoopyBlackMat);
    eyeR.position.set(0.9, 0.35, -0.72);
    eyeR.rotation.y = -0.3;
    headGroup.add(eyeL);
    headGroup.add(eyeR);

    this.earLGroup = new THREE.Group();
    this.earLGroup.position.set(-0.1, 0.3, 0.95);
    const earGeo = new THREE.SphereGeometry(0.55, 16, 16);
    earGeo.scale(0.45, 1.8, 0.6);
    const earL = new THREE.Mesh(earGeo, snoopyBlackMat);
    earL.position.set(0, -0.6, 0);
    earL.rotation.z = -0.2;
    this.earLGroup.add(earL);
    headGroup.add(this.earLGroup);

    this.earRGroup = new THREE.Group();
    this.earRGroup.position.set(-0.1, 0.3, -0.95);
    const earR = new THREE.Mesh(earGeo, snoopyBlackMat);
    earR.position.set(0, -0.6, 0);
    earR.rotation.z = -0.2;
    this.earRGroup.add(earR);
    headGroup.add(this.earRGroup);

    const helmetGeo = new THREE.SphereGeometry(1.15, 24, 24);
    helmetGeo.scale(1.02, 0.75, 0.98);
    const helmet = new THREE.Mesh(helmetGeo, woodMat);
    helmet.position.set(0, 0.5, 0);
    headGroup.add(helmet);

    const goggleFrameMat = new THREE.MeshStandardMaterial({ color: 0xf5d77f, metalness: 0.9, roughness: 0.1 });
    const goggleL = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.1, 12, 24), goggleFrameMat);
    goggleL.position.set(0.8, 0.75, 0.5);
    goggleL.rotation.y = Math.PI / 3.2;
    const lensL = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16), goggleGlassMat);
    lensL.position.copy(goggleL.position);
    lensL.rotation.copy(goggleL.rotation);
    lensL.rotateX(Math.PI / 2);

    const goggleR = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.1, 12, 24), goggleFrameMat);
    goggleR.position.set(0.8, 0.75, -0.5);
    goggleR.rotation.y = -Math.PI / 3.2;
    const lensR = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16), goggleGlassMat);
    lensR.position.copy(goggleR.position);
    lensR.rotation.copy(goggleR.rotation);
    lensR.rotateX(Math.PI / 2);

    headGroup.add(goggleL);
    headGroup.add(lensL);
    headGroup.add(goggleR);
    headGroup.add(lensR);

    this.snoopyGroup.add(headGroup);

    const pawGeo = new THREE.SphereGeometry(0.35, 12, 12);
    pawGeo.scale(1.2, 0.8, 0.8);
    const pawL = new THREE.Mesh(pawGeo, snoopyWhiteMat);
    pawL.position.set(1.2, 0.5, 0.7);
    const pawR = new THREE.Mesh(pawGeo, snoopyWhiteMat);
    pawR.position.set(1.2, 0.5, -0.7);
    this.snoopyGroup.add(pawL);
    this.snoopyGroup.add(pawR);

    this.scarfGroup = new THREE.Group();
    this.scarfGroup.position.set(-0.6, 0.9, 0.3);

    const scarfKnot = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), scarfMat);
    this.scarfGroup.add(scarfKnot);

    const scarfTailGeo = new THREE.BoxGeometry(2.8, 0.45, 0.12);
    this.scarfTail = new THREE.Mesh(scarfTailGeo, scarfMat);
    this.scarfTail.position.set(-1.4, 0, 0);
    this.scarfGroup.add(this.scarfTail);
    this.snoopyGroup.add(this.scarfGroup);

    // =========================================================================
    // 7. BANDERÍN CON CORAZÓN ROMÁNTICO
    // =========================================================================
    this.heartStreamerGroup = new THREE.Group();
    this.heartStreamerGroup.position.set(-8.5, 0.6, 0);

    const threadGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(4.2, 0, 0),
      new THREE.Vector3(0, 0, 0)
    ]);
    const thread = new THREE.Line(threadGeo, new THREE.LineBasicMaterial({ color: 0xf5d77f, transparent: true, opacity: 0.8 }));
    this.heartStreamerGroup.add(thread);

    const heartGeo = new THREE.SphereGeometry(1.6, 16, 16);
    heartGeo.scale(1.0, 0.9, 0.4);
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0xff0054,
      roughness: 0.2,
      emissive: 0xff0054,
      emissiveIntensity: 0.7
    });
    this.trailingHeart = new THREE.Mesh(heartGeo, heartMat);
    this.trailingHeart.position.set(-0.2, 0, 0);
    this.heartStreamerGroup.add(this.trailingHeart);

    const hHalo = new THREE.Mesh(
      new THREE.SphereGeometry(2.3, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff758f, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending })
    );
    this.heartStreamerGroup.add(hHalo);

    // Unir componentes
    this.planeMeshGroup.add(fuselageGroup);
    this.planeMeshGroup.add(wingsGroup);
    this.planeMeshGroup.add(tailGroup);
    this.planeMeshGroup.add(gearGroup);
    this.planeMeshGroup.add(this.propellerGroup);
    this.planeMeshGroup.add(this.snoopyGroup);
    this.planeMeshGroup.add(this.heartStreamerGroup);

    this.planeMeshGroup.traverse(child => {
      if (child.isMesh) {
        child.userData = { isSnoopyPlane: true };
      }
    });

    this.planeMeshGroup.scale.set(0.85, 0.85, 0.85);
    this.group.add(this.planeMeshGroup);
  }

  resetFlight() {
    this.flightDirection = 1;
    this.isTurning = false;
    this.group.position.set(this.startX, this.baseY, this.baseZ);
    this.planeMeshGroup.quaternion.identity();
    this.planeMeshGroup.scale.set(0.85, 0.85, 0.85);
    this.isFlying = true;
    this.isOrbitingPlanet = false;
    this.currentThrottle = 1.0;
  }

  turnAround() {
    if (this.isTurning || !this.isFlying || this.isOrbitingPlanet) return;
    this.isTurning = true;

    const startPos = this.group.position.clone();
    const targetDirection = -this.flightDirection;
    const turnRadius = 14.0;
    const turnDuration = 2.4;

    // Altura y profundidad ligeramente aleatorias para variar el vuelo
    const newBaseY = 20 + (Math.random() - 0.5) * 12;
    const newBaseZ = -35 + (Math.random() - 0.5) * 10;
    this.baseY = newBaseY;
    this.baseZ = newBaseZ;

    // Arco semicircular en 3D para el viraje suave (U-turn)
    const turnObj = { t: 0 };
    const initialAngle = this.flightDirection === 1 ? -Math.PI / 2 : Math.PI / 2;

    this.flightTween = gsap.to(turnObj, {
      t: 1,
      duration: turnDuration,
      ease: 'power1.inOut',
      onUpdate: () => {
        const t = turnObj.t;
        const currentAngle = initialAngle + t * Math.PI * (this.flightDirection === 1 ? 1 : -1);

        // Desplazamiento en curva circular (X y Z)
        const forwardOffset = Math.sin(t * Math.PI) * (turnRadius * 0.8) * this.flightDirection;
        const depthOffset = (1 - Math.cos(t * Math.PI)) * turnRadius * 0.5;

        this.group.position.x = startPos.x + forwardOffset;
        this.group.position.z = startPos.z + depthOffset;
        this.group.position.y = THREE.MathUtils.lerp(startPos.y, newBaseY, t);

        // Vector tangente para orientar la trompa en todo el giro
        const tangentX = Math.cos(currentAngle) * targetDirection;
        const tangentZ = Math.sin(currentAngle) * (this.flightDirection === 1 ? 1 : -1);
        const tangentY = (newBaseY - startPos.y) / turnDuration * 0.05;

        const velocityVec = new THREE.Vector3(
          this.flightDirection === 1 ? Math.cos(t * Math.PI) : -Math.cos(t * Math.PI),
          tangentY,
          Math.sin(t * Math.PI) * (this.flightDirection === 1 ? 1 : -1)
        );

        // Inclinación de alas (banking) durante el giro
        const bankAngle = Math.sin(t * Math.PI) * (this.flightDirection === 1 ? -0.55 : 0.55);
        this.orientNoseAlongVelocity(velocityVec, bankAngle);

        if (Math.random() < 0.5) {
          this.spawnSmokeParticle();
        }
      },
      onComplete: () => {
        this.flightDirection = targetDirection;
        this.isTurning = false;
      }
    });
  }

  triggerBarrelRoll() {
    if (this.isDoingBarrelRoll) return;
    this.isDoingBarrelRoll = true;

    gsap.to(this.planeMeshGroup.rotation, {
      x: Math.PI * 2,
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: () => {
        this.planeMeshGroup.rotation.x = 0;
        this.isDoingBarrelRoll = false;
      }
    });
  }

  spawnSmokeParticle() {
    if (this.smokePuffs.length > 35) return;

    const currentScale = this.planeMeshGroup.scale.x;
    const particleRadius = 0.45 * currentScale;

    const geo = new THREE.SphereGeometry(particleRadius, 8, 8);
    const mat = new THREE.MeshBasicMaterial({
      color: Math.random() > 0.4 ? 0xf5d77f : 0xf3a6b2,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const puff = new THREE.Mesh(geo, mat);

    const worldPos = new THREE.Vector3();
    this.planeMeshGroup.getWorldPosition(worldPos);
    puff.position.copy(worldPos).add(new THREE.Vector3(-4.0 * currentScale, -0.2 * currentScale, 0));

    this.scene.add(puff);
    this.smokePuffs.push({
      mesh: puff,
      life: 0,
      maxLife: 1.8,
      scale: 1
    });
  }

  /**
   * ORIENTACIÓN MATEMÁTICA EXACTA (+X apunta a la trayectoria de vuelo)
   */
  orientNoseAlongVelocity(velocityVec, rollAngle = 0) {
    const forward = velocityVec.clone().normalize();
    if (forward.lengthSq() < 0.0001) return;

    const upApprox = new THREE.Vector3(0, 1, 0);
    let right = new THREE.Vector3().crossVectors(forward, upApprox).normalize();
    if (right.lengthSq() < 0.001) {
      right = new THREE.Vector3(0, 0, 1);
    }
    const up = new THREE.Vector3().crossVectors(right, forward).normalize();

    // Matriz de base ortonormal donde local X = forward
    const basisMatrix = new THREE.Matrix4().makeBasis(forward, up, right);
    this.planeMeshGroup.quaternion.setFromRotationMatrix(basisMatrix);

    // Alabeo de alas (Roll) sobre el eje de avance
    if (Math.abs(rollAngle) > 0.0001) {
      const rollQuat = new THREE.Quaternion().setFromAxisAngle(forward, rollAngle);
      this.planeMeshGroup.quaternion.premultiply(rollQuat);
    }
  }

  /**
   * VUELO CINEMÁTICO AL PLANETA CON PUNTA ORIENTADA Y TRANSICIÓN A ÓRBITA CIRCULAR
   */
  flyToOrbitPlanet(targetPos, scale = 0.5, duration = 2.0, onArrive = null) {
    this.flyToPlanet(targetPos, duration, onArrive);
  }

  flyToPlanet(targetPos, duration = 3.2, onArrive = null) {
    this.isFlying = false;
    this.isOrbitingPlanet = false;

    if (this.flightTween) this.flightTween.kill();
    if (this.scaleTween) this.scaleTween.kill();

    const isMobile = window.innerWidth < 768;
    const targetScale = isMobile ? 0.28 : 0.35;
    this.orbitRadius = isMobile ? 12.0 : 14.2; // Radio seguro despejado de anillos y atmósfera
    this.orbitPlanetCenter.copy(targetPos);

    // 1. Punto de partida continuo
    const startPoint = this.group.position.clone();
    
    // Punto de entrada orbital seguro y elevado por encima de los anillos
    const entryAngle = Math.PI * 0.75;
    const dest = targetPos.clone().add(new THREE.Vector3(
      Math.cos(entryAngle) * this.orbitRadius,
      3.8,
      Math.sin(entryAngle) * this.orbitRadius
    ));

    // Vector de avance inercial inicial
    const startVelocity = new THREE.Vector3(14, 0, 0);
    const controlPoint1 = startPoint.clone().add(startVelocity);

    // Vector de aproximación exterior que rodea el planeta sin atravesarlo
    const controlPoint2 = new THREE.Vector3(
      dest.x - (dest.x - startPoint.x) * 0.25,
      Math.max(startPoint.y, dest.y) + 9,
      (startPoint.z + dest.z) * 0.5 + 8
    );

    const flightDuration = duration;
    const flightProgress = { t: 0 };

    this.flightTween = gsap.to(flightProgress, {
      t: 1,
      duration: flightDuration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const t = flightProgress.t;
        const u = 1 - t;

        // Ecuación Bézier Cúbica
        let nextX = u*u*u * startPoint.x + 3*u*u*t * controlPoint1.x + 3*u*t*t * controlPoint2.x + t*t*t * dest.x;
        let nextY = u*u*u * startPoint.y + 3*u*u*t * controlPoint1.y + 3*u*t*t * controlPoint2.y + t*t*t * dest.y;
        let nextZ = u*u*u * startPoint.z + 3*u*u*t * controlPoint1.z + 3*u*t*t * controlPoint2.z + t*t*t * dest.z;

        // PREVENCIÓN ESTRICTA DE COLISIÓN (Garantizar distancia mínima al centro del planeta)
        const curPoint = new THREE.Vector3(nextX, nextY, nextZ);
        const toTarget = curPoint.clone().sub(targetPos);
        const currentCenterDist = toTarget.length();
        const minSafetyRadius = this.orbitRadius * 0.92;

        if (currentCenterDist < minSafetyRadius && currentCenterDist > 0.001) {
          toTarget.normalize().multiplyScalar(minSafetyRadius);
          curPoint.copy(targetPos).add(toTarget);
          nextX = curPoint.x;
          nextY = curPoint.y;
          nextZ = curPoint.z;
        }

        // Tangente exacta de avance
        const vx = 3*u*u * (controlPoint1.x - startPoint.x) + 6*u*t * (controlPoint2.x - controlPoint1.x) + 3*t*t * (dest.x - controlPoint2.x);
        const vy = 3*u*u * (controlPoint1.y - startPoint.y) + 6*u*t * (controlPoint2.y - controlPoint1.y) + 3*t*t * (dest.y - controlPoint2.y);
        const vz = 3*u*u * (controlPoint1.z - startPoint.z) + 6*u*t * (controlPoint2.z - controlPoint1.z) + 3*t*t * (dest.z - controlPoint2.z);

        this.group.position.set(nextX, nextY, nextZ);

        // ORIENTAR LA TROMPA DEL AVIÓN EXACTAMENTE HACIA ADELANTE CON ALABEO SUAVE
        const velocityVec = new THREE.Vector3(vx, vy, vz);
        const rollAngle = Math.sin(t * Math.PI) * 0.42;
        this.orientNoseAlongVelocity(velocityVec, rollAngle);

        this.currentThrottle = 1.0 + Math.sin(t * Math.PI) * 0.6;
        if (Math.random() < 0.6) {
          this.spawnSmokeParticle();
        }
      },
      onComplete: () => {
        // ENTRAR EN MODO ÓRBITA CONTINUA ALREDEDOR DEL PLANETA
        this.isOrbitingPlanet = true;
        this.orbitAngle = entryAngle;
        this.currentThrottle = 0.75;
        if (onArrive) onArrive();
      }
    });

    // Escala continua y progresiva
    this.scaleTween = gsap.to(this.planeMeshGroup.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: flightDuration,
      ease: 'power2.inOut'
    });
  }

  resumeCosmicFlight() {
    if (!this.isOrbitingPlanet && this.isFlying) return;
    this.isOrbitingPlanet = false;

    if (this.flightTween) this.flightTween.kill();
    if (this.scaleTween) this.scaleTween.kill();

    this.currentThrottle = 1.2;

    // 1. Restaurar escala de crucero
    this.scaleTween = gsap.to(this.planeMeshGroup.scale, {
      x: 0.85,
      y: 0.85,
      z: 0.85,
      duration: 1.4,
      ease: 'power2.inOut'
    });

    // 2. Despegue acrobático
    gsap.to(this.planeMeshGroup.rotation, {
      x: Math.PI * 2,
      y: 0,
      z: 0,
      duration: 1.1,
      ease: 'power2.inOut',
      onComplete: () => {
        this.planeMeshGroup.rotation.set(0, 0, 0);
        this.isFlying = true;
        this.currentThrottle = 1.0;
      }
    });

    gsap.to(this.group.position, {
      y: this.baseY,
      z: this.baseZ,
      duration: 1.4,
      ease: 'power2.in'
    });
  }

  flyAroundHeart() {
    this.group.visible = true;
    if (this.flightTween) this.flightTween.kill();
    if (this.scaleTween) this.scaleTween.kill();

    this.isFlying = false;
    this.isOrbitingPlanet = true;
    this.orbitPlanetCenter.set(0, 3, 0);
    this.orbitRadius = 28.0;
    this.orbitSpeed = 0.55;
    this.orbitAngle = Math.PI / 4;
    this.currentThrottle = 1.0;

    gsap.to(this.planeMeshGroup.scale, {
      x: 1.05,
      y: 1.05,
      z: 1.05,
      duration: 1.5,
      ease: 'power2.out'
    });
  }

  update(delta, elapsed) {
    // 1. Girar hélice
    if (this.propellerGroup) {
      this.propellerGroup.rotation.x += delta * (42 * this.currentThrottle);
    }

    // 2. Animación de orejas y bufanda
    if (this.earLGroup && this.earRGroup) {
      const earFlap = Math.sin(elapsed * 16 * this.currentThrottle) * (0.12 * this.currentThrottle);
      this.earLGroup.rotation.z = -0.2 + earFlap;
      this.earRGroup.rotation.z = -0.2 + earFlap;
    }

    if (this.scarfTail) {
      this.scarfTail.rotation.y = Math.sin(elapsed * 18 * this.currentThrottle) * 0.45;
      this.scarfTail.rotation.z = 0.2 + Math.cos(elapsed * 15 * this.currentThrottle) * 0.2;
    }

    if (this.heartStreamerGroup) {
      this.heartStreamerGroup.position.y = 0.6 + Math.sin(elapsed * 4) * 0.4;
      const s = 1.0 + Math.sin(elapsed * 5) * 0.18;
      this.trailingHeart.scale.set(s, s, s);
    }

    // 3. ESTADO: RODEANDO / ORBITANDO CONTINUAMENTE EL PLANETA
    if (this.isOrbitingPlanet) {
      this.orbitAngle += delta * this.orbitSpeed;

      const ox = Math.cos(this.orbitAngle) * this.orbitRadius;
      const oz = Math.sin(this.orbitAngle) * this.orbitRadius;
      const oy = Math.sin(this.orbitAngle * 1.5) * 1.8 + 3.5;

      this.group.position.set(
        this.orbitPlanetCenter.x + ox,
        this.orbitPlanetCenter.y + oy,
        this.orbitPlanetCenter.z + oz
      );

      // Tangente de avance en la órbita circular
      const tangent = new THREE.Vector3(
        -Math.sin(this.orbitAngle),
        Math.cos(this.orbitAngle * 1.5) * 0.22,
        Math.cos(this.orbitAngle)
      ).normalize();

      // Orientar la nariz en la dirección de la órbita con alabeo hacia adentro (inward bank)
      this.orientNoseAlongVelocity(tangent, -0.36);

      if (Math.random() < 0.25) {
        this.spawnSmokeParticle();
      }
    }
    // 4. ESTADO: VUELO DE CRUCERO LIBRE (IDA Y VUELTA FLUIDA)
    else if (this.isFlying) {
      if (!this.isTurning) {
        this.group.position.x += this.flightSpeed * this.flightDirection * delta;

        const waveY = Math.sin(elapsed * 1.4) * 3.8;
        this.group.position.y = this.baseY + waveY;

        if (!this.isDoingBarrelRoll) {
          this.orientNoseAlongVelocity(
            new THREE.Vector3(this.flightDirection, Math.cos(elapsed * 1.4) * 0.2, 0),
            0
          );
        }

        if (Math.random() < 0.35) {
          this.spawnSmokeParticle();
        }

        // Si llega al extremo derecho o izquierdo, iniciar giro en U suavemente
        if (this.flightDirection === 1 && this.group.position.x >= this.maxX) {
          this.turnAround();
        } else if (this.flightDirection === -1 && this.group.position.x <= this.minX) {
          this.turnAround();
        }
      }
    }

    // 5. Partículas de humo
    for (let i = this.smokePuffs.length - 1; i >= 0; i--) {
      const puff = this.smokePuffs[i];
      puff.life += delta;
      puff.scale += delta * 2.0;
      puff.mesh.scale.set(puff.scale, puff.scale, puff.scale);
      puff.mesh.position.x -= delta * 5;

      const alpha = 1.0 - (puff.life / puff.maxLife);
      puff.mesh.material.opacity = Math.max(0, alpha * 0.8);

      if (puff.life >= puff.maxLife) {
        this.scene.remove(puff.mesh);
        puff.mesh.geometry.dispose();
        puff.mesh.material.dispose();
        this.smokePuffs.splice(i, 1);
      }
    }
  }
}
