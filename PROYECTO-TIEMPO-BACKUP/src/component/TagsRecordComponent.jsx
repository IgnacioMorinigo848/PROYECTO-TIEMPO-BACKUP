import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TagsRecordComponent = ({ tag }) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1.2 }]}>{tag.date}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{tag.time}</Text>
      <Text
        style={[styles.cell, { flex: 1.5 }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {tag.categorie}
      </Text>
      <Text style={[styles.cell, { flex: 0.8 }]}>{tag.points}</Text>

      <TouchableOpacity
        onPress={() => console.log("Eliminar")}
        style={styles.iconButton}
      >
        <MaterialCommunityIcons name="delete-outline" size={20} color="#D02F44" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6881E5",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    elevation: 1,
  },
  cell: {
    fontSize: 13,
    color: "#333",
  },
  iconButton: {
    width: 30,
    alignItems: "center",
  },
});

export default TagsRecordComponent;
