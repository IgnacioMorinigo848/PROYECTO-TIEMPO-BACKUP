import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { sendMessageToAI } from "../../helper/chatService";

const CharacterState = {
  HAPPY: "HAPPY",
  SAD: "SAD",
  NEUTRAL: "NEUTRAL",
  TALKING: "TALKING",
  IDLE: "IDLE",
};

const initialMessage = [
  {
    id: 1,
    role: "model",
    content:
      "¡Hola! 😊 Me alegra que te hayas animado a charlar conmigo. ¿Cómo te fue hoy en el trabajo?",
    emotion: CharacterState.TALKING,
  },
];

const note = [
  {
    id: 1,
    role: "model",
    content:
      "¡Hola! 😊 Me alegra que te hayas animado a charlar conmigo. ¿Cómo te fue hoy en el trabajo?",
    emotion: CharacterState.TALKING,
  },
  {
    id: 2,
    role: "user",
    content:
      "Hola Blu… la verdad, fue un día medio intenso. Pasaron varias cosas y necesitaba descargar un poco.",
    emotion: CharacterState.TALKING,
  },
  {
    id: 3,
    role: "model",
    content:
      "Te entiendo, a veces el trabajo puede dejarte con la cabeza a mil. Si querés, contame qué fue lo que más te cansó o te preocupó hoy, así lo vamos desarmando de a poco.",
    emotion: CharacterState.TALKING,
  },
];

const workout = [
  {
    id: 1,
    role: "model",
    content:
      "¡Hola! 👋 Veo que quieres ponerte en movimiento antes de empezar (o terminar) el día. Cuéntame un poco: ¿qué tipo de entrenamiento te gustaría hacer? ¿Algo rápido para activar el cuerpo o algo más completo para liberar el estrés?",
    emotion: CharacterState.TALKING,
  },
];

const ChatBubble = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <View
      key={message.id}
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble,
      ]}
    >
      <Text
        style={[
          styles.text,
          isUser ? styles.userText : styles.botText,
        ]}
      >
        {message.content}
      </Text>
    </View>
  );
};

export default function ChatBot({ navigation, route }) {
  const { list = "initialMessage" } = route.params;

  const getList = () => {
    if (list === "note") return note;
    if (list === "workout") return workout;
    return initialMessage; // siempre array
  };

  const [messages, setMessages] = useState(getList());
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [characterState, setCharacterState] = useState(
    initialMessage[0].emotion
  );

  const scrollRef = useRef(null);

  const handleSend = async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isLoading) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);
    setCharacterState(CharacterState.TALKING);

    try {
      const response = await sendMessageToAI(
        [...messages, userMsg],
        trimmedInput
      );

      const newEmotion =
        response.emotion || CharacterState.NEUTRAL;

      const botMsg = {
        id: Date.now() + 1,
        role: "model",
        content: response.message,
        emotion: newEmotion,
      };

      setMessages((prev) => [...prev, botMsg]);
      setCharacterState(newEmotion);
    } catch (error) {
      console.error("Error en handleSend:", error);

      const errorMessage = {
        id: Date.now() + 1,
        role: "model",
        content:
          "Ups, algo salió mal. Por favor, intenta de nuevo más tarde.",
        emotion: CharacterState.SAD,
      };

      setMessages((prev) => [...prev, errorMessage]);
      setCharacterState(CharacterState.SAD);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons
            name="chevron-back"
            size={22}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
          <Image
            source={require("../../assets/Emote/happy.png")}
            style={styles.avatar}
          />
          <Text style={styles.headerTitle}>Blu</Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <View style={styles.loadingIndicatorContainer}>
            <ActivityIndicator color="#7B61FF" size="small" />
            <Text style={styles.loadingText}>
              Blu está pensando...
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          editable={!isLoading}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          disabled={isLoading || !inputText.trim()}
        >
          <Ionicons
            name="paper-plane"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1FF",
  },
  header: {
    backgroundColor: "#7B61FF",
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  contentContainer: {
    backgroundColor: "#EEF1FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  bubble: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    maxWidth: "80%",
  },
  botBubble: {
    backgroundColor: "#DDE2FF",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: "#ACCBF8",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  botText: {
    color: "#333",
  },
  userText: {
    color: "#fff",
  },
  loadingIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
  },
  loadingText: {
    color: "#999",
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    paddingHorizontal: 15,
    shadowColor: "transparent",
    elevation: 0,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
  },
  sendButton: {
    backgroundColor: "#CC68E5",
    padding: 10,
    borderRadius: 20,
    marginLeft: 8,
  },
});
