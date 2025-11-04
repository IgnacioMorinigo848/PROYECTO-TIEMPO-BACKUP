import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const TagsInfoComponent = ({ navigation, label, info,image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContent}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.infoContent}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        height:68,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#6881E5",
        borderRadius: 5,
        paddingHorizontal: 20,
        marginVertical: 5,
        gap:20
    },
    imageContent: {
        width: 25,
        height: 25,
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
    label:{
        fontSize:12
    },
    info:{
        fontSize:16,
        fontWeight:"bold"
    }
});

export default TagsInfoComponent;

