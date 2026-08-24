import * as THREE from 'three';

export class LetterPedestal {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.position.set(0, 0, 0);
    this.scene.add(this.group);

    this.isOpen = false;
    this.isHovered = false;

    this.createOpenAltar();
    this.createEnvelope();
    
    this.group.visible = true;
  }

  createOpenAltar() {
    // Altar abierto de obsidiana y cristal estelar (Sin cilindros ni vasos que lo encierren)
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, -6.5, 0);

    // Plataforma principal octogonal / cilíndrica biselada
    const baseGeo = new THREE.CylinderGeometry(8.5, 10.5, 1.8, 8);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x140d24,
      roughness: 0.15,
      metalness: 0.85,
      emissive: 0x2e0820,
      emissiveIntensity: 0.6
    });
    this.baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseGroup.add(this.baseMesh);

    // Borde dorado en la superficie del altar
    const goldRimGeo = new THREE.RingGeometry(8.0, 8.6, 8);
    goldRimGeo.rotateX(-Math.PI / 2);
    const goldRimMat = new THREE.MeshStandardMaterial({
      color: 0xf5d77f,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x5a4510,
      emissiveIntensity: 0.5
    });
    const goldRim = new THREE.Mesh(goldRimGeo, goldRimMat);
    goldRim.position.y = 0.92;
    baseGroup.add(goldRim);

    // Cristales flotantes en las esquinas del altar
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const crystalGeo = new THREE.OctahedronGeometry(0.7, 0);
      crystalGeo.scale(0.6, 1.4, 0.6);
      const crystalMat = new THREE.MeshStandardMaterial({
        color: 0xf3a6b2,
        emissive: 0xff0054,
        emissiveIntensity: 0.8,
        roughness: 0.1
      });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.position.set(Math.cos(angle) * 7.5, 1.4, Math.sin(angle) * 7.5);
      baseGroup.add(crystal);
    }

    // Anillos de energía cósmica orbitando libremente bajo el altar
    const ringGeo1 = new THREE.TorusGeometry(11.5, 0.16, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    this.glowRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    this.glowRing1.rotation.x = Math.PI / 2;
    baseGroup.add(this.glowRing1);

    const ringGeo2 = new THREE.TorusGeometry(13.5, 0.12, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe63956,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    this.glowRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.glowRing2.rotation.x = Math.PI / 2.3;
    baseGroup.add(this.glowRing2);

    this.group.add(baseGroup);
  }

  createEnvelope() {
    this.envelopeGroup = new THREE.Group();
    this.envelopeGroup.position.set(0, 0.8, 0);

    // 1. Cuerpo del sobre (Pergamino imperial rojo oscuro y dorado)
    const bodyGeo = new THREE.BoxGeometry(6.4, 4.4, 0.45);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x240e2b,
      roughness: 0.35,
      metalness: 0.4,
      emissive: 0x5a0c25,
      emissiveIntensity: 0.8
    });
    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.userData = { isEnvelope: true };
    this.envelopeGroup.add(this.bodyMesh);

    // Marco / Borde dorado del sobre
    const borderGeo = new THREE.BoxGeometry(6.55, 4.55, 0.4);
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0xf5d77f,
      metalness: 0.8,
      roughness: 0.2
    });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.position.z = -0.05;
    this.envelopeGroup.add(borderMesh);

    // 2. Solapa superior en punta triangular
    const flapGeo = new THREE.ConeGeometry(3.4, 2.0, 4);
    const flapMat = new THREE.MeshStandardMaterial({
      color: 0x32133a,
      emissive: 0x6e0e2e,
      emissiveIntensity: 0.8,
      roughness: 0.35
    });
    this.flapMesh = new THREE.Mesh(flapGeo, flapMat);
    this.flapMesh.rotation.z = Math.PI;
    this.flapMesh.rotation.y = Math.PI / 4;
    this.flapMesh.position.set(0, 1.25, 0.25);
    this.flapMesh.scale.set(1.35, 0.22, 1.35);
    this.envelopeGroup.add(this.flapMesh);

    // 3. Sello de cera de corazón brillante
    const sealGeo = new THREE.SphereGeometry(0.85, 24, 24);
    sealGeo.scale(1.0, 0.9, 0.45);
    const sealMat = new THREE.MeshStandardMaterial({
      color: 0xff0054,
      emissive: 0xff0054,
      emissiveIntensity: 0.9,
      roughness: 0.15
    });
    this.sealMesh = new THREE.Mesh(sealGeo, sealMat);
    this.sealMesh.position.set(0, 0.25, 0.42);
    this.envelopeGroup.add(this.sealMesh);

    // Halo del sello
    const sealHaloGeo = new THREE.SphereGeometry(1.3, 16, 16);
    const sealHaloMat = new THREE.MeshBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    this.sealHalo = new THREE.Mesh(sealHaloGeo, sealHaloMat);
    this.sealHalo.position.copy(this.sealMesh.position);
    this.envelopeGroup.add(this.sealHalo);

    // 4. Micro-partículas de polvo estelar alrededor del sobre
    const pCount = 36;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = 2.8 + Math.random() * 3.8;
      pPos[i * 3] = Math.cos(ang) * r;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      pPos[i * 3 + 2] = Math.sin(ang) * r;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xf5d77f,
      size: 0.8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    this.sparkles = new THREE.Points(pGeo, pMat);
    this.envelopeGroup.add(this.sparkles);

    this.group.add(this.envelopeGroup);
  }

  setHover(hovered) {
    this.isHovered = hovered;
  }

  openEnvelope() {
    this.isOpen = true;
  }

  update(delta, elapsed) {
    if (this.glowRing1) {
      this.glowRing1.rotation.z += delta * 0.4;
    }
    if (this.glowRing2) {
      this.glowRing2.rotation.z -= delta * 0.3;
    }

    if (this.envelopeGroup) {
      // Levitación y suave balanceo en el espacio abierto
      const lev = Math.sin(elapsed * 1.8) * 0.45;
      this.envelopeGroup.position.y = 0.8 + lev;
      this.envelopeGroup.rotation.y = Math.sin(elapsed * 0.9) * 0.18;

      if (this.sparkles) {
        this.sparkles.rotation.y += delta * 0.5;
      }

      if (this.sealMesh && this.sealHalo) {
        const pulse = 1.0 + Math.sin(elapsed * 4.5) * 0.15;
        this.sealMesh.scale.set(pulse, pulse * 0.9, 0.45);
        this.sealHalo.scale.set(pulse * 1.1, pulse * 1.1, pulse * 1.1);
      }
    }
  }
}
