// Simulated database for the app

const users = [
  {
    id: 'u1',
    name: 'Joaquin Zanardi',
    email: 'joaquin.zanardi@example.com',
    avatar: 'profile-image.png',
    credential: '1023423',
    team: 'Programador',
    telephoneNumber: '+541129502225',
    location: 'Buenos Aires, Argentina',
    timeZone: 'Buenos Aires (GMT - 3)',
    points: 13205,
    password: '12345678',
    createdAt: '2025-01-01T10:00:00Z',
  },
  {
    id: 'u2',
    name: 'Ignacio Morinigo',
    email: 'ignaciomorinigo848@gmail.com',
    avatar: 'profile2.png',
    credential: '11492291',
    team: 'IT',
    telephoneNumber: '+541112223344',
    location: 'Buenos Aires, Argentina',
    timeZone: 'Buenos Aires (GMT - 3)',
    points: 1200,
    password: '12345678',
    createdAt: '2025-02-15T12:30:00Z',
  },
];

const categories = [
  {
    id: 'c1',
    icon: require('../assets/Categories/social-networks.png'),
    title: 'Tomarse un break',
    maxPhaseTime: 600,
    minPhaseTime: 100,
    counterTime: 0,
    phaseInTime: 1,
    phase: 3,
    progress: 30,
    color: '#8EBAC5',
  },
  {
    id: 'c2',
    icon: require('../assets/Categories/mobile.png'),
    title: 'Mobile',
    maxPhaseTime: 600,
    minPhaseTime: 100,
    counterTime: 0,
    phaseInTime: 1,
    phase: 3,
    progress: 30,
    color: '#E7A64E',
  },
  {
    id: 'c3',
    icon: require('../assets/Categories/stroll.png'),
    title: 'Ir a caminar',
    maxPhaseTime: 600,
    minPhaseTime: 100,
    counterTime: 0,
    phaseInTime: 1,
    phase: 3,
    progress: 30,
    color: '#E76E6E',
  },
  {
    id: 'c4',
    icon: require('../assets/Categories/dinner.png'),
    title: 'Almuerzo/Café',
    router: 'Timer',
    maxPhaseTime: 600,
    minPhaseTime: 100,
    counterTime: 0,
    phaseInTime: 1,
    phase: 3,
    progress: 30,
    color: '#6BBF5A',
  },
];

const moods = [
  { id: 'm1', label: 'Frustrado', emoji: 'Frustrated.png', color: '#8EBAC5' },
  { id: 'm2', label: 'Triste', emoji: 'sad.png', color: '#E76E6E' },
  { id: 'm3', label: 'Indiferente', emoji: 'indifferent.png', color: '#E7A64E' },
  { id: 'm4', label: 'Feliz', emoji: 'happy.png', color: '#6BBF5A' },
  { id: 'm5', label: 'Motivado', emoji: 'motivated.png', color: '#9B6DE7' },
];

