import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import HeaderComponent from "../component/HeaderComponent";
import TagsAssigmentComonent from "../component/TagsAssigmentComponent";
import { emote, profile,weeklyAssigment,moods,infoProgress } from "../helper/data";
import TagsWeeklyProgress from "../component/TagsWeeklyProgress";
import SightComponent from "../component/SightComponent";
import ChatBotComponent from "../component/ChatBotComponent";

const { height } = Dimensions.get("window");

const Home = ({ navigation }) => {
const [visible,setVisible] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [currentEmote, setCurrentEmote] = useState(emote.happy);
const [selectedMood, setSelectedMood] = useState(null);

  const handleEmotionChange = (emotion) => {
    switch (emotion) {
      case "HAPPY":
        setCurrentEmote(emote.happy);
        break;
      case "SAD":
        setCurrentEmote(emote.exhausted);
        break;
      case "NEUTRAL":
        setCurrentEmote(emote.unsure);
        break;
      case "TALKING":
        setCurrentEmote(emote.noWords);
        break;
      default:
        setCurrentEmote(emote.unsure);
    }
  };

  const visibleButton = () =>{
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Home/backGroundImage.png")}
        style={styles.background}
        resizeMode="cover"
      >

       <View style={{width:"100%"}}>
         <HeaderComponent navigation={navigation} visibleButton={visibleButton}/>
       </View>

        <View style={styles.titleContainer}><Text style={styles.title} > {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).replace(',', '')}</Text></View>

        <View style={styles.boxContainer}>

          <View style={styles.profileContent}>
            <Text style={styles.name}>{profile.name}</Text>
            <View style={styles.pointsContainer}>
              <View style={styles.imageContent}>
                <Image style={styles.image} source={profile.image}/>
              </View>
              <View style={styles.pointsContent}>
                <Text style={styles.text}>Tus puntos de salud son</Text>
                <Text style={styles.points}>{profile.points}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.emoteContet} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.emoteTitle}>¿Necesitas ayuda?</Text>
            <View style={styles.emoteInfoContent}>
              <View style={styles.emoteImageContent}>
                <Image style={styles.emoteImage} source={currentEmote}/>
              </View>
              <Text style={styles.emoteText}>Hablá con Blu</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.moodContainer}>
      <Text style={styles.moodTitle}>{selectedMood ? `Hoy estas ${moods[selectedMood].label}` : `¿Como te sentís hoy?`}</Text>

      <View style={styles.moodContent}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.moodItem,
            ]}
            onPress={() => setSelectedMood(index)}
          >
            <View style={styles.emojiContent}>
            <Image style={[styles.emoji,selectedMood === index && { tintColor: mood.color, opacity: 1 }]} source={mood.emoji}/>
            </View>
            <Text style={styles.label}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
        </View>

        <View style={styles.assigmentTitleCentent}><Text style={styles.assigmentTitle}>Completa tus hábitos diarios 🙌</Text></View>

         <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
        {weeklyAssigment.map((tag,index) => (
           <TagsAssigmentComonent navigation={navigation} tag={tag} index={index} key={index}/>
          ))}

        </ScrollView>

        <ScrollView
          style={{ width: "90%", alignSelf: "center" }}
        >
         {infoProgress.map((tag,index) => (
           <TagsWeeklyProgress navigation={navigation} tag={tag} key={index}/>
          ))}

        </ScrollView>
        <SightComponent visible={visible} onClose={() => setVisible(false)} />
      <View style={{marginTop:30}}>
        
      </View>

      <ChatBotComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onEmotionChange={handleEmotionChange}
      />
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height:300
  },
  titleContainer: {
    width: "100%",
    alignItems: "center", 
    paddingHorizontal: 20,    
    marginTop: 20,          
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  moodContainer: {
    width:"90%",
    backgroundColor:"#F5F8FE",
    padding: 5,
    marginVertical:20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.40,
    shadowRadius: 4,
    elevation: 5,
  },
  moodTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign:"center"
  },
  moodContent: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  moodItem: {
    width: "18%",
    marginTop:20,
    marginBottom:5,   
    alignItems: 'center',
    borderRadius: 12,
    opacity: 0.8,
  },
  emojiContent:{
    width:30,
    height:30
  },
  emoji: {
    width:"100%",
    height:"100%"
  },
  label: {
    fontSize: 12,
  },
  boxContainer:{
    width:"90%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30,
    gap:10
  },
  profileContent:{
    width:"55%",
    backgroundColor:"#fff",
    borderRadius:12,
    padding:16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  name:{
    fontSize:18,
    fontWeight:"bold",
    color:"#002055"
  },
  pointsContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10
  },
  imageContent:{
    width:80,
    height:80
  },
  image:{
    width:"100%",
    height:"100%"
  },
  pointsContent:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexShrink: 1 
  },
  text:{
    fontSize:14,
    fontWeight:"500",
    color:"#002055",
    flexWrap: "wrap", 
  },
  points:{
    fontSize:18,
    fontWeight:"bold",
    color:"#D84BBB"
  },
  emoteContet:{
    width:"40%",
    backgroundColor:"#fff",
    borderRadius:12,
    padding:16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  emoteTitle:{
    fontSize:16,
    textAlign:"center",
    fontWeight:"bold",
    color:"#002055",
    flexWrap: "wrap", 
  },
  emoteInfoContent:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emoteImageContent:{
    width:60,
    height:60,
    padding:4,   
    backgroundColor: "#3E73C3",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
},
 emoteImage:{
  width: 40,     
  height: 40,
  resizeMode: "contain",
},
  emoteText:{
    fontSize:16,
    textAlign:"center",
    color:"#002055",
    flexShrink: 1 
  },
  assigmentTitleCentent:{
    width: "90%",
    justifyContent: "flex-center",
    marginBottom:10
  },
  assigmentTitle:{
    fontSize:25,
    color:"#002055",
    fontWeight:"bold",
    textAlign:"left",
  },
  contentContainerStyle:{
    paddingHorizontal: 20,
    height:height * 0.27,
    gap:10
  },
  emote:{
    marginBottom: 40,
    position: "relative", 
  }
});

export default Home;
