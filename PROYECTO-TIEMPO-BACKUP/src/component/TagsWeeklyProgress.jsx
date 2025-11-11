import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const TagsWeeklyProgress = ({ onPress, tag,active=false}) => {
  const isCompleted = active && tag.completed >= tag.countRequirement;
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress }>
      <View style={styles.iconContent}>
        <Image style={styles.icon} source={tag.icon} resizeMode="contain" />
      </View>
      <View style={styles.infoContent}>
        {active && 
          <View>
            <Text>{`${tag.completed || 0}/${tag.countRequirement || 0}`} completados</Text>
          </View>
        }
        <Text style={styles.title}>{tag.title}</Text>
        { !active && <Text style={styles.subtitle}>{tag.subtitle}</Text>}
        { active && !isCompleted && <View style={styles.progressBarContent}>
            <View style={[styles.progressBar,{width:tag.progress + "%"}]}/>
        </View>
        }
        { isCompleted && <Text style={styles.completedText}>✓ Completado</Text>}
      </View>
      <MaterialIcons name="chevron-right" size={30} color="#3E73C3"/>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: height * 0.09,
    backgroundColor: "#ebf0faff",
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContent: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flexShrink: 1,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    marginTop: 2,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  completedText: {
    fontSize: 14,
    color: "#6BBF5A",
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 4,
  },
   progressBarContent:{
        width:"80%",
        justifyContent:"flex-start",
        backgroundColor:"#BABABA",
        marginVertical:6,
        borderRadius:15,
    },
    progressBar:{
        borderRadius:15,
        paddingTop:8,
        backgroundColor:"#CC68E5"
    },
});

export default TagsWeeklyProgress;
