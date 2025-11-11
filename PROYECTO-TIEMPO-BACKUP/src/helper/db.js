// Simulated database for the app

const users = [
  {
    id: 'u1',
    name: 'Carolina Fernandez',
    email: 'c.fernandez@empresa.com',
    avatar: 'profile-image.png',
    credential: '1123423',
    team: 'Marketing',
    telephoneNumber: '+541123234343',
    location: 'Buenos Aires, Argentina',
    timeZone: 'Buenos Aires (GMT - 3)',
    points: 12000,
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
  },
  {
    id: 'h2',
    icon: require('../assets/habits/goForWalk.png'),
    title: 'Salir a dar un paseo',
    subtitle: 'Aprovechar los momentos de pausa como el almuerzo para dar un paseo de unos minutos y respirar aire fresco.',
    detail: 'Salir a dar un paseo durante el horario de almuerzo es una excelente forma de despejar la mente y recargar energía para el resto del día. Caminar unos minutos al aire libre ayuda a reducir el estrés, mejorar el estado de ánimo y fomentar la creatividad. Además, es una pausa saludable que permite desconectarse un poco del trabajo y volver con más concentración y buen ánimo.',
  },
  {
    id: 'h3',
    icon: require('../assets/habits/shoes.png'),
    title: 'Hacer ejercicio',
    subtitle: 'Hacer ejercicio mejora tu salud, aumenta tu energía y reduce el estrés. Te ayuda a mantener una mente más clara y enfocada.',
    detail: 'Hacer ejercicio antes o después del trabajo ofrece numerosos beneficios tanto físicos como mentales. Realizar actividad física ayuda a liberar el estrés acumulado, mejora la concentración y aumenta los niveles de energía. Además, contribuye a mantener una buena salud cardiovascular y a mejorar el estado de ánimo, lo que se traduce en un mejor rendimiento durante la jornada laboral y una sensación general de bienestar.',
  },
  {
    id: 'h4',
    icon: require('../assets/habits/notePad.png'),
    title: 'Anotar lo que te sucede',
    subtitle: 'Escribir sobre tus experiencias favorece la salud mental porque permite comprender mejor las emociones, aliviar el estrés y aclarar los pensamientos.',
    detail: 'Anotar lo que te pasa en el trabajo puede ser súper útil. Te ayuda a entender mejor cómo te sentís, a descargar el estrés y a poner un poco de orden en la cabeza cuando todo parece un lío. Además, escribir sobre tus experiencias te da otra perspectiva de lo que vivís día a día y puede ayudarte a manejar mejor las emociones que surgen en el laburo. Y si preferís conversarlo en vez de escribirlo, también podés contárselo a Blu. A veces poner en palabras lo que te pasa —aunque sea en una conversación con una herramienta digital— ayuda a aclarar ideas, bajar la tensión y encontrar nuevas formas de ver las cosas. Es una buena manera de hacer una pausa, reflexionar y seguir adelante con más claridad.',
  },
];

// Time Records - Track activity sessions with duration and points
const timeRecords = [
  {
    id: 'tr1',
    userId: 'u1',
    categoryId: 'c3',
    habitId: 'h2',
    duration: 5, // in seconds
    points: 100,
    date: '2025-10-21',
    time: '14:30:00',
    notes: 'Ir a caminar',
    createdAt: '2025-10-21T14:30:05Z',
  },
  {
    id: 'tr2',
    userId: 'u1',
    categoryId: 'c4',
    habitId: 'h1',
    duration: 2705, // 45 minutes 5 seconds
    points: 525,
    date: '2025-09-18',
    time: '12:15:00',
    notes: 'Almuerzo/Café',
    createdAt: '2025-09-18T12:15:00Z',
  },
  {
    id: 'tr3',
    userId: 'u2',
    categoryId: 'c4',
    habitId: 'h3',
    duration: 3605, // 1 hour 5 seconds
    points: 650,
    date: '2025-09-17',
    time: '13:00:00',
    notes: 'Almuerzo/Café',
    createdAt: '2025-09-17T13:00:00Z',
  },
];

// Mood Records - Track user mood entries separately from activities
const moodRecords = [
  {
    id: 'mr1',
    userId: 'u1',
    moodId: 'm4',
    date: '2025-10-21',
    time: '08:00:00',
    note: 'Me siento feliz después de caminar',
    createdAt: '2025-10-21T08:00:00Z',
  },
  {
    id: 'mr2',
    userId: 'u2',
    moodId: 'm2',
    date: '2025-09-17',
    time: '09:30:00',
    note: 'Un poco triste por el trabajo',
    createdAt: '2025-09-17T09:30:00Z',
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
  },
  {
    id: 'ip2',
    userId: 'u2',
    title: 'Ver seguimiento',
    subtitle: 'Visualizá tus logros hasta el momento',
    icon: require('../assets/Home/progressBar.png'),
  },
];

const emotes = {
  happy: 'happy.png',
  exhausted: 'exhausted.png',
  noWords: 'noWords.png',
  unsure: 'unsure.png',
};

// Data mutation functions
const addTimeRecord = (userId, categoryId, habitId, duration, points, notes = '') => {
  const newRecord = {
    id: `tr${timeRecords.length + 1}`,
    userId,
    categoryId,
    habitId,
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
