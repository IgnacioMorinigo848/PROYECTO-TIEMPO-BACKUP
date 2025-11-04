import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { sendMessageToAI } from "../helper/chatService";

const CharacterState = {
  HAPPY: "HAPPY",
  SAD: "SAD",
  NEUTRAL: "NEUTRAL",
  TALKING: "TALKING",
  IDLE: "IDLE",
};

const initialMessage = {
  id: 1,
  role: "model",
  content: "¡Hola! Soy Blu. ¿Cómo te sentís hoy?",
  emotion: CharacterState.TALKING,
};

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
      <Text style={[styles.text, isUser ? styles.userText : styles.botText]}>
        {message.content}
      </Text>
    </View>
  );
};

const ChatBotComponent = ({ visible, onClose, onEmotionChange }) => {
  const [messages, setMessages] = useState([initialMessage]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [characterState, setCharacterState] = useState(initialMessage.emotion);

  const scrollRef = useRef(null);

  const handleSend = async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isLoading) return;

    const userMsg = { id: Date.now(), role: "user", content: trimmedInput };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);
    setCharacterState(CharacterState.TALKING);
    onEmotionChange(CharacterState.TALKING);

    try {
      const response = await sendMessageToAI([...messages, userMsg], trimmedInput);
      const newEmotion = response.emotion || CharacterState.NEUTRAL;

      const botMsg = {
        id: Date.now() + 1,
        role: "model",
        content: response.message,
        emotion: newEmotion,
      };

      setMessages((prev) => [...prev, botMsg]);
      setCharacterState(newEmotion);
      onEmotionChange(newEmotion);
    } catch (error) {
      console.error("Error en handleSend:", error);
      const errorMessage = {
        id: Date.now() + 1,
        role: "model",
        content: "Ups, algo salió mal. Por favor, intenta de nuevo más tarde.",
        emotion: CharacterState.SAD,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setCharacterState(CharacterState.SAD);
      onEmotionChange(CharacterState.SAD);
    } finally {
      setIsLoading(false);
    }
  };


  return visible && (
      <View style={styles.overlay}>

        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.backgroundTouchable} />
        </TouchableWithoutFeedback>
        

        <View style={styles.modalContent}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <View style={styles.loadingIndicatorContainer}>
                <ActivityIndicator color="#60A5FA" size="small" />
                <Text style={styles.loadingText}>Blu está pensando...</Text>
              </View>
            )}
          </ScrollView>

          <View style={styles.inputContent}>
            <TextInput
              style={styles.input}
              placeholder={isLoading ? "Esperando respuesta..." : "Escribe tu mensaje..."}
              placeholderTextColor="#999"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
              editable={!isLoading}
            />
            <TouchableOpacity
              style={[styles.icon, (isLoading || !inputText.trim()) && styles.disabledIcon]}
              onPress={handleSend}
              disabled={isLoading || !inputText.trim()}
            >
              <Ionicons
                name="arrow-up-circle"
                size={32}
                color={isLoading || !inputText.trim() ? "#ccc" : "#60A5FA"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(99, 99, 99, 0.3)",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 50, // Chat
},

  backgroundTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "95%",
    height: 400,
    paddingVertical: 20,
    marginTop: 100,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    justifyContent: "space-between",
    marginBottom: 60,
  },
  contentContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  bubble: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    maxWidth: "80%",
  },
  botBubble: {
    backgroundColor: "#7B61FF",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: "#EDEAFD",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  botText: {
    color: "#fff",
  },
  userText: {
    color: "#333",
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
});

export default ChatBotComponent;
