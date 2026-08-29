/**
 * ============================================================================
 * CONFIGURACIÓN PRINCIPAL — UNIVERSO DE CUMPLEAÑOS
 * ============================================================================
 * Modifica fácilmente todos los textos, imágenes, cartas, recuerdos y detalles
 * románticos desde este único archivo.
 */

export const birthdayConfig = {
  // --- DATOS PRINCIPALES ---
  recipientName: "Mi Amor",
  senderName: "Siempre tuyo",
  birthdayDate: "Un día especial",

  // --- SECCIÓN 1: INTRODUCCIÓN ("Para ti") ---
  intro: {
    badge: "✦ UNA HISTORIA ESPECIAL ✦",
    quoteLine1: "Feliz Cumpleaños",
    quoteLine2: "Un viaje a través de las estrellas creado para ti",
    dedication: "Esta experiencia fue creada con todo mi cariño ❤️",
    startButton: "INICIAR VIAJE",
    hint: "Usa audífonos para una mejor experiencia"
  },

  // --- SECCIÓN 2: UNIVERSO 3D & NAVEGACIÓN ---
  universe: {
    title: "Nuestro Pequeño Universo",
    subtitle: "Un espacio en el cosmos creado para celebrar tu existencia y todo lo que significas para mí.",
    instructions: "Explora libremente el espacio. Haz click en los planetas de recuerdos o usa los controles."
  },

  // --- SECCIÓN 3: RECUERDOS (Planetas interactivos en 3D) ---
  // Puedes añadir, quitar o modificar los recuerdos.
  // Coloca tus fotos en /public/assets/foto1.jpg, foto2.jpg, etc.
  memoriesSectionTitle: "Algunos de mis momentos favoritos contigo",
  memoriesSubtitle: "Cada planeta guarda un pedacito de nuestra historia",
  memories: [
    {
      id: "memory-1",
      icon: "🌙",
      title: "Un recuerdo especial",
      subtitle: "El inicio de algo mágico",
      date: "",
      snoopyDialogue: "¡Woof! 🐾 ¡Aterrizamos en las coordenadas del Capítulo I! Desde aquel primer instante en que sus miradas se cruzaron, supe que empezaba la historia más bonita de todas...",
      description: "A pesar de las adversidades, eres una persona que ha salido de cosas muy difíciles, ha logrado avanzar en la vida sin importar nada, y quiero que logremos avanzar para crecer juntos.💕",
      image: "assets/foto1.jpeg",
      color: 0xf3a6b2, // Rosa cuarzo
      emissive: 0x6e1b34,
      tag: "Capítulo I"
    },
    {
      id: "memory-2",
      icon: "✨",
      title: "Atardecer para dedicar",
      subtitle: "Grabado en el corazón",
      date: "Un instante eterno",
      snoopyDialogue: "¡Aterrizaje perfecto, capitán! ✨ Este planeta guarda una tarde mágica e inolvidable.",
      description: "Si tuviera que buscar palabras para explicar lo linda que eres, usaría este atardecer. Tan imponente, lleno de luz y capaz de detener el tiempo de la misma manera que lo haces tú cada vez que sonríes.",
      image: "assets/foto2.jpeg",
      color: 0xf5d77f, // Oro estelar
      emissive: 0x5a4510,
      tag: "Capítulo II"
    },
    {
      id: "memory-3",
      icon: "❤️",
      title: "6 Momentos que Hacen Sonreír mi Corazón",
      subtitle: "Colección especial de fotos y memorias",
      date: "Nuestra Galería",
      snoopyDialogue: "¡Guau! 💖 ¡Detecté una colección de 6 momentos extraordinarios en este planeta! Cada foto guarda un abrazo o una sonrisa. ¡Toca cada una para verla de cerca!",
      description: "Cada una de estas 6 fotografías guarda una historia, una risa o un instante espectacular en tu vida",
      isGallery: true,
      gallery: [
        {
          id: 1,
          title: "1. MDE",
          description: "",
          image: "assets/galeria1.jpg"
        },
        {
          id: 2,
          title: "2. CLO",
          description: "",
          image: "assets/galeria2.jpg"
        },
        {
          id: 3,
          title: "3. BUN",
          description: "",
          image: "assets/galeria3.jpg"
        },
        {
          id: 4,
          title: "4. RCH",
          description: "",
          image: "assets/galeria4.jpg"
        },
        {
          id: 5,
          title: "5. PTY",
          description: "",
          image: "assets/galeria5.jpg"
        },
        {
          id: 6,
          title: "6. ?",
          description: "",
          image: "assets/galeria6.jpg"
        }
      ],
      color: 0xe63956, // Rojo carmesí profundo
      emissive: 0x4a0e19,
      tag: "Capítulo III"
    }
  ],

  // --- SECCIÓN 4: CARTA EMOCIONAL ---
  letterSection: {
    title: "Una carta para ti",
    subtitle: "Toca el sello del sobre para abrirla",
    sealText: "TOCA PARA ABRIR",
    dateStamp: "En tu cumpleaños",
    letterText: [
      "Hoy no quiero simplemente decirte feliz cumpleaños.",
      "Quiero recordarte lo extraordinariamente especial que eres para mí.",
      "Gracias por cada sonrisa compartida, cada mirada cómplice, cada conversación de madrugada y cada recuerdo inolvidable que hemos construido juntos.",
      "Aunque sé que no soy bueno para las manualidades, que sepas que esto lo hice con mis manos, y con la emoción de ver esa sonrisa cuando veas esto.",
      "Espero poder seguir creando infinitas memorias y celebrando la vida a tu lado.",
      "Feliz cumpleaños, mi amor. ❤️"
    ],
    signOff: "Con todo mi cariño y devoción,",
    signature: "Tu persona favorita"
  },

  // --- SECCIÓN 5: MOMENTO FINAL DEL CUMPLEAÑOS (Gran Final) ---
  finale: {
    preTitle1: "Y ahora...",
    preTitle2: "Es tu día. ✨",
    mainTitle: "¡Feliz Cumpleaños, Mi Amor! ❤️",
    heartMessage: "Te quiero muchísimo.",
    wishMessage: "Espero seguir celebrando muchos cumpleaños a tu lado.",
    pedirDeseo: "✨ Cierra los ojos y pide un deseo ✨",
    replayButton: "Volver a ver el recorrido",
    freeExploreButton: "Explorar el universo libremente"
  },

  // --- DETALLES & EASTER EGGS (Secretos interactivos) ---
  easterEggs: {
    goldenStar: {
      title: "✦ Estrella de los Deseos ✦",
      message: "Deseo que este nuevo año de vida te traiga toda la paz, amor y felicidad del mundo. Eres mi estrella más brillante. ✨"
    },
    moonMessage: {
      title: "🌙 Un secreto en la Luna",
      message: "Dicen que la luna es hermosa, pero se queda pequeña comparada con tu luz. Te amo."
    },
    constellationInitial: "❤️", // O la inicial que desees (ej: 'S', 'M', '♥')
    loveKeys: [
      "¡Eres la casualidad más bonita de mi vida!",
      "Mi universo entero gira a tu alrededor.",
      "Gracias por existir tal y como eres.",
      "Cada segundo contigo es un regalo."
    ]
  },

  // --- MÚSICA & AUDIO ---
  audio: {
    // Si colocas tu archivo en public/assets/music.mp3 sonará automáticamente.
    // Si no está el archivo, el sintetizador ambiental romántico Web Audio se activará con suaves acordes celestiales.
    musicUrl: "assets/music.mp3",
    volume: 0.6,
    enableAmbientSynthFallback: true
  },

  // --- AJUSTES VISUALES ---
  theme: {
    bgDark: "#03030c",
    bgDeepSpace: "#070415",
    accentRed: "#e63956",
    accentRose: "#f3a6b2",
    accentGold: "#f5d77f",
    accentCyan: "#70d6ff",
    textWhite: "#ffffff"
  }
};
