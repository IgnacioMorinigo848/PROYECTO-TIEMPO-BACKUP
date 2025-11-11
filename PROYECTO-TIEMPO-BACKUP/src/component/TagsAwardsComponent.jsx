import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from "react-native";
import { useData } from "../context/DataContext";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TagsAwardsComponent = ({ tag, change = false, width="45%" }) => {
  const { getCurrentUser, redeemAward } = useData();
  const currentUser = getCurrentUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRedeem = () => {
    const result = redeemAward(tag.id);
    setModalMessage(result.message);
    setIsSuccess(result.success);
    setModalVisible(true);
  };

  const canAfford = currentUser.points >= tag.points;

  return (
    <>
      {!change ? (
        <View style={[styles.container,{width:width}]}>
         
          <View style={styles.categorie}>
            <Text style={styles.textCategorie}>{tag.category}</Text>
          </View>

          <Text style={styles.description}>{tag.description}</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.pointsNumber}>{tag.points}</Text>
            <Text style={[styles.pointsLabel, { marginLeft: 3 }]}>Puntos</Text>
          </View>

          <TouchableOpacity 
            style={[styles.button, !canAfford && styles.buttonDisabled]}
            onPress={handleRedeem}
            disabled={!canAfford}
          >
            <Text style={styles.buttonText}>
              {canAfford ? "Canjear" : "Puntos insuficientes"}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
       <View style={[styles.container,{width:width}]}>
            <View style={{alignItems:"center"}}>
              <Text style={[styles.pointsNumber,{textAlign:"center"}]}>{tag.points}</Text>
              <Text style={[styles.pointsLabel, { marginLeft: 3,textAlign:"center" }]}>Puntos</Text>
            </View>
        </View>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {isSuccess ? "¡Felicitaciones!" : "Oops!"}
            </Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity 
              style={[styles.modalButton, isSuccess ? styles.modalButtonSuccess : styles.modalButtonError]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6881E5",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  categorie: {
    alignSelf: "flex-start",
  },
  textCategorie: {
    backgroundColor: "#EBC7F4",
    color: "#A23DCB",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 11,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  pointsRow: {
    flexDirection: "row", 
    alignItems: "flex-end",
    justifyContent: "center",
  },
  pointsNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  pointsLabel: {
    fontSize: 12,
    color: "#333",
  },
  button: {
    width: "90%",
    backgroundColor: "#6C5CE7",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonDisabled: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: SCREEN_WIDTH * 0.8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002055",
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  modalButton: {
    width: "100%",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  modalButtonSuccess: {
    backgroundColor: "#6BBF5A",
  },
  modalButtonError: {
    backgroundColor: "#E76E6E",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default TagsAwardsComponent;
