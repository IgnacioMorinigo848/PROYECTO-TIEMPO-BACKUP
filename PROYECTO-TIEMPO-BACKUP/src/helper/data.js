const categories = [
  {
    icon: require("../assets/Categories/social-networks.png"),
    title: "Tomarse un break",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    icon: require("../assets/Categories/mobile.png"),
    title: "Mobile",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    icon: require("../assets/Categories/stroll.png"),
    title: "Ir a caminar",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    icon: require("../assets/Categories/dinner.png"),
    title: "Almuerzo/Café",
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
    icon:require("../assets/Home/book.png"),
    title:"Tomarse un break",
    phase:2,
    progress:30,
    time:"Hace 2 minutos"
  },
  {
    icon:require("../assets/Home/book.png"),
    title:"Ir a caminar",
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
  },
  {
    icon:require("../assets/Home/progressBar.png"),
    title:"Ver seguimiento",
    subtitle:"Visualizá tus logros hasta el momento",
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
  },
  {
    icon: require("../assets/habits/goForWalk.png"),
    title: "Salir a dar un paseo",
    subtitle:
      "Aprovechar los momentos de pausa como el almuerzo para dar un paseo de unos minutos y respirar aire fresco.",
    detail:
      "Salir a dar un paseo durante el horario de almuerzo es una excelente forma de despejar la mente y recargar energía para el resto del día. Caminar unos minutos al aire libre ayuda a reducir el estrés, mejorar el estado de ánimo y fomentar la creatividad. Además, es una pausa saludable que permite desconectarse un poco del trabajo y volver con más concentración y buen ánimo."
  },
  {
    icon: require("../assets/habits/shoes.png"),
    title: "Hacer ejercicio",
    subtitle:
      "Hacer ejercicio mejora tu salud, aumenta tu energía y reduce el estrés. Te ayuda a mantener una mente más clara y enfocada.",
    detail:
      "Hacer ejercicio antes o después del trabajo ofrece numerosos beneficios tanto físicos como mentales. Realizar actividad física ayuda a liberar el estrés acumulado, mejora la concentración y aumenta los niveles de energía. Además, contribuye a mantener una buena salud cardiovascular y a mejorar el estado de ánimo, lo que se traduce en un mejor rendimiento durante la jornada laboral y una sensación general de bienestar."
  },
  {
    icon: require("../assets/habits/notePad.png"),
    title: "Anotar lo que te sucede",
    subtitle:
      "Escribir sobre tus experiencias favorece la salud mental porque permite comprender mejor las emociones, aliviar el estrés y aclarar los pensamientos.",
    detail:
      "Anotar lo que te pasa en el trabajo puede ser súper útil. Te ayuda a entender mejor cómo te sentís, a descargar el estrés y a poner un poco de orden en la cabeza cuando todo parece un lío. Además, escribir sobre tus experiencias te da otra perspectiva de lo que vivís día a día y puede ayudarte a manejar mejor las emociones que surgen en el laburo. Y si preferís conversarlo en vez de escribirlo, también podés contárselo a Blu. A veces poner en palabras lo que te pasa —aunque sea en una conversación con una herramienta digital— ayuda a aclarar ideas, bajar la tensión y encontrar nuevas formas de ver las cosas. Es una buena manera de hacer una pausa, reflexionar y seguir adelante con más claridad."
  },
];
module.exports = {weeklyAssigment,categories,record,profile,awards,alerts,credentials,emote,moods,infoProgress,habits};