const habits = [
  {
    id: 'h1',
    icon: require('../assets/habits/Mindfullness.png'),
    title: 'Mindfullness',
    subtitle: 'Ayuda a liberar el estrés, calmar la mente y reconectarte contigo mismo, saliendo del piloto automático.',
    detail: 'El mindfulness, o atención plena, es una práctica que consiste en centrar la atención en el momento presente, de manera consciente y sin juzgar. A través de la meditación y otras técnicas, se busca desarrollar una mayor conexión con uno mismo y con el entorno. Entre sus principales beneficios se encuentran la reducción del estrés y la ansiedad, la mejora de la concentración, el aumento del bienestar emocional y una mayor capacidad para gestionar las emociones. Practicar mindfulness de forma regular puede ayudarte a vivir de manera más tranquila, equilibrada y plena.',
    btn:"Quiero registrar mi pausa",
     route:"Timer"
  },
  {
    id: 'h2',
    icon: require('../assets/habits/goForWalk.png'),
    title: 'Salir a dar un paseo',
    subtitle: 'Aprovechar los momentos de pausa como el almuerzo para dar un paseo de unos minutos y respirar aire fresco.',
    detail: 'Salir a dar un paseo durante el horario de almuerzo es una excelente forma de despejar la mente y recargar energía para el resto del día. Caminar unos minutos al aire libre ayuda a reducir el estrés, mejorar el estado de ánimo y fomentar la creatividad. Además, es una pausa saludable que permite desconectarse un poco del trabajo y volver con más concentración y buen ánimo.',
    btn:"Quiero registrar mi paseo",
     route:"Timer"
  },
  {
    id: 'h3',
    icon: require('../assets/habits/shoes.png'),
    title: 'Hacer ejercicio',
    subtitle: 'Hacer ejercicio mejora tu salud, aumenta tu energía y reduce el estrés. Te ayuda a mantener una mente más clara y enfocada.',
    detail: 'Hacer ejercicio antes o después del trabajo ofrece numerosos beneficios tanto físicos como mentales. Realizar actividad física ayuda a liberar el estrés acumulado, mejora la concentración y aumenta los niveles de energía. Además, contribuye a mantener una buena salud cardiovascular y a mejorar el estado de ánimo, lo que se traduce en un mejor rendimiento durante la jornada laboral y una sensación general de bienestar.',
    btn:"Quiero armar una rutina con Blu",
    route:"ChatBot",
    list:"workout"
  },
  {
    id: 'h4',
    icon: require('../assets/habits/notePad.png'),
    title: 'Anotar lo que te sucede',
    subtitle: 'Escribir sobre tus experiencias favorece la salud mental porque permite comprender mejor las emociones, aliviar el estrés y aclarar los pensamientos.',
    detail: 'Anotar lo que te pasa en el trabajo puede ser súper útil. Te ayuda a entender mejor cómo te sentís, a descargar el estrés y a poner un poco de orden en la cabeza cuando todo parece un lío. Además, escribir sobre tus experiencias te da otra perspectiva de lo que vivís día a día y puede ayudarte a manejar mejor las emociones que surgen en el laburo. Y si preferís conversarlo en vez de escribirlo, también podés contárselo a Blu. A veces poner en palabras lo que te pasa —aunque sea en una conversación con una herramienta digital— ayuda a aclarar ideas, bajar la tensión y encontrar nuevas formas de ver las cosas. Es una buena manera de hacer una pausa, reflexionar y seguir adelante con más claridad.',
    btn:"Quiero hablar con Blu sobre lo que me sucede",
    route:"ChatBot",
    list:"note"
  },
];

