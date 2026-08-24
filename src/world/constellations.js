import * as THREE from 'three';
import gsap from 'gsap';
import { birthdayConfig } from '../config.js';

export class ConstellationsSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.isVisible = false;
    this.createHeartConstellation();
  }

  createHeartConstellation() {
    // Puntos de constelación en forma de corazón celeste en el fondo
    const points = [
      new THREE.Vector3(0, 15, -120),
      new THREE.Vector3(8, 22, -120),
      new THREE.Vector3(18, 22, -120),
      new THREE.Vector3(22, 14, -120),
      new THREE.Vector3(18, 4, -120),
      new THREE.Vector3(0, -12, -120),
      new THREE.Vector3(-18, 4, -120),
      new THREE.Vector3(-22, 14, -120),
      new THREE.Vector3(-18, 22, -120),
      new THREE.Vector3(-8, 22, -120),
      new THREE.Vector3(0, 15, -120)
    ];

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    this.lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf5d77f,
      transparent: true,
      opacity: 0.0,
      linewidth: 1.5,
      blending: THREE.AdditiveBlending
    });

    this.line = new THREE.Line(geo, this.lineMaterial);
    this.group.add(this.line);

    // Estrellas en cada vértice
    const starGeo = new THREE.SphereGeometry(0.7, 8, 8);
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xfff6db,
      transparent: true,
      opacity: 0.0
    });
    this.starMeshes = [];

    points.forEach(pt => {
      const mesh = new THREE.Mesh(starGeo, starMat);
      mesh.position.copy(pt);
      this.group.add(mesh);
      this.starMeshes.push(mesh);
    });
  }

  toggleConstellation() {
    this.isVisible = !this.isVisible;
    const targetOpacity = this.isVisible ? 0.75 : 0.0;

    gsap.to(this.lineMaterial, { opacity: targetOpacity, duration: 1.2 });
    this.starMeshes.forEach(mesh => {
      gsap.to(mesh.material, { opacity: targetOpacity > 0 ? 1 : 0, duration: 1.2 });
    });

    return this.isVisible;
  }

  update(delta, elapsed) {
    if (this.isVisible) {
      const pulse = 0.5 + Math.sin(elapsed * 2) * 0.25;
      this.lineMaterial.opacity = pulse;
    }
  }
}
