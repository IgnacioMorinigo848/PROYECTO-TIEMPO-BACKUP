import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";

const DonutChart = () => {
  const data = [
    { label: "Redes", value: 15, color: "#005CFF" },
    { label: "Mobile", value: 4, color: "#FF8A00" },
    { label: "Almuerzo", value: 25, color: "#21D07A" },
    { label: "Internet", value: 40, color: "#FFD83D" },
  ];

  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  const { width } = Dimensions.get("window");
  const chartSize = width * 0.5; 
  const radius = chartSize / 2 - 10;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <TouchableOpacity><Text style={styles.headerItem}>{`<`}</Text></TouchableOpacity>
        <Text style={styles.headerYear}>2025</Text>
       <TouchableOpacity><Text style={styles.headerItem}>{`>`}</Text></TouchableOpacity>
      </View>

      <View style={styles.chartWrapper}>
        <Svg width={chartSize} height={chartSize} style={{ transform: [{ rotate: "-90deg" }] }}>
          {data.map((item, index) => {
            const percentage = item.value / total;
            const strokeDasharray = circumference * percentage;
            const circle = (
              <Circle
                key={index}
                cx={chartSize / 2}
                cy={chartSize / 2}
                r={radius}
                stroke={item.color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={`${strokeDasharray} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
              />
            );
            offset += strokeDasharray;
            return circle;
          })}
        </Svg>

        <View style={styles.centerText}>
          <Text style={styles.hours}>{total} hs.</Text>
          <Text style={styles.label}>De distracciones</Text>
        </View>
      </View>

      <View style={styles.legend}>
        {data.map((item, i) => (
          <View key={i} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.label}</Text>
            <Text style={styles.legendValue}>{item.value}hs.</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  headerItem: {
    fontSize: 20,
    color: "#000",
  },
  headerYear: {
    fontSize: 18,
    fontWeight: "600",
  },
  chartWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    position: "absolute",
    alignItems: "center",
  },
  hours: {
    fontSize: 24,
    fontWeight: "700",
  },
  label: {
    color: "#777",
  },
  legend: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 6,
    width: "45%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    color: "#333",
    marginRight: 6,
  },
  legendValue: {
    fontWeight: "600",
    color: "#333",
  },
});

export default DonutChart;
