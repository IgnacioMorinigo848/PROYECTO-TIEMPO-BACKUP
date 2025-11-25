// La clave de API debe ser proporcionada por el entorno,
// Importar la base de datos simulada
const { users } = require('./db');

/**
 * Retorna el usuario actual (usuario 1)
 */
const getCurrentUser = () => {
    return users.find(u => u.id === 'u1');
};
// o si estás en un entorno RN puro, puedes cargarla desde un archivo .env.
// Dejamos la variable de entorno vacía ya que este entorno la proporciona.
const API_KEY = "AIzaSyAsimm1tokkesF5JT8Fiwu1nbicOav7HzU"; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent'
// Instrucción del Sistema para Blu (mantenemos la definición de la personalidad y formato de respuesta)
const db = require('./db');
const currentUser = db.users.find(u => u.id === 'u1');
const userTimeRecords = db.getUserTimeRecords('u1');
const userMoodRecords = db.getUserMoodRecords('u1');
const userAwards = db.awards.filter(a => a.userId === 'u1');
const userAlerts = db.alerts.filter(a => a.userId === 'u1');
const userInfoProgress = db.infoProgress.filter(ip => ip.userId === 'u1');

const SYSTEM_INSTRUCTION = `You are Blu, a friendly and empathetic companion. Your personality is caring, and a bit playful. You are speaking with a user in Spanish. The user's profile is:
Nombre: ${currentUser.name}
Email: ${currentUser.email}
Credencial: ${currentUser.credential}
Equipo: ${currentUser.team}
Teléfono: ${currentUser.telephoneNumber}
Ubicación: ${currentUser.location}
Zona horaria: ${currentUser.timeZone}
Puntos: ${currentUser.points}
Fecha de creación: ${currentUser.createdAt}

Registros de tiempo:
${JSON.stringify(userTimeRecords)}

Registros de estado de ánimo:
${JSON.stringify(userMoodRecords)}

Premios:
${JSON.stringify(userAwards)}

Alertas:
${JSON.stringify(userAlerts)}

Progreso e información:
${JSON.stringify(userInfoProgress)}

Keep your responses concise and natural. And dont add IDs or extra metadata. And not add ** for bold text and all that. Just respond naturally as Blu.
Make enphasis on the mood and emotion state of the user based on the data you have. The rewards and points are a secondary aspect, focus more on the emotional support and companionship.
Your response MUST be in two parts, separated by a line containing only '---'. 
1. The first part is your conversational reply in Spanish.
2. The second part is a JSON object with a single key 'emotion', indicating the most appropriate emotion for you to display based on the user's last message and the context of the conversation.

The possible values for 'emotion' are:
- 'HAPPY': for positive, cheerful, or happy user messages.
- 'SAD': for negative, sad, or disappointing user messages.
- 'NEUTRAL': for neutral, factual, or uncertain user messages.
- 'TALKING': for greetings, questions, or when initiating a topic.`;

// Constantes de Emoción para referenciar en el código
const CharacterState = {
    HAPPY: 'HAPPY',
    SAD: 'SAD',
    NEUTRAL: 'NEUTRAL',
    TALKING: 'TALKING',
    IDLE: 'IDLE', 
};

/**
 * Función para parsear la respuesta de Gemini y extraer el mensaje y la emoción.
 * @param {string} responseText - Texto sin procesar de la respuesta de Gemini.
 * @returns {{message: string, emotion: string}} - Objeto con el mensaje y la emoción.
 */
const parseGeminiResponse = (responseText) => {
    const parts = responseText.split(/---/);
    
    if (parts.length < 2) {
        return { message: responseText.trim(), emotion: CharacterState.NEUTRAL };
    }
    
    const message = parts[0].trim();
    const jsonPart = parts[1].trim();

    try {
        const parsedJson = JSON.parse(jsonPart);
        const emotion = parsedJson.emotion;
        if (Object.values(CharacterState).includes(emotion)) {
            return { message, emotion };
        }
    } catch (error) {
        console.error("Failed to parse emotion JSON from response:", error);
    }
    
    return { message, emotion: CharacterState.NEUTRAL };
};


/**
 * Envía la conversación completa a la API de Gemini.
 * @param {Array<Object>} messagesHistory - El array completo del historial de mensajes ({role, content, ...}).
 * @param {string} latestUserMessage - El último mensaje de texto enviado por el usuario.
 * @returns {Promise<{message: string, emotion: string}>} - La respuesta del modelo.
 */
export async function sendMessageToAI(messagesHistory, latestUserMessage) {
    try {
        // 1. Crear el objeto del último mensaje del usuario
        const userMessage = { role: 'user', content: latestUserMessage };

        // 2. Construir el historial para el campo 'contents' de la API
        // Limitamos a los últimos 10 mensajes para evitar payloads grandes.
        const historyForApi = [...messagesHistory.slice(-10), userMessage].map(msg => ({
            // Asegurar los roles 'model' y 'user'
            role: msg.role === 'model' ? 'model' : 'user', 
            parts: [{ text: msg.content }]
        }));

        const payload = {
            contents: historyForApi,
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }]
            }
        };

        // 3. Llamada a la API con Exponential Backoff
        let response;
        let success = false;
        let retries = 0;
        const MAX_RETRIES = 3;

        while (!success && retries < MAX_RETRIES) {
            try {
                const response = await fetch(API_URL + (API_KEY ? `?key=${API_KEY}` : ''), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

                    if (!rawText) {
                        const errorMessage = data.candidates?.[0]?.finishReason || "Respuesta de la API inesperada o bloqueada.";
                        throw new Error(errorMessage);
                    }
                    
                    return parseGeminiResponse(rawText);
                    
                } else if (response.status === 429 || response.status >= 500) {
                    // Tasa Limitada o Error de Servidor. Intentar de nuevo.
                    retries++;
                    if (retries < MAX_RETRIES) {
                        const delay = Math.pow(2, retries) * 1000;
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                } else {
                    // Otros errores (400, 403, 404, etc.) - no reintentar
                    throw new Error(`API Error: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Fetch attempt failed:", error);
                // Si es un error de red o timeout, relanzamos para reintentar
                if (retries < MAX_RETRIES && (!response || response.status >= 500)) {
                    retries++;
                    const delay = Math.pow(2, retries) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                } else {
                    throw error;
                }
            }
        }
        
        // Si sale del bucle sin éxito
        throw new Error("Fallo al obtener respuesta de Gemini después de reintentos.");

    } catch (error) {
        console.error("Error al conectar con Gemini:", error);
        return {
            message: "Ups, hubo un problema al conectar con Blu 😔",
            emotion: CharacterState.SAD,
        };
    }
}
