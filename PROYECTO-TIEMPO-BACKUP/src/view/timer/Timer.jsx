import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../component/HeaderComponent";
import TagsWeeklyProgress from "../../component/TagsWeeklyProgress";

const Timer = ({ navigation, route }) => {
  const { tag } = route.params;
 
  // Estados del temporizador
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
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
     
      <View style={{ width: "100%" }}>
        <HeaderComponent navigation={navigation} change={true} />
      </View>

      <View style={{ width: "90%", alignSelf: "center" }}>
        <TagsWeeklyProgress tag={tag} active={true} key={tag} />
      </View>

      <View style={styles.timerContainer}>
        <View style={styles.content}>
          <Text style={styles.timeText}>{formatTime(time)}</Text>
        </View>

        <TouchableOpacity style={styles.btnContent} onPress={()=> {!isRunning ? setIsRunning(!isRunning) : handleStop()}}>
          <Text style={styles.btn}>{ isRunning ? "Finalizar" : "Comerzar"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#909fddff",
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
  timerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content:{
    width:"60%",
    alignItems: "center",
    borderRadius:15,
    paddingVertical:10,
    backgroundColor:"#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },
  timeText: {
    color: "#333333",
    fontSize: 52,
    fontWeight: "bold",
  },
 btnContent:{
    width:"90%",
    alignItems:"center",
    backgroundColor:"#6868E5",
    paddingVertical:10,
    borderRadius:10,
    marginTop:25
  },
  btn:{
    fontSize:16,
    color:"#fff",
    textAlign:"center"
  }
});

export default Timer;
