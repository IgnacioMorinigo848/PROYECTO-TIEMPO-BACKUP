import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-chart-kit";

import StatisticsCircleComponent from "../../component/StatisticsCircleComponent";
import HeaderComponent from "../../component/HeaderComponent";

const screenWidth = Dimensions.get("window").width;

export default function Statistics({ navigation }) {

  const moodData = {
    labels: ["Frustrado", "Triste", "Indiferente", "Feliz", "Motivado"],
    datasets: [
      {
        data: [8, 4, 6, 2, 8],
        colors: [
          (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
          (opacity = 1) => `rgba(54, 162, 235, ${opacity})`,
          (opacity = 1) => `rgba(255, 206, 86, ${opacity})`,
          (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
          (opacity = 1) => `rgba(153, 102, 255, ${opacity})`,
        ],
      },
    ],
  };

  const weekData = {
    labels: ["L", "M", "M", "J", "V"],
    datasets: [
      {
        data: [7, 2, 3, 1, 3],
        colors: [
          (opacity = 1) => `rgba(104, 129, 229, ${opacity})`,
          (opacity = 1) => `rgba(104, 129, 229, ${opacity})`,
          (opacity = 1) => `rgba(104, 129, 229, ${opacity})`,
          (opacity = 1) => `rgba(104, 129, 229, ${opacity})`,
          (opacity = 1) => `rgba(104, 129, 229, ${opacity})`,
        ],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}> 

      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
      </View>

      <View style={[styles.titleContainer,{marginVertical: 20}]}>
        <Text style={[styles.title,{fontSize: 30}]}>Mis estadísticas</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <StatisticsCircleComponent/>

        {/* ---- Gráfico de estados de ánimo ---- */}
        <View style={styles.card}>
          <Text style={styles.title}>Junio 2025</Text>
          <BarChart
            data={moodData}
            width={screenWidth - 40}
            height={220}
            fromZero
            flatColor={true}
            withCustomBarColorFromData={true}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              labelColor: () => "#555",
            }}
            style={styles.chart}
          />
        </View>

        {/* ---- Gráfico horizontal semanal ---- */}
        <View style={styles.card}>
          <Text style={styles.title}>Tu progreso semanal</Text>
          <BarChart
            data={weekData}
            width={screenWidth - 40}
            height={200}
            fromZero
            showValuesOnTopOfBars={false}
            withCustomBarColorFromData={true} // importante para barras horizontales
            flatColor={true}
            horizontal
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(104, 129, 229, ${opacity})`, // azul
              labelColor: () => "#555",
              barPercentage: 0.7,
            }}
            withHorizontalLabels={false}
            verticalLabelRotation={0}
            withInnerLines={false}
          />
          <Text style={styles.footerText}>Descanso</Text>
        </View>

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
    justifyContent:"flex-start",
    width:"100%",
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
  },
  scrollContent: {
    paddingBottom: 40,
    width:"90%"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  chart: {
    borderRadius: 16,
  },
  footerText: {
    color: "#555",
    marginTop: 5,
    alignSelf: "flex-end",
    marginRight: 10,
    fontSize: 13,
  },
});
