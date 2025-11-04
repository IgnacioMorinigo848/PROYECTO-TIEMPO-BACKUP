import React from "react";
import { View,Text,StyleSheet } from "react-native";

const TagsAlertComponent = ({navigation,tag}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.dateContent}><Text style={styles.date}>{tag.date}</Text></View>
            <View style={styles.messageContent}><Text style={styles.message}>{tag.message}</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:60,
        backgroundColor:"#d3d9f5ff",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"center",
        borderWidth: 2,
        borderColor: "#6881E5",
        borderRadius: 8,
        padding: 10,
    },
    dateContent:{
        width:"30%",
        justifyContent:"flex-start"
    },
    messageContent:{
        width:"70%",
        justifyContent:"flex-start"
    },
    message:{
        color:"#333333",
        fontSize:16
    },
    date:{
        textAlign:"center",
        color:"#979797",
        fontSize:14
    },
});

export default TagsAlertComponent;