// Time Records - Track activity sessions with duration and points
const timeRecords = [
    {
    id: 'tr0',
    userId: 'u1',
    categoryId: 'c3',
    duration: 1800, // 30 minutes
    points: 100,
    date: '2025-11-11',
    time: '14:30:00',
    notes: 'Ir a caminar',
    createdAt: '2025-11-11T14:30:00Z',
  },
  {
    id: 'tr1',
    userId: 'u1',
    categoryId: 'c3',
    duration: 1800, // 30 minutes
    points: 100,
    date: '2025-11-11',
    time: '14:30:00',
    notes: 'Ir a caminar',
    createdAt: '2025-11-11T14:30:00Z',
  },
  {
    id: 'tr2',
    userId: 'u1',
    categoryId: 'c4',
    duration: 2700, // 45 minutes
    points: 525,
    date: '2025-11-11',
    time: '12:15:00',
    notes: 'Almuerzo/Café',
    createdAt: '2025-11-11T12:15:00Z',
  },
  {
    id: 'tr2b',
    userId: 'u1',
    categoryId: 'c1',
    duration: 600, // 10 minutes
    points: 150,
    date: '2025-11-11',
    time: '10:00:00',
    notes: 'Tomarse un break',
    createdAt: '2025-11-11T10:00:00Z',
  },
  {
    id: 'tr2c',
    userId: 'u1',
    categoryId: 'c2',
    duration: 1200, // 20 minutes
    points: 200,
    date: '2025-11-11',
    time: '16:00:00',
    notes: 'Mobile',
    createdAt: '2025-11-11T16:00:00Z',
  },
  // Datos de esta semana (5-10 Nov)
  {
    id: 'tr3',
    userId: 'u1',
    categoryId: 'c3',
    duration: 2400, // 40 minutes
    points: 150,
    date: '2025-11-10',
    time: '15:00:00',
    notes: 'Ir a caminar',
    createdAt: '2025-11-10T15:00:00Z',
  },
  {
    id: 'tr4',
    userId: 'u1',
    categoryId: 'c4',
    duration: 3000, // 50 minutes
    points: 550,
    date: '2025-11-10',
    time: '12:30:00',
    notes: 'Almuerzo',
    createdAt: '2025-11-10T12:30:00Z',
  },
  {
    id: 'tr5',
    userId: 'u1',
    categoryId: 'c1',
    duration: 900, // 15 minutes
    points: 180,
    date: '2025-11-09',
    time: '11:00:00',
    notes: 'Break',
    createdAt: '2025-11-09T11:00:00Z',
  },
  {
    id: 'tr6',
    userId: 'u1',
    categoryId: 'c2',
    duration: 1800, // 30 minutes
    points: 300,
    date: '2025-11-09',
    time: '16:30:00',
    notes: 'Mobile',
    createdAt: '2025-11-09T16:30:00Z',
  },
  {
    id: 'tr7',
    userId: 'u1',
    categoryId: 'c3',
    duration: 3600, // 1 hour
    points: 200,
    date: '2025-11-08',
    time: '18:00:00',
    notes: 'Caminar largo',
    createdAt: '2025-11-08T18:00:00Z',
  },
  {
    id: 'tr8',
    userId: 'u1',
    categoryId: 'c4',
    duration: 2400, // 40 minutes
    points: 480,
    date: '2025-11-07',
    time: '13:00:00',
    notes: 'Almuerzo tranquilo',
    createdAt: '2025-11-07T13:00:00Z',
  },
  {
    id: 'tr9',
    userId: 'u1',
    categoryId: 'c1',
    duration: 1200, // 20 minutes
    points: 240,
    date: '2025-11-06',
    time: '10:30:00',
    notes: 'Break café',
    createdAt: '2025-11-06T10:30:00Z',
  },
  {
    id: 'tr10',
    userId: 'u1',
    categoryId: 'c2',
    duration: 900, // 15 minutes
    points: 150,
    date: '2025-11-05',
    time: '17:00:00',
    notes: 'Revisar móvil',
    createdAt: '2025-11-05T17:00:00Z',
  },
  // Datos de octubre
  {
    id: 'tr11',
    userId: 'u1',
    categoryId: 'c3',
    duration: 2700, // 45 minutes
    points: 170,
    date: '2025-10-28',
    time: '14:00:00',
    notes: 'Caminar',
    createdAt: '2025-10-28T14:00:00Z',
  },
  {
    id: 'tr12',
    userId: 'u1',
    categoryId: 'c4',
    duration: 3300, // 55 minutes
    points: 600,
    date: '2025-10-25',
    time: '12:00:00',
    notes: 'Almuerzo',
    createdAt: '2025-10-25T12:00:00Z',
  },
  {
    id: 'tr13',
    userId: 'u1',
    categoryId: 'c1',
    duration: 1500, // 25 minutes
    points: 300,
    date: '2025-10-20',
    time: '15:30:00',
    notes: 'Break',
    createdAt: '2025-10-20T15:30:00Z',
  },
  {
    id: 'tr14',
    userId: 'u1',
    categoryId: 'c2',
    duration: 2100, // 35 minutes
    points: 350,
    date: '2025-10-18',
    time: '16:00:00',
    notes: 'Mobile',
    createdAt: '2025-10-18T16:00:00Z',
  },
  {
    id: 'tr15',
    userId: 'u1',
    categoryId: 'c3',
    duration: 3000, // 50 minutes
    points: 180,
    date: '2025-10-15',
    time: '17:00:00',
    notes: 'Paseo',
    createdAt: '2025-10-15T17:00:00Z',
  },
  {
    id: 'tr16',
    userId: 'u1',
    categoryId: 'c4',
    duration: 2400, // 40 minutes
    points: 480,
    date: '2025-10-12',
    time: '13:00:00',
    notes: 'Almuerzo',
    createdAt: '2025-10-12T13:00:00Z',
  },
  {
    id: 'tr17',
    userId: 'u1',
    categoryId: 'c1',
    duration: 600, // 10 minutes
    points: 120,
    date: '2025-10-08',
    time: '11:00:00',
    notes: 'Break corto',
    createdAt: '2025-10-08T11:00:00Z',
  },
  {
    id: 'tr18',
    userId: 'u1',
    categoryId: 'c2',
    duration: 1800, // 30 minutes
    points: 300,
    date: '2025-10-05',
    time: '19:00:00',
    notes: 'Mobile noche',
    createdAt: '2025-10-05T19:00:00Z',
  },
  {
    id: 'tr19',
    userId: 'u2',
    categoryId: 'c4',
    duration: 3605, // 1 hour 5 seconds
    points: 650,
    date: '2025-09-17',
    time: '13:00:00',
    notes: 'Almuerzo/Café',
    createdAt: '2025-09-17T13:00:00Z',
  },
  // Agregados para pruebas (diario)
  {
    id: 'tr_diario_1',
    userId: 'u1',
    categoryId: 'c1',
    duration: 600,
    points: 50,
    date: '2025-11-18',
    time: '09:00:00',
    notes: 'Break matutino',
    createdAt: '2025-11-18T09:00:00Z',
  },
  {
    id: 'tr_diario_2',
    userId: 'u1',
    categoryId: 'c2',
    duration: 900,
    points: 80,
    date: '2025-11-18',
    time: '15:00:00',
    notes: 'Revisar móvil',
    createdAt: '2025-11-18T15:00:00Z',
  },
  // Agregados para pruebas (semanal)
  {
    id: 'tr_semanal_1',
    userId: 'u1',
    categoryId: 'c3',
    duration: 1200,
    points: 100,
    date: '2025-11-17',
    time: '10:00:00',
    notes: 'Caminar rápido',
    createdAt: '2025-11-17T10:00:00Z',
  },
  {
    id: 'tr_semanal_2',
    userId: 'u1',
    categoryId: 'c4',
    duration: 1800,
    points: 150,
    date: '2025-11-16',
    time: '12:00:00',
    notes: 'Almuerzo con equipo',
    createdAt: '2025-11-16T12:00:00Z',
  },
  {
    id: 'tr_semanal_3',
    userId: 'u1',
    categoryId: 'c1',
    duration: 600,
    points: 50,
    date: '2025-11-15',
    time: '09:30:00',
    notes: 'Break corto',
    createdAt: '2025-11-15T09:30:00Z',
  },
  {
    id: 'tr_semanal_4',
    userId: 'u1',
    categoryId: 'c2',
    duration: 900,
    points: 80,
    date: '2025-11-14',
    time: '16:00:00',
    notes: 'Revisar móvil',
    createdAt: '2025-11-14T16:00:00Z',
  },
  {
    id: 'tr_semanal_5',
    userId: 'u1',
    categoryId: 'c3',
    duration: 1200,
    points: 100,
    date: '2025-11-13',
    time: '11:00:00',
    notes: 'Caminar lento',
    createdAt: '2025-11-13T11:00:00Z',
  },
];

