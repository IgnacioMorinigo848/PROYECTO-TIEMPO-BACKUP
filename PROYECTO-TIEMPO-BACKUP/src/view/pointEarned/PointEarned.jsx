import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { awards,profile } from "../../helper/data";

import HeaderComponent from "../../component/HeaderComponent";
import TagsAwardsComponent from "../../component/TagsAwardsComponent";

export default function PointEarned({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
      </View>

      <View style={[styles.titleContainer,{marginVertical: 20,}]}>
        <Text style={[styles.title,{fontSize: 24}]}>Mis puntos</Text>
      </View>

      <View style={{alignItems:"center",width:"100%"}}>
        <TagsAwardsComponent tag={profile} change={true} width={"95%"} />
      </View>

      <View style={[styles.titleContainer,{marginVertical: 20}]}>
        <Text style={[styles.title,{fontSize: 20}]}>Premios</Text>
      </View>

    <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {awards.map((tag, index) => (
          <TagsAwardsComponent key={index} tag={tag} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f1f1ff",
  },
  titleContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    textAlign:"left"
  },
   scrollContent: {
    paddingBottom: 70,
    width: "100%",
    height:"auto",
    flexDirection: "row",  
    flexWrap: "wrap",       
    justifyContent: "center", 
    gap:20
  },
});