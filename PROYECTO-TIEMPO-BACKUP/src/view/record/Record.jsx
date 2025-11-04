import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { record } from "../../helper/data";

import HeaderComponent from "../../component/HeaderComponent";
import TagsRecordComponent from "../../component/TagsRecordComponent";

export default function Record({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mi historial</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 1.2 }]}>Fecha</Text>
        <Text style={[styles.headerText, { flex: 1.2 }]}>Tiempo</Text>
        <Text style={[styles.headerText, { flex: 1.2 }]}>Categoría</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Puntos</Text>
        <Text style={{ width: 30 }}></Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {console.log(record)}
        {record.map((tag, index) => (
          <TagsRecordComponent key={index} tag={tag} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f1f1ff",
    alignItems: "center",
  },
  titleContainer: {
    width: "90%",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  tableHeader: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 5,
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