// Mood Records - Track user mood entries separately from activities
const moodRecords = [
  // Hoy (11 Nov)
  {
    id: 'mr1',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-11-11',
    time: '08:00:00',
    note: 'Me siento feliz hoy',
    createdAt: '2025-11-11T08:00:00Z',
  },
  {
    id: 'mr1b',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-11',
    time: '14:00:00',
    note: 'Motivado después de caminar',
    createdAt: '2025-11-11T14:00:00Z',
  },
  {
    id: 'mr1c',
    userId: 'u1',
    moodId: 'm3',
    date: '2025-11-11',
    time: '17:00:00',
    note: 'Indiferente',
    createdAt: '2025-11-11T17:00:00Z',
  },
  // Esta semana (5-10 Nov)
  {
    id: 'mr2',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-10',
    time: '09:00:00',
    note: 'Motivado para trabajar',
    createdAt: '2025-11-10T09:00:00Z',
  },
  {
    id: 'mr3',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-11-09',
    time: '10:30:00',
    note: 'Feliz por el progreso',
    createdAt: '2025-11-09T10:30:00Z',
  },
  {
    id: 'mr4',
    userId: 'u1',
    moodId: 'm3',
    date: '2025-11-08',
    time: '14:00:00',
    note: 'Día tranquilo',
    createdAt: '2025-11-08T14:00:00Z',
  },
  {
    id: 'mr5',
    userId: 'u1',
    moodId: 'm2',
    date: '2025-11-07',
    time: '16:00:00',
    note: 'Un poco cansado',
    createdAt: '2025-11-07T16:00:00Z',
  },
  {
    id: 'mr6',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-11-06',
    time: '08:30:00',
    note: 'Buenos días',
    createdAt: '2025-11-06T08:30:00Z',
  },
  {
    id: 'mr7',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-05',
    time: '09:00:00',
    note: 'Empezando bien la semana',
    createdAt: '2025-11-05T09:00:00Z',
  },
  // Octubre
  {
    id: 'mr8',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-10-28',
    time: '10:00:00',
    note: 'Feliz',
    createdAt: '2025-10-28T10:00:00Z',
  },
  {
    id: 'mr9',
    userId: 'u1',
    moodId: 'm3',
    date: '2025-10-25',
    time: '15:00:00',
    note: 'Normal',
    createdAt: '2025-10-25T15:00:00Z',
  },
  {
    id: 'mr10',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-10-20',
    time: '09:30:00',
    note: 'Muy motivado',
    createdAt: '2025-10-20T09:30:00Z',
  },
  {
    id: 'mr11',
    userId: 'u1',
    moodId: 'm1',
    date: '2025-10-18',
    time: '17:00:00',
    note: 'Frustrado con proyecto',
    createdAt: '2025-10-18T17:00:00Z',
  },
  {
    id: 'mr12',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-10-15',
    time: '11:00:00',
    note: 'Feliz y relajado',
    createdAt: '2025-10-15T11:00:00Z',
  },
  {
    id: 'mr13',
    userId: 'u1',
    moodId: 'm2',
    date: '2025-10-12',
    time: '16:30:00',
    note: 'Triste',
    createdAt: '2025-10-12T16:30:00Z',
  },
  {
    id: 'mr14',
    userId: 'u1',
    moodId: 'm3',
    date: '2025-10-08',
    time: '12:00:00',
    note: 'Indiferente',
    createdAt: '2025-10-08T12:00:00Z',
  },
  {
    id: 'mr15',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-10-05',
    time: '08:00:00',
    note: 'Motivado al iniciar mes',
    createdAt: '2025-10-05T08:00:00Z',
  },
  {
    id: 'mr16',
    userId: 'u2',
    moodId: 'm2',
    date: '2025-09-17',
    time: '09:30:00',
    note: 'Un poco triste por el trabajo',
    createdAt: '2025-09-17T09:30:00Z',
  },
  // Agregados para pruebas (diario)
  {
    id: 'mr_diario_1',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-11-18',
    time: '08:30:00',
    note: 'Feliz por el desayuno',
    createdAt: '2025-11-18T08:30:00Z',
  },
  {
    id: 'mr_diario_2',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-18',
    time: '17:00:00',
    note: 'Motivado por el trabajo',
    createdAt: '2025-11-18T17:00:00Z',
  },
  {
    id: 'mr_diario_3',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-18',
    time: '20:00:00',
    note: 'Motivado por terminar el día',
    createdAt: '2025-11-18T20:00:00Z',
  },
  // Agregados para pruebas (semanal)
  {
    id: 'mr_semanal_1',
    userId: 'u1',
    moodId: 'm3',
    date: '2025-11-17',
    time: '09:00:00',
    note: 'Indiferente',
    createdAt: '2025-11-17T09:00:00Z',
  },
  {
    id: 'mr_semanal_2',
    userId: 'u1',
    moodId: 'm2',
    date: '2025-11-16',
    time: '15:00:00',
    note: 'Triste por noticias',
    createdAt: '2025-11-16T15:00:00Z',
  },
  {
    id: 'mr_semanal_3',
    userId: 'u1',
    moodId: 'm1',
    date: '2025-11-15',
    time: '18:00:00',
    note: 'Frustrado por tareas',
    createdAt: '2025-11-15T18:00:00Z',
  },
  {
    id: 'mr_semanal_4',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-11-14',
    time: '08:00:00',
    note: 'Feliz por el clima',
    createdAt: '2025-11-14T08:00:00Z',
  },
  {
    id: 'mr_semanal_5',
    userId: 'u1',
    moodId: 'm5',
    date: '2025-11-13',
    time: '20:00:00',
    note: 'Motivado para el finde',
    createdAt: '2025-11-13T20:00:00Z',
  },
];

