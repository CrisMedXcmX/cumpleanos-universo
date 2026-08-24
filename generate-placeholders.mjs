// Node script to generate beautiful SVG placeholders for single memories and the 6-space gallery
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, 'public', 'assets');

const placeholders = [
  {
    name: 'foto1.jpg',
    title: 'Nuestro Primer Momento',
    subtitle: 'Reemplaza con tu foto en /public/assets/foto1.jpg',
    color1: '#3a0d26',
    color2: '#0d021a',
    accent: '#f3a6b2',
    icon: '🌙'
  },
  {
    name: 'foto2.jpg',
    title: 'Ese Día Inolvidable',
    subtitle: 'Reemplaza con tu foto en /public/assets/foto2.jpg',
    color1: '#362406',
    color2: '#0b0416',
    accent: '#f5d77f',
    icon: '✨'
  },
  {
    name: 'foto3.jpg',
    title: 'Tus Sonrisas',
    subtitle: 'Reemplaza con tu foto en /public/assets/foto3.jpg',
    color1: '#3d0814',
    color2: '#0c0211',
    accent: '#e63956',
    icon: '❤️'
  },
  {
    name: 'foto4.jpg',
    title: 'Nuestro Futuro Juntos',
    subtitle: 'Reemplaza con tu foto en /public/assets/foto4.jpg',
    color1: '#072438',
    color2: '#030814',
    accent: '#70d6ff',
    icon: '🪐'
  },
  // Los 6 espacios de galería del planeta
  {
    name: 'galeria1.jpg',
    title: '1. Risas Compartidas',
    subtitle: 'Reemplaza en /public/assets/galeria1.jpg',
    color1: '#380a1c',
    color2: '#0c0210',
    accent: '#ff758f',
    icon: '🌸'
  },
  {
    name: 'galeria2.jpg',
    title: '2. Nuestra Primera Aventura',
    subtitle: 'Reemplaza en /public/assets/galeria2.jpg',
    color1: '#2e1236',
    color2: '#0a0314',
    accent: '#c77dff',
    icon: '💫'
  },
  {
    name: 'galeria3.jpg',
    title: '3. Tu Mirada',
    subtitle: 'Reemplaza en /public/assets/galeria3.jpg',
    color1: '#3d1b06',
    color2: '#100603',
    accent: '#f5d77f',
    icon: '✨'
  },
  {
    name: 'galeria4.jpg',
    title: '4. Un Día Cualquiera',
    subtitle: 'Reemplaza en /public/assets/galeria4.jpg',
    color1: '#0a2538',
    color2: '#020d17',
    accent: '#70d6ff',
    icon: '🌊'
  },
  {
    name: 'galeria5.jpg',
    title: '5. Abrazos que Salvan',
    subtitle: 'Reemplaza en /public/assets/galeria5.jpg',
    color1: '#40081a',
    color2: '#0f0207',
    accent: '#e63956',
    icon: '💖'
  },
  {
    name: 'galeria6.jpg',
    title: '6. Complicidad Pura',
    subtitle: 'Reemplaza en /public/assets/galeria6.jpg',
    color1: '#260f38',
    color2: '#070212',
    accent: '#f3a6b2',
    icon: '🕊️'
  }
];

placeholders.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="grad" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="${p.color1}" />
      <stop offset="100%" stop-color="${p.color2}" />
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  
  <!-- Estrellas de fondo -->
  <g fill="#ffffff" opacity="0.6">
    <circle cx="120" cy="80" r="1.5" />
    <circle cx="250" cy="140" r="1" />
    <circle cx="700" cy="90" r="2" />
    <circle cx="640" cy="220" r="1.2" />
    <circle cx="180" cy="450" r="1.8" />
    <circle cx="720" cy="480" r="1" />
    <circle cx="80" cy="300" r="2" />
    <circle cx="400" cy="70" r="1.5" />
    <circle cx="530" cy="520" r="1.2" />
  </g>
  
  <!-- Marco elegante -->
  <rect x="30" y="30" width="740" height="540" rx="16" fill="none" stroke="${p.accent}" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 6" />
  <rect x="45" y="45" width="710" height="510" rx="12" fill="none" stroke="${p.accent}" stroke-width="0.8" stroke-opacity="0.15" />
  
  <!-- Círculo central con brillo -->
  <circle cx="400" cy="240" r="75" fill="${p.accent}" fill-opacity="0.1" stroke="${p.accent}" stroke-width="1.5" filter="url(#glow)" />
  <text x="400" y="260" font-size="64" text-anchor="middle" dominant-baseline="middle">${p.icon}</text>
  
  <!-- Textos -->
  <text x="400" y="365" font-family="'Cinzel', 'Playfair Display', serif, sans-serif" font-size="28" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="2">${p.title}</text>
  <text x="400" y="410" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="${p.accent}" text-anchor="middle" font-weight="500" letter-spacing="1">✦ RECUERDO FOTOGRÁFICO ✦</text>
  <text x="400" y="460" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" fill="#ffffff" opacity="0.6" text-anchor="middle">${p.subtitle}</text>
</svg>`;

  fs.writeFileSync(path.join(assetsDir, p.name.replace('.jpg', '.svg')), svg);
  fs.writeFileSync(path.join(assetsDir, p.name), svg);
});

console.log('Placeholders created successfully!');
