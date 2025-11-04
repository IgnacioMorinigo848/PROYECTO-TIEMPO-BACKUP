import React from "react";
import { View,TextInput,Text,StyleSheet } from "react-native";

const AuthInputComponent = ({placeholder,value,onChange,error = ""}) =>{
    return(
        <>
        <View style={styles.inputContent}>
            <TextInput style={[styles.input,error === "" ? styles.inputInactive:styles.inputActive]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContent:{
       width:"100%"
    },
    input:{
        width:"100%",
        height:55,
        borderWidth:2,
        borderRadius:4,
        fontSize:16,
        color:"#5A5A5A",
        paddingHorizontal: 20,
    },
    inputActive:{
        borderColor:"#BF1919"
    },
    inputInactive:{
        borderColor:"#979797"
    },
    error:{
        color:"#BF1919",
        fontSize:12
    }
});

export default AuthInputComponent;

