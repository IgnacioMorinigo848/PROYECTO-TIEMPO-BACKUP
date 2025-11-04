const categories = [
  {
    image: require("../assets/Categories/social-networks.png"),
    name: "Tomarse un break",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/mobile.png"),
    name: "Mobile",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/stroll.png"),
    name: "Ir a caminar",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/dinner.png"),
    name: "Almuerzo/Café",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  }
];

const record = [
  {
    date:"21/10/2025",
    time:"00:00:05",
    categorie:"Ir a caminar",
    points:100
  },
  {
    date:"18/09/2025",
    time:"00:45:05",
    categorie:"Almuerzo/Café",
    points:525
  },
  {
    date:"17/09/2025",
    time:"01:00:05",
    categorie:"Almuerzo/Café",
    points:650
  },
  {
    date:"18/09/2025",
    time:"01:10:08",
    categorie:"Almuerzo/Café",
    points:680
  },
  {
    date:"18/09/2025",
    time:"00:52:05",
    categorie:"Almuerzo/Café",
    points:610
  },
];

const profile = {
  points:500,
  image:require("../assets/Profile/profile-image.png"),
  name:"Carolina Fernandez",
  credential:"1123423",
  team:"Marketing",
  telephoneNumber:"+541123234343",
  mail:"c.fernandez@empresa.com",
  location:"Buenos Aires, Argentina",
  timeZone: "Buenos Aires (GMT - 3)"
  
};

const awards = [
  { 
    description:"+1 día de vacaciones",
    points:20.000,
    categorie:"Beneficios"
  },
   { 
    description:"+1 día flex",
    points:10.000,
    categorie:"Beneficios"
  },
   { 
    description:"Auriculares",
    points:8.000,
    categorie:"Productos"
  },
   { 
    description:"Mochila",
    points:6.000,
    categorie:"Productos"
  },
   { 
    description:"+1 día home office",
    points:15.000,
    categorie:"Beneficios"
  },
  { 
    description:"$20.000 Pedidos ya",
    points:10.000,
    categorie:"Servicios"
  }
];

const weeklyAssigment = [
  {
    assigment:"Tomarse un break",
    phase:2,
    progress:30,
    time:"Hace 2 minutos"
  },
  {
    assigment:"Ir a caminar",
    phase:2,
    progress:30,
    time:"Hace 1 dia"
  },
];

const infoProgress = [
  {
    icon:require("../assets/Home/book.png"),
    title:"Seguir leyendo",
    subtitle:"Aprender un nuevo hábito hoy para mejorar mi estilo de vida",
    route:"HabitStack"
  },
  {
    icon:require("../assets/Home/progressBar.png"),
    title:"Ver seguimiento",
    subtitle:"Visualizá tus logros hasta el momento",
    route:"HabitStack"
  },
];

const alerts = [
  {
    date:"20/09/25",
    message:"Estamos llegando a las 18, no te olvides de finalizar tu timer"
  },
  {
    date:"20/09/25",
    message:"Recordá tomarte una pausa activa para recargar energías"
  },
  {
    date:"20/09/25",
    message:"¡Ya son las 9! Es momento de comenzar tu timer"
  },
  {
    date:"19/09/25",
    message:"Estamos llegando a las 18, no te olvides de finalizar tu timer"
  },
  {
    date:"19/09/25",
    message:"Recordá tomarte una pausa activa para recargar energías"
  }
];

const credentials = {
  credential:"11492291",
  mail:"ignaciomorinigo848@gmail.com",
  password:"12345678"
};

const emote = {
  happy:require("../assets/Emote/happy.png"),
  exhausted:require("../assets/Emote/exhausted.png"),
  noWords:require("../assets/Emote/noWords.png"),
  unsure:require("../assets/Emote/unsure.png")
};

const moods = [
  { label: 'Frustrado', emoji:require("../assets/Emotion/Frustrated.png"), color: '#8EBAC5' },
  { label: 'Triste', emoji:require("../assets/Emotion/sad.png"), color: '#E76E6E' },
  { label: 'Indiferente', emoji: require("../assets/Emotion/indifferent.png"), color: '#E7A64E' },
  { label: 'Feliz', emoji: require("../assets/Emotion/happy.png"), color: '#6BBF5A' },
  { label: 'Motivado', emoji: require("../assets/Emotion/motivated.png"), color: '#9B6DE7' },
];

const habits = [
  {
    icon: require("../assets/habits/Mindfullness.png"),
    title: "Mindfullness",
    subtitle:
      "Ayuda a liberar el estrés, calmar la mente y reconectarte contigo mismo, saliendo del piloto automático.",
    detail:
      "El mindfulness, o atención plena, es una práctica que consiste en centrar la atención en el momento presente, de manera consciente y sin juzgar. A través de la meditación y otras técnicas, se busca desarrollar una mayor conexión con uno mismo y con el entorno.\nEntre sus principales beneficios se encuentran la reducción del estrés y la ansiedad, la mejora de la concentración, el aumento del bienestar emocional y una mayor capacidad para gestionar las emociones. Practicar mindfulness de forma regular puede ayudarte a vivir de manera más tranquila, equilibrada y plena.",
    route:"HabitDetail"
  },
  {
    icon: require("../assets/habits/goForWalk.png"),
    title: "Salir a dar un paseo",
    subtitle:
      "Aprovechar los momentos de pausa como el almuerzo para dar un paseo de unos minutos y respirar aire fresco.",
    detail:
      "Salir a caminar es una forma sencilla pero poderosa de cuidar tu salud física y mental. Al caminar, activás la circulación, despejás la mente y reducís el estrés del día. Además, estar en movimiento estimula la creatividad y mejora el estado de ánimo.\nIncorporar pequeños paseos diarios, incluso de 10 a 15 minutos, puede ayudarte a mantener una rutina más activa y equilibrada.",
    route:"HabitDetail",
  },
  {
    icon: require("../assets/habits/shoes.png"),
    title: "Hacer ejercicio",
    subtitle:
      "Hacer ejercicio mejora tu salud, aumenta tu energía y reduce el estrés. Te ayuda a mantener una mente más clara y enfocada.",
    detail:
      "La actividad física regular fortalece el cuerpo y la mente. No solo mejora la condición cardiovascular y la fuerza muscular, sino que también libera endorfinas, las hormonas del bienestar.\nHacer ejercicio de forma constante ayuda a reducir la ansiedad, mejora la concentración y potencia la autoestima. No es necesario entrenar intensamente: incluso pequeñas rutinas diarias marcan la diferencia.",
    route:"HabitDetail"  
  },
  {
    icon: require("../assets/habits/notePad.png"),
    title: "Anotar lo que te sucede",
    subtitle:
      "Escribir sobre tus experiencias favorece la salud mental porque permite comprender mejor las emociones, aliviar el estrés y aclarar los pensamientos.",
    detail:
      "Llevar un diario o anotar tus pensamientos te permite reflexionar sobre tus emociones y experiencias diarias. Esta práctica fomenta la autoconciencia, ayuda a liberar tensiones y mejora la claridad mental.\nEscribir unos minutos cada día puede ayudarte a encontrar patrones en tu comportamiento y avanzar hacia una vida más equilibrada y consciente.",
    route:"HabitDetail"
  },
];
module.exports = {weeklyAssigment,categories,record,profile,awards,alerts,credentials,emote,moods,infoProgress,habits};