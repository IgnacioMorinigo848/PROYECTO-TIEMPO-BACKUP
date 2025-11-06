import React from "react";
import { View,TouchableOpacity,Text,Image,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../component/HeaderComponent";

export default function HabitDetail({navigation,route}){

    const { title,detail } = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
            </View>
             <View style={[styles.titleContainer,{marginVertical: 20,}]}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.iconContent}> 
                        <Image style={styles.icon} source={require("../../assets/Emote/confused.png")}/>
                    </View>
                </View>
            </View>
            <View style={styles.detailContent}>
                {detail && <Text style={styles.detail}>{detail}</Text>}
            </View>
            <TouchableOpacity style={styles.btnContent}>
                <Text style={styles.btn}>Quiero saber más</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center"
    },
    titleContainer: {
        justifyContent:"center",
        width:"100%",
        paddingHorizontal: 25,
        flexDirection: "row",
  },
  titleContent:{
    width:"70%"
  },
  title: {
        fontWeight: "bold",
        color: "#000",
        fontSize:30
  },
  iconContainer:{
    width:"30%",
    textAlign:"center"
  },
  iconContent:{
    width:100,
    height:100,
  },
  icon:{
    width:"100%",
    height:"100%",
    resizeMode: "contain",
  },
  detailContent:{
    width:"90%",
    alignItems:"center"
  },
  detail:{
    textAlign:"justify",
    fontSize:16
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