const awards = [
  {
    id: 'a1',
    userId: 'u1',
    description: '+1 día de vacaciones',
    points: 20000,
    category: 'Beneficios',
  },
  {
    id: 'a2',
    userId: 'u1',
    description: '+1 día flex',
    points: 10000,
    category: 'Beneficios',
  },
  {
    id: 'a3',
    userId: 'u2',
    description: 'Auriculares',
    points: 8000,
    category: 'Productos',
  },
  {
    id: 'a4',
    userId: 'u2',
    description: 'Mochila',
    points: 6000,
    category: 'Productos',
  },
  {
    id: 'a5',
    userId: 'u1',
    description: '+1 día home office',
    points: 15000,
    category: 'Beneficios',
  },
  {
    id: 'a6',
    userId: 'u2',
    description: '$20.000 Pedidos ya',
    points: 10000,
    category: 'Servicios',
  },
  {
    id: 'a7',
    userId: 'u1',
    description: 'Taza personalizada',
    points: 2500,
    category: 'Productos',
  },
  {
    id: 'a8',
    userId: 'u2',
    description: 'Remera de la empresa',
    points: 3000,
    category: 'Productos',
  },
  {
    id: 'a9',
    userId: 'u1',
    description: 'Set de stickers',
    points: 1000,
    category: 'Productos',
  },
  {
    id: 'a10',
    userId: 'u2',
    description: 'Botella térmica',
    points: 3500,
    category: 'Productos',
  },
  {
    id: 'a11',
    userId: 'u1',
    description: 'Salir 30 min antes',
    points: 5000,
    category: 'Beneficios',
  },
  {
    id: 'a13',
    userId: 'u1',
    description: '$5.000 Rappi/Pedidos Ya',
    points: 3500,
    category: 'Servicios',
  },
  {
    id: 'a14',
    userId: 'u2',
    description: 'Entradas de cine para 2',
    points: 3000,
    category: 'Servicios',
  },
  {
    id: 'a15',
    userId: 'u1',
    description: 'Cena para 2',
    points: 8000,
    category: 'Servicios',
  },
  {
    id: 'a17',
    userId: 'u1',
    description: 'Cuaderno/Agenda',
    points: 2000,
    category: 'Productos',
  },
  {
    id: 'a18',
    userId: 'u2',
    description: 'Mouse pad de la empresa',
    points: 1500,
    category: 'Productos',
  },
  {
    id: 'a20',
    userId: 'u2',
    description: 'Gift card $3.000',
    points: 3000,
    category: 'Servicios',
  },
  {
    id: 'a21',
    userId: 'u1',
    description: 'Llavero empresarial',
    points: 800,
    category: 'Productos',
  },
  {
    id: 'a22',
    userId: 'u2',
    description: 'Bolígrafo corporativo',
    points: 1200,
    category: 'Productos',
  },
];

