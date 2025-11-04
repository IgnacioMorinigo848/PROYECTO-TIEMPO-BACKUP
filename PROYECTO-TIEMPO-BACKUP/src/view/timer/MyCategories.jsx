import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../helper/data";

import HeaderComponent from "../../component/HeaderComponent";
import TagsComponent from "../../component/TagsComponent";

const MyCategories = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.titleContainer, { alignItems: "flex-start" }]}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>Mis categorías</Text>
          <Text style={{ fontSize: 16, color: "#000" }}>
            Elegí la categoría a la que corresponde el tiempo que estás por tomarte.
          </Text>
        </View>

        <View style={styles.tagsContainer}>
          {categories.map((tag,index) => (
            <TagsComponent key={index} change={true} tag={tag} navigation={navigation} selected={tag.name} index={index}/>
          ))}
        </View>

        <TouchableOpacity style={[styles.titleContainer, { alignItems: "flex-end" }]}>
          <Text style={{ fontSize: 18, color: "#CC68E5", fontWeight: "bold" }}>Crear nueva</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  tagsContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
});

export default MyCategories;
