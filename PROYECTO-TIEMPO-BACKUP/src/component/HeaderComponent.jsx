import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons, Feather,MaterialIcons } from "@expo/vector-icons";

const HeaderComponent = ({ navigation,change=false,show=true,color="#fff" ,visibleButton}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.header}>
      <View style={styles.content}>
       
        {!change ? 
        
        <TouchableOpacity onPress={() => visibleButton()}>
          <Ionicons name="notifications-outline" size={24} color={color} />
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={[styles.icon, { color: color }]}>{'<'}</Text>
            <Text style={[styles.text, { color: color }]}>Volver</Text>
        </TouchableOpacity>
        
      }

       
        {!change && <View style={styles.titleContainer}>
          <Text style={styles.title}>tiemp</Text>
          <Ionicons name="heart" size={28} color="#FF6B81" style={styles.heart} />
        </View>}

      {show &&
        <TouchableOpacity onPress={openMenu}>
          <Feather name="menu" size={26} color={color} />
        </TouchableOpacity>
      }
      </View>
      

      
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={closeMenu}
      >
    
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay}>
           
            <TouchableWithoutFeedback>
              <View style={styles.menuContainer}>
                <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
                  <Feather name="x" size={28} color="#333" />
                </TouchableOpacity>

                <View style={styles.menuContent}>
                  <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("TimerStack")}>
                    <MaterialIcons name="playlist-add" size={24} color="#7A5AF5" />
                    <Text style={styles.menuText}>Registrar actividad</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Record")}>
                    <Ionicons name="time-outline" size={24} color="#7A5AF5" />
                    <Text style={styles.menuText}>Ver historial</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Statistics")}>
                    <MaterialIcons name="bar-chart" size={24} color="#7A5AF5" />
                    <Text style={styles.menuText}>Ver estadísticas</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("PointEarned")}>
                    <Ionicons name="star-outline" size={24} color="#7A5AF5" />
                    <Text style={styles.menuText}>Canjear puntos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Profile")}>
                    <Ionicons name="person-outline" size={24} color="#7A5AF5" />
                    <Text style={styles.menuText}>Mi perfil</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "auto",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  heart: {
    color: "#FF6E7B",
    fontSize: 20,
    transform: [{ rotate: "12deg" }],
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  menuContainer: {
    width: "65%",
    backgroundColor: "#fff",
    height: "100%",
    padding: 20,
    elevation: 10,
  },
   button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    marginLeft: 4,
    fontSize: 16,
  },
    icon: {
    fontSize: 24,
    marginRight: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  menuContent: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },
});

export default HeaderComponent;