const alerts = [
  {
    id: 'al1',
    userId: 'u1',
    date: '2025-09-20',
    message: 'Estamos llegando a las 18, no te olvides de finalizar tu timer',
  },
  {
    id: 'al2',
    userId: 'u1',
    date: '2025-09-20',
    message: 'Recordá tomarte una pausa activa para recargar energías',
  },
  {
    id: 'al3',
    userId: 'u2',
    date: '2025-09-20',
    message: '¡Ya son las 9! Es momento de comenzar tu timer',
  },
];

const weeklyAssignments = [
  {
    id: 'wa1',
    categoryId: 'c1',
    requirement: 'Completar 3 sesiones de break esta semana',
    countRequirement: 3,
  },
  {
    id: 'wa2',
    categoryId: 'c3',
    requirement: 'Caminar al menos 2 veces esta semana',
    countRequirement: 2,
  },
];

const infoProgress = [
  {
    id: 'ip1',
    userId: 'u1',
    title: 'Seguir leyendo',
    subtitle: 'Aprender un nuevo hábito hoy para mejorar mi estilo de vida',
    icon: require('../assets/Home/book.png'),
    route:"HabitStack"
  },
  {
    id: 'ip2',
    userId: 'u2',
    title: 'Ver seguimiento',
    subtitle: 'Visualizá tus logros hasta el momento',
    icon: require('../assets/Home/progressBar.png'),
    route:"Statistics"
  },
];

