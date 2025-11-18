import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-chart-kit";

import StatisticsCircleComponent from "../../component/StatisticsCircleComponent";
import HeaderComponent from "../../component/HeaderComponent";
import { useData } from "../../context/DataContext";

const screenWidth = Dimensions.get("window").width;

export default function Statistics({ navigation }) {
  const [period, setPeriod] = useState("weekly"); // daily, weekly, monthly
  const { getCurrentUser, getUserMoodRecordsData, getUserTimeRecordsData, moods, categories } = useData();
  
  const currentUser = getCurrentUser();
  const moodRecordsData = getUserMoodRecordsData();
  const timeRecordsData = getUserTimeRecordsData();

  // Procesar datos de mood según el periodo
  const moodData = useMemo(() => {
    const moodCounts = {};
    moods.forEach(mood => {
      moodCounts[mood.id] = 0;
    });

    const now = new Date();
    const todayString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    moodRecordsData.forEach(record => {
      let includeRecord = false;

      if (period === "daily") {
        // Comparar strings de fecha directamente
        includeRecord = record.date === todayString;
      } else if (period === "weekly") {
        const recordDate = new Date(record.date);
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        includeRecord = recordDate >= weekAgo && recordDate <= now;
      } else if (period === "monthly") {
        const recordDate = new Date(record.date);
        includeRecord = 
          recordDate.getMonth() === now.getMonth() &&
          recordDate.getFullYear() === now.getFullYear();
      }

      if (includeRecord && moodCounts[record.moodId] !== undefined) {
        moodCounts[record.moodId]++;
      }
    });

    const labels = moods.map(m => m.label);
    const data = moods.map(m => moodCounts[m.id]);
    const colors = moods.map(m => (opacity = 1) => m.color);

    return {
      labels,
      datasets: [{
        data: data.length > 0 && data.some(d => d > 0) ? data : [0.1],
        colors,
      }],
    };
  }, [period, moodRecordsData, moods]);

  // Procesar datos de actividades por categoría
  const activityData = useMemo(() => {
    const categoryCounts = {};
    categories.forEach(cat => {
      categoryCounts[cat.id] = 0;
    });

    const now = new Date();
    const todayString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    timeRecordsData.forEach(record => {
      let includeRecord = false;

      if (period === "daily") {
        // Comparar strings de fecha directamente
        includeRecord = record.date === todayString;
      } else if (period === "weekly") {
        const recordDate = new Date(record.date);
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        includeRecord = recordDate >= weekAgo && recordDate <= now;
      } else if (period === "monthly") {
        const recordDate = new Date(record.date);
        includeRecord = 
          recordDate.getMonth() === now.getMonth() &&
          recordDate.getFullYear() === now.getFullYear();
      }

      if (includeRecord && categoryCounts[record.categoryId] !== undefined) {
        categoryCounts[record.categoryId]++;
      }
    });

    const labels = categories.map(c => c.title.substring(0, 10));
    const data = categories.map(c => categoryCounts[c.id]);
    const colors = categories.map(c => (opacity = 1) => c.color);

    return {
      labels,
      datasets: [{
        data: data.length > 0 && data.some(d => d > 0) ? data : [0.1],
        colors,
      }],
    };
  }, [period, timeRecordsData, categories]);

  // Procesar datos de tiempo por categoría (para gráfico circular)
  const timeByCategory = useMemo(() => {
    const categoryTimes = {};
    categories.forEach(cat => {
      categoryTimes[cat.id] = { duration: 0, title: cat.title, color: cat.color };
    });

    const now = new Date();
    const todayString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    timeRecordsData.forEach(record => {
      let includeRecord = false;

      if (period === "daily") {
        // Comparar strings de fecha directamente
        includeRecord = record.date === todayString;
      } else if (period === "weekly") {
        const recordDate = new Date(record.date);
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        includeRecord = recordDate >= weekAgo && recordDate <= now;
      } else if (period === "monthly") {
        const recordDate = new Date(record.date);
        includeRecord = 
          recordDate.getMonth() === now.getMonth() &&
          recordDate.getFullYear() === now.getFullYear();
      }

      if (includeRecord && categoryTimes[record.categoryId]) {
        // Convertir duración de segundos a horas
        categoryTimes[record.categoryId].duration += record.duration / 3600;
      }
    });

    // Filtrar solo categorías con tiempo > 0
    const chartData = Object.values(categoryTimes)
      .filter(cat => cat.duration > 0)
      .map(cat => ({
        label: cat.title.substring(0, 10),
        value: parseFloat(cat.duration.toFixed(2)),
        color: cat.color,
      }));

    return chartData;
  }, [period, timeRecordsData, categories]);

  const periodTitle = period === "daily" ? "Hoy" : period === "weekly" ? "Esta semana" : "Este mes";

  return (
    <SafeAreaView style={styles.safeArea}> 

      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
      </View>

      {/* Título fuera del scroll, arriba del filtro */}
      <View style={[styles.titleContainer,{marginTop: 20, marginBottom: 10}]}> 
        <Text style={[styles.title,{fontSize: 30}]}>Mis estadísticas</Text>
      </View>

      {/* Selector de periodo debajo del título */}
      <View style={[styles.periodSelector, {marginBottom: 20, width: '90%', alignSelf: 'center'}]}>
        <TouchableOpacity 
          style={[styles.periodButton, period === "daily" && styles.periodButtonActive]}
          onPress={() => setPeriod("daily")}
          activeOpacity={0.7}
        >
          <Text style={[styles.periodButtonText, period === "daily" && styles.periodButtonTextActive]}>
            Diario
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.periodButton, period === "weekly" && styles.periodButtonActive]}
          onPress={() => setPeriod("weekly")}
          activeOpacity={0.7}
        >
          <Text style={[styles.periodButtonText, period === "weekly" && styles.periodButtonTextActive]}>
            Semanal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.periodButton, period === "monthly" && styles.periodButtonActive]}
          onPress={() => setPeriod("monthly")}
          activeOpacity={0.7}
        >
          <Text style={[styles.periodButtonText, period === "monthly" && styles.periodButtonTextActive]}>
            Mensual
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Gráfico circular solo si hay datos */}
        {Array.isArray(timeByCategory) && timeByCategory.length > 0 ? (
          <StatisticsCircleComponent data={timeByCategory} period={period} />
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>No hay datos de tiempo por categoría</Text>
          </View>
        )}

        {/* ---- Gráfico de estados de ánimo ---- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estados de ánimo - {periodTitle}</Text>
          {moodData.datasets[0].data.every(d => d === 0 || d === 0.1) ? (
            <Text style={{color: '#888', marginVertical: 20}}>No hay datos disponibles</Text>
          ) : (
            <BarChart
              data={moodData}
              width={screenWidth - 60}
              height={220}
              fromZero
              flatColor={true}
              withCustomBarColorFromData={true}
              segments={Math.max(...moodData.datasets[0].data) > 4 ? 4 : Math.max(...moodData.datasets[0].data)}
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                labelColor: () => "#555",
              }}
              style={styles.chart}
            />
          )}
        </View>

        {/* ---- Gráfico de actividades ---- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actividades - {periodTitle}</Text>
          {activityData.datasets[0].data.every(d => d === 0 || d === 0.1) ? (
            <Text style={{color: '#888', marginVertical: 20}}>No hay datos disponibles</Text>
          ) : (
            <BarChart
              data={activityData}
              width={screenWidth - 60}
              height={220}
              fromZero
              flatColor={true}
              withCustomBarColorFromData={true}
              segments={Math.max(...activityData.datasets[0].data) > 4 ? 4 : Math.max(...activityData.datasets[0].data)}
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                labelColor: () => "#555",
              }}
              style={styles.chart}
            />
          )}
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
  periodSelector: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    gap: 8,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  periodButtonActive: {
    backgroundColor: "#6C5CE7",
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  periodButtonTextActive: {
    color: "#fff",
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  chart: {
    borderRadius: 16,
  },
});
