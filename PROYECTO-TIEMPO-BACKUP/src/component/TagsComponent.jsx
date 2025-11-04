import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const TagsComponent = ({ navigation, change = false, active =false,  tag,selected=null, index}) => {
    return (
        <View style={styles.container}>
           
            <View style={styles.imageContent}>
                <Image style={styles.image} source={tag.image} />
            </View>

          
            { !change ?
                <TouchableOpacity style={[styles.nameContent,{backgroundColor:"#6868E5"}]} onPress={()=> navigation.navigate(tag.router)}>
                    <Text style={[styles.name,{color:"#fff"}]}>{tag.name}</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity style={styles.nameContent} onPress={()=> {!selected ? navigation.navigate(tag.router) :  navigation.navigate(tag.router,{selected,index})}}>
                    <Text style={[styles.name,{color:"#000"}]}>{tag.name}</Text>
                </TouchableOpacity>
            }

         
            {change &&  active && (
                <View style={styles.iconsContent}>
                    <TouchableOpacity onPress={() => console.log("Editar")} style={styles.iconButton}>
                        <Feather name="edit-2" size={24} color="#6C63FF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Eliminar")} style={styles.iconButton}>
                        <MaterialCommunityIcons name="delete-outline" size={24} color="#FF6B6B" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        height:130,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#6881E5",
        borderRadius: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        gap:20
    },
    imageContent: {
        width: 100,
        height: 100,
        borderRadius: 30,
        overflow: "hidden",
        alignContent:"center",
        alignItems:"center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    nameContent: {
        flex: 1,
        marginLeft: 15,
        borderRadius:16,
        padding:7, 
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        textAlign:"left"
    },
    iconsContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        marginLeft: 15,
    },
});

export default TagsComponent;
