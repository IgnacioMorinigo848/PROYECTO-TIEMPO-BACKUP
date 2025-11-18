import React from "react";
import { View,TouchableOpacity,Text,ScrollView,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../component/HeaderComponent";

import TagsWeeklyProgress from "../../component/TagsWeeklyProgress";
import { habits } from "../../helper/db";

export default function Habits({navigation}){
  
    return(
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
            </View>
             <View style={[styles.titleContainer,{marginVertical: 20,}]}>
                <Text style={[styles.title,{fontSize: 30}]}>Aprender buenos hábitos</Text>
            </View>
            <ScrollView
                style={{ width: "90%", alignSelf: "center" }}
            >
                {habits.map((tag,index) => (
                <TagsWeeklyProgress onPress={()=> navigation.navigate("HabitDetail",{tag:tag})} tag={tag} key={index} />
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%"
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
});