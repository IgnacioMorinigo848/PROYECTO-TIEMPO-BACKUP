import React from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

const AuthButtonComponent = ({value="Ingresar",backgroundColor="#979797",onPress}) =>{
    return(
        <View style={styles.content}>
            <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text,{color:"#fff"}]}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthButtonComponent;

const styles = StyleSheet.create({
    content:{
        width:"100%",
        alignItems:"center"
    },
    button:{
        width:"100%",
        alignItems:"center",
        padding:14,
        borderRadius:8
    },
    text:{
        fontSize:14,
        fontWeight:"bold",
        textAlign:"center"
    }
});