# 🌌 Un Pequeño Universo Para Ti ❤️ — Experiencia 3D de Cumpleaños

Una experiencia web 3D interactiva, cinematográfica, romántica y emocional creada especialmente como regalo de cumpleaños. Construida con **HTML5, CSS3, JavaScript moderno, Three.js y GSAP**.

---

## ✨ Características Principales

1. **🌌 Escena 1: Intro — "Para ti"**:
   - Fondo cósmico oscuro y elegante con nebulosas y estrellas titilantes.
   - Frases románticas con animación suave.
   - Botón *"Comenzar el viaje"* con resplandor (*glow*) que inicia el viaje de la cámara por el universo.

2. **🪐 Escena 2 & 3: Cosmos y Planetas de Recuerdos**:
   - 4 orbes/planetas en 3D con atmósferas, anillos y satélites orbitales.
   - Efectos *hover* en los planetas con etiquetas interactivas 3D.
   - Al hacer click: la cámara viaja suavemente hacia el planeta y se abre una tarjeta modal de cristal (*glassmorphism*) con fotografía, fecha e historia romántica.
   - Parallax suave con el movimiento del mouse/touch.

3. **💌 Escena 4: Carta Emocional**:
   - Plataforma de cristal flotante en el cosmos con un sobre 3D sellado con cera en forma de corazón.
   - Animación de apertura y efecto *typewriter* (máquina de escribir) progresivo que revela la carta línea por línea.

4. **💖 Escena 5 & 6: Gran Final del Cumpleaños**:
   - Transición cinemática con títulos estelares.
   - **Corazón 3D Paramétrico**: Miles de partículas del cosmos se unen y se transforman matemáticamente en una escultura 3D que late con un ritmo cardíaco auténtico (*Lub-Dub*).
   - Lluvia de confeti cósmico y destellos en 3D.
   - Botón interactivo *"Pedir un deseo al universo"* con explosión de estrellas.

5. **🎵 Soporte de Música Romántica**:
   - Botón de audio con ecualizador animado en la barra superior.
   - Soporte para tu propio archivo de audio en `public/assets/music.mp3`.
   - **Sintetizador celestial Web Audio de respaldo integrado**: Si no colocas ningún archivo MP3, la experiencia genera en tiempo real suaves acordes y campanas etéreas para que nunca quede en silencio.

6. **✨ Easter Eggs y Secretos**:
   - **Estrella Secreta**: Botón o estrella dorada en el cielo que revela un deseo especial.
   - **Luna Cósmica**: Al hacer click en la luna flotante se muestra un mensaje secreto.
   - **Tecla 'L'**: Lluvia de corazones con frases de amor aleatorias.
   - **Tecla 'C'**: Revela la constelación oculta en forma de corazón.

7. **⚡ Rendimiento y Adaptabilidad**:
   - Selector de calidad gráfico: **Alta / Media / Baja**.
   - Detección automática para dispositivos móviles.
   - 100% responsivo para móviles, tablets y computadoras.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

### 1. Requisitos
- Tener instalado **Node.js** (versión 18 o superior).

### 2. Pasos de inicio rápido
Abre una terminal en la carpeta del proyecto:

```bash
cd cumpleanos-universo
npm install
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

---

## 🛠️ Cómo Personalizar Todo (En 1 Solo Archivo)

Toda la experiencia está centralizada en:
👉 **`src/config.js`**

Allí puedes modificar de forma muy sencilla:
* **Nombre de la persona**: `recipientName`
* **Tu firma**: `senderName`
* **Textos de la Intro**: Frases y dedicatoria inicial.
* **Recuerdos (Fotos y Textos)**: Título, subtítulo, fecha, descripción y foto de cada capítulo.
* **Carta completa**: Párrafos del mensaje personal.
* **Mensajes del Cumpleaños y Final**: Títulos, frases y deseos.
* **Easter Eggs**: Deseos de la estrella, mensaje de la luna y frases aleatorias.

---

## 📸 Dónde Colocar tus Fotografías y Música

La carpeta **`public/assets/`** ya está preparada:

* **Fotos**:
  - `public/assets/foto1.jpg` — Recuerdo 1
  - `public/assets/foto2.jpg` — Recuerdo 2
  - `public/assets/foto3.jpg` — Recuerdo 3
  - `public/assets/foto4.jpg` — Recuerdo 4
* **Música**:
  - `public/assets/music.mp3` — Tu canción favorita.

> *Nota: Se incluyen gráficos de muestra (placeholders) de alta calidad para que funcione inmediatamente antes de colocar tus fotos.*

---

## 🌐 Cómo Desplegar en Internet (Gratis)

### Opción A: Vercel / Netlify
1. Sube la carpeta a un repositorio en **GitHub**.
2. Conecta el repositorio en [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
3. Detectará Vite automáticamente y se desplegará en 30 segundos.

### Opción B: Generar carpeta estática
Ejecuta:
```bash
npm run build
```
La carpeta generada **`dist/`** contiene todo el código listo para subir a cualquier servidor web o **GitHub Pages**.

---

Hecho con ❤️ para crear un momento inolvidable.
# feliz-cum
