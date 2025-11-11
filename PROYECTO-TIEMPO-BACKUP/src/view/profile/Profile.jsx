import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../../context/DataContext";

import HeaderComponent from "../../component/HeaderComponent";
import TagsInfoComponent from "../../component/TagsInfoComponent";
import TagsAwardsComponent from "../../component/TagsAwardsComponent";

export default function Profile({ navigation }) {
  const { getCurrentUser } = useData();
  const currentUser = getCurrentUser();
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={{ width: "100%" }}>
            <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
        </View>

        <View style={[styles.titleContainer,{marginVertical: 20,}]}>
            <Text style={[styles.title,{fontSize: 30}]}>Mi perfil</Text>
        </View>

        <View style={styles.headerInfoContent}>
            <View style={styles.imageContent}>
                <Image style={styles.image} source={require("../../assets/Profile/profile-image.png")} />
            </View>
            <View style={styles.infoContent}>
                <Text style={[styles.info,{fontSize:30,fontWeight:"bold"}]}>{currentUser.name}</Text>
                <Text style={[styles.info,{fontSize:14}]}>Legajo: {currentUser.credential}</Text>
                <Text style={[styles.info,{fontSize:14}]}>Equipo: {currentUser.team}</Text>
            </View>
        </View>

        <View style={{alignItems:"center",width:"100%",marginVertical:20}}>
            {/* You may want to show user's awards here instead of profile info */}
            {/* Example: awards.filter(a => a.userId === users[0].id).map(...) */}
        </View>

        <TagsInfoComponent label={"Número de teléfono"} info={currentUser.telephoneNumber} image={require("../../assets/Profile/icon-phone.png")}/>
        <TagsInfoComponent label={"Mail"} info={currentUser.email} image={require("../../assets/Profile/mail-icon.png")}/>
        <TagsInfoComponent label={"Ubicación"} info={currentUser.location} image={require("../../assets/Profile/location-icon.png")}/>
        <TagsInfoComponent label={"Zona horaria"} info={currentUser.timeZone} image={require("../../assets/Profile/zone-icon.png")}/>
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
 headerInfoContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height:160,
    gap:20
},
imageContent: {
    width: 160,
    height: 160,
    alignContent:"center",
    alignItems:"center",
},
image: {
    width: "100%",
    height:"100%",
    resizeMode: "cover",
},
infoContent:{
    flex:1,
    justifyContent:"flex-start"
},
info:{
    color:"#333333"
}
});