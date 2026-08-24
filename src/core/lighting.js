import * as THREE from 'three';

export class AppLighting {
  constructor(scene) {
    this.scene = scene;
    this.setupLights();
  }

  setupLights() {
    // Luz ambiental cósmica profunda
    this.ambientLight = new THREE.AmbientLight(0x201538, 1.2);
    this.scene.add(this.ambientLight);

    // Luz principal estelar (cálida y suave)
    this.mainLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    this.mainLight.position.set(40, 60, 50);
    this.scene.add(this.mainLight);

    // Luz de contra / Rim Light romántica (Carmesí / Rosa profundo)
    this.rimLight = new THREE.DirectionalLight(0xe63956, 2.5);
    this.rimLight.position.set(-50, -30, -40);
    this.scene.add(this.rimLight);

    // Luz secundaria Aurora (Cian / Zafiro cósmico)
    this.auroraLight = new THREE.PointLight(0x70d6ff, 2.0, 300);
    this.auroraLight.position.set(0, 50, -80);
    this.scene.add(this.auroraLight);

    // Luz dorada para el pedestal de la carta
    this.pedestalLight = new THREE.PointLight(0xf5d77f, 0, 150);
    this.pedestalLight.position.set(0, 0, 0);
    this.scene.add(this.pedestalLight);
  }

  setPedestalLightIntensity(intensity) {
    this.pedestalLight.intensity = intensity;
  }
}
