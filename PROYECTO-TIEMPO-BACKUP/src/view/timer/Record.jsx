import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,ImageBackground,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../../context/DataContext";

export default function Record ({navigation,route}){
    const { time, duration, categoryId, habitId, categoryTitle } = route.params;
    const { createTimeRecord, calculatePoints } = useData();
    const [pointsEarned, setPointsEarned] = useState(0);
    const [recordCreated, setRecordCreated] = useState(false);

    useEffect(() => {
        if (!recordCreated && categoryId && habitId) {
            const points = calculatePoints(duration, categoryId);
            setPointsEarned(points);
            
            // Create the time record
            const newRecord = createTimeRecord(
                categoryId,
                habitId,
                duration,
                `Sesión de ${categoryTitle || 'actividad'}`
            );
            
            setRecordCreated(true);
            console.log('Record created:', newRecord);
        }
    }, [categoryId, habitId, duration, createTimeRecord, calculatePoints, recordCreated, categoryTitle]);

    const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hrs, mins, secs].map((v) => String(v).padStart(2, "0")).join(":");
  };

    return(
          <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require("../../assets/Timer/recordBackground.png")}
                style={styles.background}
                resizeMode="cover"
            >
            <View style={styles.container}>
                <View style={styles.clock}>
                    <Text style={styles.timeText}>{formatTime(time)}</Text>
                </View>
                <View style={{alignItems:"center",width:"80%"}}>
                    <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",color:"#333333", paddingBottom:15,borderBottomWidth:3,borderEndColor:"#333333",}}>Tiempo registrado con éxito</Text>
                </View>
                <View style={{alignItems:"center",width:"80%",marginTop:15}}>
                    <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"#333333"}}>Ganaste {pointsEarned} puntos</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Home")}>
                    <Text style={{color:"#fff",fontSize:14}}> Volver al inicio</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
          </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height:400
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:280,
    width:"100%"
  },
  clock:{
    width:"100%",
    alignItems:"center",
    marginVertical:20
  },
   timeText: {
    color: "#6868E5",
    fontSize: 36,
    fontWeight: "bold",
  },
  btn:{width:"85%",alignItems:"center",backgroundColor:"#6868E5",borderRadius:15,paddingVertical:15,marginTop:35}

});