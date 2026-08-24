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
    quoteLine1: "Nuestro Universo",
    quoteLine2: "Un viaje a través de las estrellas creado para ti",
    dedication: "Esta experiencia fue creada con todo mi amor ❤️",
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
      title: "Nuestro primer momento",
      subtitle: "El inicio de algo mágico",
      date: "Aquel primer día",
      snoopyDialogue: "¡Woof! 🐾 ¡Aterrizamos en las coordenadas del Capítulo I! Desde aquel primer instante en que sus miradas se cruzaron, supe que empezaba la historia más bonita de todas...",
      description: "Recuerdo perfectamente el momento en que nuestras miradas se cruzaron por primera vez. No sabía entonces que en ese instante mi mundo cambiaría para siempre y empezaría la historia más bonita de mi vida.",
      image: "assets/foto1.jpg",
      color: 0xf3a6b2, // Rosa cuarzo
      emissive: 0x6e1b34,
      tag: "Capítulo I"
    },
    {
      id: "memory-2",
      icon: "✨",
      title: "Ese día que no voy a olvidar",
      subtitle: "Grabado en el corazón",
      date: "Un instante eterno",
      snoopyDialogue: "¡Aterrizaje perfecto, capitán! ✨ Este planeta guarda una tarde mágica e inolvidable. El tiempo se detuvo y las risas quedaron grabadas para siempre en el cosmos.",
      description: "Hay días que se quedan grabados para siempre. Aquella tarde en la que el tiempo pareció detenerse, donde las risas no faltaron y entendí que contigo cualquier lugar ordinario se convierte en el lugar más especial.",
      image: "assets/foto2.jpg",
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
      description: "Cada una de estas 6 fotografías guarda una historia, una risa o un instante que hace que mi mundo sea perfecto a tu lado:",
      isGallery: true,
      gallery: [
        {
          id: 1,
          title: "1. Risas Inolvidables",
          description: "Esa risa espontánea y contagiosa que ilumina cualquier día por más gris que parezca.",
          image: "assets/galeria1.jpg"
        },
        {
          id: 2,
          title: "2. Nuestras Aventuras",
          description: "Cualquier viaje o salida improvisada donde lo único que importaba era estar juntos.",
          image: "assets/galeria2.jpg"
        },
        {
          id: 3,
          title: "3. La Magia de tu Mirada",
          description: "La complicidad y la paz infinita que siento cada vez que me miras.",
          image: "assets/galeria3.jpg"
        },
        {
          id: 4,
          title: "4. Días Simples, Recuerdos Eternos",
          description: "Esos momentos cotidianos donde no necesitamos nada más que nuestra compañía.",
          image: "assets/galeria4.jpg"
        },
        {
          id: 5,
          title: "5. Tu Apoyo Incondicional",
          description: "Gracias por estar siempre ahí, por tus abrazos cálidos y por creer siempre en mí.",
          image: "assets/galeria5.jpg"
        },
        {
          id: 6,
          title: "6. Por Todo lo que Eres",
          description: "Por tu dulzura, tu bondad, tu belleza y por ser mi persona favorita en todo el universo.",
          image: "assets/galeria6.jpg"
        }
      ],
      color: 0xe63956, // Rojo carmesí profundo
      emissive: 0x4a0e19,
      tag: "Capítulo III"
    },
    {
      id: "memory-4",
      icon: "🪐",
      title: "Los momentos que nos quedan por vivir",
      subtitle: "Un futuro infinito",
      date: "Por siempre",
      snoopyDialogue: "¡Mirando hacia el horizonte! 🪐 Todo lo vivido hasta hoy es maravilloso, pero lo que viene será aún más grandioso. ¡Nos queda un universo entero por explorar!",
      description: "Esto es solo el comienzo. Sueño con todos los viajes que haremos, los atardeceres que veremos juntos, las metas que celebraremos y cada uno de los cumpleaños que vendrán. El universo entero nos espera.",
      image: "assets/foto4.jpg",
      color: 0x70d6ff, // Azul celeste aurora
      emissive: 0x0e3b52,
      tag: "Capítulo IV"
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
      "Eres esa luz cálida que hace que todo valga la pena, mi refugio de calma y mi mayor alegría en este universo.",
      "Espero poder seguir creando infinitas memorias y celebrando la vida a tu lado.",
      "Feliz cumpleaños, mi amor. ❤️"
    ],
    signOff: "Con todo mi amor y devoción,",
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
