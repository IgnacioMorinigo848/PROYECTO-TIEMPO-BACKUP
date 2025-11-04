import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../../helper/data";
import HeaderComponent from "../../component/HeaderComponent";

const Timer = ({ navigation, route }) => {
  const { selected,index } = route.params;

  console.log(index)

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selected);
  const [items, setItems] = useState(
    categories.map((cat) => ({
      label: cat.name,
      value: cat.name,
    }))
  );

  // Estados del temporizador
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef(null);

  // Manejar el temporizador
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hrs, mins, secs].map((v) => String(v).padStart(2, "0")).join(":");
  };

  const handleStop = () => {
    if (time !== 0){
      setIsRunning(false);
      navigation.navigate("Record",{time});
      setTime(0);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} />
      </View>

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timer</Text>
      </View>

      {/* Selector de categoría */}
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Seleccionar categoría"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listItemLabelStyle={styles.listItemLabel}
          arrowIconStyle={{ tintColor: "#7A42F4" }}
        />
      </View>

      {/* Reloj */}
      <View style={styles.timerContainer}>
        <View style={styles.circle}>
          <Text style={styles.timeText}>{formatTime(time)}</Text>
        </View>

        {/* Controles */}
        <View style={styles.controls}>
          {/* Mute */}
          <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
            <Ionicons
              name={isMuted ? "volume-mute-outline" : "volume-high-outline"}
              size={30}
              color="#fff"
            />
          </TouchableOpacity>

          {/* Play / Pause */}
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => setIsRunning(!isRunning)}
          >
            <Ionicons
              name={isRunning ? "pause" : "play"}
              size={28}
              color="#fff"
            />
          </TouchableOpacity>

          {/* Stop */}
          <TouchableOpacity onPress={handleStop}>
            <View style={styles.stopButton}>
              <Ionicons name="stop" size={22} color="#6868E5" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6868E5",
  },
  titleContainer: {
    width: "100%",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
  },
  dropdownContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
  },
  listItemLabel: {
    fontSize: 16,
    color: "#000",
  },
  timerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "#fff",
    borderStyle: "dotted",
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 60,
  },
  playButton: {
    backgroundColor: "#7A42F4",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  stopButton: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Timer;
