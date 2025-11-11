import React, { useState } from "react";
import happyEmoji from "../assets/Emotion/happy.png";
import sadEmoji from "../assets/Emotion/sad.png";
import indifferentEmoji from "../assets/Emotion/indifferent.png";
import motivatedEmoji from "../assets/Emotion/motivated.png";
import frustratedEmoji from "../assets/Emotion/Frustrated.png";
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
import { useData } from "../context/DataContext";
import TagsWeeklyProgress from "../component/TagsWeeklyProgress";
import SightComponent from "../component/SightComponent";
import ChatBotComponent from "../component/ChatBotComponent";

const { height } = Dimensions.get("window");

const Home = ({ navigation }) => {

const emojiImages = {
  "happy.png": happyEmoji,
  "sad.png": sadEmoji,
  "indifferent.png": indifferentEmoji,
  "motivated.png": motivatedEmoji,
  "Frustrated.png": frustratedEmoji,
};

const [visible, setVisible] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [selectedMood, setSelectedMood] = useState(null);
const [hideMoodBar, setHideMoodBar] = useState(false);

const {
  emotes,
  moods,
  infoProgress,
  getCurrentUser,
  getWeeklyAssignmentProgress,
  createMoodRecord,
} = useData();

const currentUser = getCurrentUser();
const [currentEmote, setCurrentEmote] = useState(emotes.happy);
const weeklyProgress = getWeeklyAssignmentProgress();

  const handleEmotionChange = (emotion) => {
    switch (emotion) {
      case "HAPPY":
  setCurrentEmote(emotes.happy);
        break;
      case "SAD":
  setCurrentEmote(emotes.exhausted);
        break;
      case "NEUTRAL":
  setCurrentEmote(emotes.unsure);
        break;
      case "TALKING":
  setCurrentEmote(emotes.noWords);
        break;
      default:
  setCurrentEmote(emotes.unsure);
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

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).replace(',', '')}
            </Text>
          </View>

          <View style={styles.boxContainer}>
            <View style={styles.profileContent}>
              <Text style={styles.name}>{currentUser.name}</Text>
              <View style={styles.pointsContainer}>
                <View style={styles.imageContent}>
                  <Image style={styles.image} source={require("../assets/Profile/profile-image.png")}/>
                </View>
                <View style={styles.pointsContent}>
                  <Text style={styles.text}>Tus puntos de salud son</Text>
                  <Text style={styles.points}>{currentUser.points}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.emoteContet} onPress={() => setModalVisible(!modalVisible)} activeOpacity={0.7}>
              <Text style={styles.emoteTitle}>¿Necesitas ayuda?</Text>
              <View style={styles.emoteInfoContent}>
                <View style={styles.emoteImageContent}>
                  <Image style={styles.emoteImage} source={currentEmote}/>
                </View>
                <Text style={styles.emoteText}>Hablá con Blu</Text>
              </View>
            </TouchableOpacity>
          </View>

          {!hideMoodBar && (
            <View style={styles.moodContainer}>
              {selectedMood === null ? (
                <>
                  <Text style={styles.moodTitle}>¿Como te sentís hoy?</Text>
                  <View style={styles.moodContent}>
                    {moods.map((mood, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[styles.moodItem]}
                        activeOpacity={0.7}
                        onPress={() => {
                          setSelectedMood(index);
                          createMoodRecord(mood.id, `Usuario se siente ${mood.label.toLowerCase()}`);
                          setTimeout(() => {
                            setHideMoodBar(true);
                            setTimeout(() => {
                              setHideMoodBar(false);
                              setSelectedMood(null);
                            }, 120000);
                          }, 3000);
                        }}
                      >
                        <View style={styles.emojiContent}>
                          <Image
                            style={styles.emoji}
                            source={emojiImages[mood.emoji]}
                          />
                        </View>
                        <Text style={styles.label}>{mood.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </>
              ) : (
                <View style={styles.moodMessageContainer}>
                  <View style={styles.moodMessageEmojiContent}>
                    <Image
                      style={styles.moodMessageEmoji}
                      source={emojiImages[moods[selectedMood].emoji]}
                    />
                  </View>
                  <Text style={styles.moodMessageTitle}>
                    {selectedMood === 0 && "Entendemos que hoy es un día difícil. Recordá que está bien tomarte un respiro."}
                    {selectedMood === 1 && "Es normal sentirse triste a veces. No dudes en hablar con alguien si lo necesitás."}
                    {selectedMood === 2 && "A veces los días son así, neutros. Está bien tomarte las cosas con calma."}
                    {selectedMood === 3 && "¡Qué bueno que te sientas feliz! Aprovechá este buen momento."}
                    {selectedMood === 4 && "¡Excelente! Tu motivación es contagiosa. Seguí así."}
                  </Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.assigmentTitleCentent}>
            <Text style={styles.assigmentTitle}>Completa tus hábitos diarios</Text>
          </View>

          <View style={styles.progressItemsContainer}>
            {weeklyProgress.map((assignment, index) => (
              <TagsWeeklyProgress
                onPress={() => navigation.navigate("TimerStack", { screen: "Timer", params: { tag: assignment } })}
                tag={assignment}
                active={true}
                key={index}
              />
            ))}
            
            {infoProgress.map((tag, index) => (
              <TagsWeeklyProgress 
                onPress={() => navigation.navigate("HabitStack")} 
                tag={tag} 
                key={index}
              />
            ))}
          </View>

          <View style={{marginTop: 30}} />
        </ScrollView>

        <SightComponent visible={visible} onClose={() => setVisible(false)} />
        
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
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 20,
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
  moodMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  moodMessageEmojiContent: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  moodMessageEmoji: {
    width: '100%',
    height: '100%',
  },
  moodMessageTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#002055',
    lineHeight: 22,
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
    paddingTop:12,
    fontSize:22,
    color:"#002055",
    fontWeight:"bold",
    textAlign:"left",
  },
  progressItemsContainer:{
    width: "90%",
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
