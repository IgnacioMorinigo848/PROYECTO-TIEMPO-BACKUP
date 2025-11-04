import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const TagsWeeklyProgress = ({ navigation, tag, detail="" }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={ ()=> detail ? navigation.navigate(tag.route,{detail}) : navigation.navigate(tag.route)}>
      <View style={styles.iconContent}>
        <Image style={styles.icon} source={tag.icon} resizeMode="contain" />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.title}>{tag.title}</Text>
        <Text style={styles.subtitle}>{tag.subtitle}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={30} color="#3E73C3"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.09,
    backgroundColor: "#ebf0faff",
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },
  iconContent: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoContent: {
    width:"80%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    marginTop: 2,
  },
});

export default TagsWeeklyProgress;