const emotes = {
  happy: require("../assets/Emote/happy.png"),
  exhausted:  require("../assets/Emote/exhausted.png"),
  noWords:  require("../assets/Emote/noWords.png"),
  unsure:  require("../assets/Emote/unsure.png"),
  confused: require("../assets/Emote/confused.png")
};

// Data mutation functions
const addTimeRecord = (userId, categoryId, duration, points, notes = '') => {
  const newRecord = {
    id: `tr${timeRecords.length + 1}`,
    userId,
    categoryId,
    duration,
    points,
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0],
    notes,
    createdAt: new Date().toISOString(),
  };
  timeRecords.push(newRecord);
  
  // Update user points
  const user = users.find(u => u.id === userId);
  if (user) {
    user.points += points;
  }
  
  return newRecord;
};

const addMoodRecord = (userId, moodId, note = '') => {
  const newRecord = {
    id: `mr${moodRecords.length + 1}`,
    userId,
    moodId,
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0],
    note,
    createdAt: new Date().toISOString(),
  };
  moodRecords.push(newRecord);
  return newRecord;
};

const getUserTimeRecords = (userId) => {
  return timeRecords.filter(record => record.userId === userId);
};

const getUserMoodRecords = (userId) => {
  return moodRecords.filter(record => record.userId === userId);
};

const calculatePoints = (duration, categoryId) => {
  // Base points calculation: 1 point per minute
  const basePoints = Math.floor(duration / 60);
  
  // Category multipliers (optional)
  const multipliers = {
    'c1': 1.0, // Tomarse un break
    'c2': 1.2, // Mobile
    'c3': 1.5, // Ir a caminar
    'c4': 1.0, // Almuerzo/Café
  };
  
  const multiplier = multipliers[categoryId] || 1.0;
  return Math.max(1, Math.floor(basePoints * multiplier));
};

// Clear existing time and mood records
timeRecords.length = 0;
moodRecords.length = 0;

