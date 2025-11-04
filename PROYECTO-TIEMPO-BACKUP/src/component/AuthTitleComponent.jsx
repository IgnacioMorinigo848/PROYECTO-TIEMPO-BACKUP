import React from "react";
import { View,Text,StyleSheet } from "react-native";

const AuthTitleComponent = ({}) =>{
    return(
        <View style={styles.container}><Text style={styles.title}>Bienvenido/a</Text></View>
    );

};

export default AuthTitleComponent;

const styles = StyleSheet.create({
    container:{
        width:"80%",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#000"
    },
    title:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        paddingBottom:10
    }
});