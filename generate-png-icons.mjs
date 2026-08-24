// Node script to generate crisp, transparent PNG icons for all buttons
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsDir = path.join(__dirname, 'public', 'assets', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Simple pure-node 32-bit RGBA PNG encoder
function createPNG(width, height, drawFn) {
  const buffer = Buffer.alloc(width * height * 4); // RGBA
  
  const setPixel = (x, y, r, g, b, a) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * 4;
    buffer[idx] = r;
    buffer[idx + 1] = g;
    buffer[idx + 2] = b;
    buffer[idx + 3] = a;
  };

  const getPixel = (x, y) => {
    const idx = (y * width + x) * 4;
    return [buffer[idx], buffer[idx + 1], buffer[idx + 2], buffer[idx + 3]];
  };

  drawFn(width, height, setPixel, getPixel);

  // Convert raw RGBA buffer into standard uncompressed/deflated PNG
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth 8
  ihdr.writeUInt8(6, 9); // color type 6: RGBA
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // IDAT chunk: scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (width * 4 + 1));
  for (let y = 0; y < height; y++) {
    scanlines[y * (width * 4 + 1)] = 0; // Filter None
    buffer.copy(scanlines, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressedData = zlib.deflateSync(scanlines);
  const idatChunk = createChunk('IDAT', compressedData);

  // IEND chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

// CRC32 implementation
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// -------------------------------------------------------------
// Generar iconos transparentes de 64x64
// -------------------------------------------------------------

// 1. Corazón Romántico (heart.png)
const heartPNG = createPNG(64, 64, (w, h, setPixel) => {
  const cx = 32, cy = 34;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = (x - cx) / 16;
      const ny = -(y - cy) / 16;
      // Heart formula: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
      const a = nx * nx + ny * ny - 0.9;
      const val = a * a * a - nx * nx * ny * ny * ny;
      if (val <= 0.05) {
        // Gradient color from crimson to bright rose with glow
        const t = Math.max(0, Math.min(1, (ny + 1) / 2));
        const r = Math.round(230 + t * 25);
        const g = Math.round(40 + t * 60);
        const b = Math.round(80 + t * 80);
        const alpha = val <= 0 ? 255 : Math.round((0.05 - val) / 0.05 * 255);
        setPixel(x, y, r, g, b, alpha);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'heart.png'), heartPNG);

// 2. Estrella Dorada Celestial (star.png)
const starPNG = createPNG(64, 64, (w, h, setPixel) => {
  const cx = 32, cy = 32;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = Math.abs(x - cx);
      const dy = Math.abs(y - cy);
      // 4-point star astroid curve
      const dist = Math.sqrt(dx * dy);
      const radius = Math.sqrt(dx * dx + dy * dy);
      
      if ((dx <= 2 && dy < 24) || (dy <= 2 && dx < 24) || dist < 6 || radius < 7) {
        const falloff = Math.max(0, 1 - (dx + dy) / 26);
        const r = 245;
        const g = Math.round(215 + falloff * 35);
        const b = Math.round(127 + falloff * 100);
        const a = Math.round(Math.min(255, falloff * 320));
        if (a > 0) setPixel(x, y, r, g, b, a);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'star.png'), starPNG);

// 3. Calidad Gráfica / Rayo Estelar (quality.png)
const qualityPNG = createPNG(64, 64, (w, h, setPixel) => {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Lightning bolt shape
      const inBolt = (x >= 28 && x <= 40 && y >= 10 && y <= 30 && x - 28 >= (y - 10) * 0.4) ||
                     (x >= 20 && x <= 46 && y >= 28 && y <= 34) ||
                     (x >= 24 && x <= 36 && y >= 32 && y <= 54 && 36 - x >= (y - 32) * 0.5);
      if (inBolt) {
        setPixel(x, y, 245, 215, 127, 255);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'quality.png'), qualityPNG);

// 4. Música / Nota Musical (music.png)
const musicPNG = createPNG(64, 64, (w, h, setPixel) => {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Double eighth note
      const inHead1 = (x - 22) * (x - 22) + (y - 44) * (y - 44) <= 36;
      const inHead2 = (x - 42) * (x - 42) + (y - 38) * (y - 38) <= 36;
      const inStem1 = x >= 25 && x <= 28 && y >= 16 && y <= 44;
      const inStem2 = x >= 45 && x <= 48 && y >= 12 && y <= 38;
      const inBeam = x >= 25 && x <= 48 && y >= 12 + (x - 25) * -0.2 && y <= 18 + (x - 25) * -0.2;
      
      if (inHead1 || inHead2 || inStem1 || inStem2 || inBeam) {
        setPixel(x, y, 245, 215, 127, 255);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'music.png'), musicPNG);

// 5. Pantalla Completa (fullscreen.png)
const fsPNG = createPNG(64, 64, (w, h, setPixel) => {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const topL = (x >= 14 && x <= 26 && y >= 14 && y <= 17) || (x >= 14 && x <= 17 && y >= 14 && y <= 26);
      const topR = (x >= 38 && x <= 50 && y >= 14 && y <= 17) || (x >= 47 && x <= 50 && y >= 14 && y <= 26);
      const botL = (x >= 14 && x <= 26 && y >= 47 && y <= 50) || (x >= 14 && x <= 17 && y >= 38 && y <= 50);
      const botR = (x >= 38 && x <= 50 && y >= 47 && y <= 50) || (x >= 47 && x <= 50 && y >= 38 && y <= 50);
      
      if (topL || topR || botL || botR) {
        setPixel(x, y, 255, 255, 255, 240);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'fullscreen.png'), fsPNG);

// 6. Planeta Cósmico (planet.png)
const planetPNG = createPNG(64, 64, (w, h, setPixel) => {
  const cx = 32, cy = 32;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const sphereDist = Math.sqrt(dx * dx + dy * dy);
      
      // Anillo elíptico inclinado
      const rx = dx * 0.9 + dy * 0.4;
      const ry = -dx * 0.4 + dy * 0.9;
      const ringDist = Math.sqrt(rx * rx / 4 + ry * ry);
      const inRing = ringDist >= 8 && ringDist <= 11 && Math.abs(ry) <= 4.5;
      
      if (sphereDist <= 13) {
        setPixel(x, y, 243, 166, 178, 255);
      } else if (inRing) {
        setPixel(x, y, 245, 215, 127, 220);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'planet.png'), planetPNG);

// 7. Flecha Izquierda (arrow-left.png) y Derecha (arrow-right.png)
const arrowLeftPNG = createPNG(64, 64, (w, h, setPixel) => {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dy = Math.abs(y - 32);
      const inArrow = x >= 24 + dy && x <= 28 + dy && dy <= 16;
      if (inArrow) {
        setPixel(x, y, 255, 255, 255, 245);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'arrow-left.png'), arrowLeftPNG);

const arrowRightPNG = createPNG(64, 64, (w, h, setPixel) => {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dy = Math.abs(y - 32);
      const inArrow = x <= 40 - dy && x >= 36 - dy && dy <= 16;
      if (inArrow) {
        setPixel(x, y, 255, 255, 255, 245);
      }
    }
  }
});
fs.writeFileSync(path.join(iconsDir, 'arrow-right.png'), arrowRightPNG);

console.log('Todos los iconos PNG transparentes se generaron exitosamente!');