const generateMonthlyRecords = () => {
  const today = new Date();
  const records = { timeRecords: [], moodRecords: [] };

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = date.toISOString().split('T')[0];

    // Generate a random number of time records (1-3 per day)
    const timeRecordCount = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < timeRecordCount; j++) {
      const randomCategory = `c${Math.floor(Math.random() * 4) + 1}`;
      const randomDuration = Math.floor(Math.random() * 3600) + 600; // 10-70 minutes
      const randomPoints = Math.floor(randomDuration / 60) * 10;
      const randomTime = `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00`;

      records.timeRecords.push({
        id: `tr_${formattedDate}_${j + 1}`,
        userId: 'u1',
        categoryId: randomCategory,
        duration: randomDuration,
        points: randomPoints,
        date: formattedDate,
        time: randomTime,
        notes: `Random activity ${j + 1}`,
        createdAt: `${formattedDate}T${randomTime}Z`,
      });
    }

    // Generate a random number of mood records (2-4 per day)
    const moodRecordCount = Math.floor(Math.random() * 3) + 2;
    for (let k = 0; k < moodRecordCount; k++) {
      const randomMood = `m${Math.floor(Math.random() * 5) + 1}`;
      const randomTime = `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00`;

      records.moodRecords.push({
        id: `mr_${formattedDate}_${k + 1}`,
        userId: 'u1',
        moodId: randomMood,
        date: formattedDate,
        time: randomTime,
        note: `Random mood ${k + 1}`,
        createdAt: `${formattedDate}T${randomTime}Z`,
      });
    }

    // Ensure 2 mood records of the same type for today
    if (i === 0) {
      records.moodRecords.push(
        {
          id: `mr_${formattedDate}_special_1`,
          userId: 'u1',
          moodId: 'm4',
          date: formattedDate,
          time: '10:00:00',
          note: 'Feeling happy (special)',
          createdAt: `${formattedDate}T10:00:00Z`,
        },
        {
          id: `mr_${formattedDate}_special_2`,
          userId: 'u1',
          moodId: 'm4',
          date: formattedDate,
          time: '14:00:00',
          note: 'Still feeling happy (special)',
          createdAt: `${formattedDate}T14:00:00Z`,
        }
      );
    }
  }

  return records;
};

const monthlyRecords = generateMonthlyRecords();
timeRecords.push(...monthlyRecords.timeRecords);
moodRecords.push(...monthlyRecords.moodRecords);

console.log('Mood Records:', moodRecords);

const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

// Add mood records for today
moodRecords.push(
  {
    id: `mr_${formattedToday}_1`,
    userId: 'u1',
    moodId: 'm4',
    date: formattedToday,
    time: '10:00:00',
    note: 'Feeling happy',
    createdAt: `${formattedToday}T10:00:00Z`,
  },
  {
    id: `mr_${formattedToday}_2`,
    userId: 'u1',
    moodId: 'm4',
    date: formattedToday,
    time: '14:00:00',
    note: 'Still feeling happy',
    createdAt: `${formattedToday}T14:00:00Z`,
  }
);

// Add time records for today
timeRecords.push(
  {
    id: `tr_${formattedToday}_1`,
    userId: 'u1',
    categoryId: 'c1',
    duration: 600, // 10 minutes
    points: 50,
    date: formattedToday,
    time: '09:00:00',
    notes: 'Morning break',
    createdAt: `${formattedToday}T09:00:00Z`,
  },
  {
    id: `tr_${formattedToday}_2`,
    userId: 'u1',
    categoryId: 'c2',
    duration: 1200, // 20 minutes
    points: 100,
    date: formattedToday,
    time: '15:00:00',
    notes: 'Afternoon mobile time',
    createdAt: `${formattedToday}T15:00:00Z`,
  }
);

module.exports = {
  users,
  categories,
  moods,
  habits,
  timeRecords,
  moodRecords,
  awards,
  alerts,
  weeklyAssignments,
  infoProgress,
  emotes,
  // Mutation functions
  addTimeRecord,
  addMoodRecord,
  getUserTimeRecords,
  getUserMoodRecords,
  calculatePoints,
};
