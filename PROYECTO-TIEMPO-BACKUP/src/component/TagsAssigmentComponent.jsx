import React from "react";
import { View,Text,TouchableOpacity,Dimensions,StyleSheet } from "react-native";
const { width,height } = Dimensions.get("window");


const TagsAssigmentComponent = ({navigation,tag,index}) =>{

    const isActive = index === 0;

    return(
        <TouchableOpacity style={[styles.container,isActive ? styles.activeContainer:styles.inactiveContainer]} onPress={() => navigation.navigate("TimerStack", {screen: "Timer",params: { selected: tag.assigment }})} activeOpacity={0.7}>
            <View style={styles.titleContent}><Text style={[styles.title,isActive ? styles.activeText:styles.inactiveText]}>{tag.assigment}</Text></View>
            <View style={styles.itemProgressContent}>
                <Text style={[styles.itemProgress,isActive ? styles.activeText:styles.inactiveText]}>Progreso</Text>
                <Text style={[styles.itemProgress, isActive ? styles.activeText:styles.inactiveText]}>{tag.phase}/{tag.phase + 1}</Text>
            </View>
            <View style={styles.progressBarContent}>
                <View style={[styles.progressBar,{width:tag.progress + "%"},isActive ? styles.activeBar:styles.inactiveBar]}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        width:width * 0.65,
        height:height * 0.18,
        backgroundColor:"#6881E5",
        borderRadius:15
    },
    activeContainer: {
        backgroundColor: "#6881E5",
    },
    inactiveContainer: {
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#6881E5",
    },
    titleContent:{
        flex:1,
        justifyContent:"flex-start",
        padding:20
    },
    title:{
        fontSize:18
    },
    activeText: {
        color: "#fff",
    },
    inactiveText: {
        color: "#000",
    },
    itemProgressContent:{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "left",
    },
    itemProgress:{
        marginLeft:20,
        fontSize:14
    },
    progressBarContent:{
        width:"100%",
        justifyContent:"flex-start",
        paddingTop:6,
        paddingBottom:30,
        paddingHorizontal:20
    },
    progressBar:{
        paddingVertical:4,
        borderRadius:15
    },
    activeBar: {
    backgroundColor: "#fff",
    },
    inactiveBar: {
        backgroundColor: "#000",
    },
});

export default TagsAssigmentComponent;
