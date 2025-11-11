import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import TagsAlertComponent from "./TagsAlertComponent";
import { alerts } from "../helper/db";

const SightComponent = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        {/* Fondo que cierra el modal al tocar fuera */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backgroundTouchable} />
        </TouchableWithoutFeedback>

        {/* Contenido del modal */}
        <View style={styles.modalContent}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
          >
            {alerts.map((tag, index) => (
              <TagsAlertComponent key={index} tag={tag} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
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
    width: "90%",
    maxHeight: "34%",
    paddingVertical: 20,
    marginTop:150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
});

export default SightComponent;
