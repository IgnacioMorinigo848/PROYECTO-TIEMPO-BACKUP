import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TagsAwardsComponent = ({ tag, change = false,width="45%" }) => {
  return (
    <>
      {!change ? (
        <View style={[styles.container,{width:width}]}>
         
          <View style={styles.categorie}>
            <Text style={styles.textCategorie}>{tag.categorie}</Text>
          </View>

          <Text style={styles.description}>{tag.description}</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.pointsNumber}>{tag.points}</Text>
            <Text style={[styles.pointsLabel, { marginLeft: 3 }]}>Puntos</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Canjear</Text>
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TagsAwardsComponent;
