import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AuthTitleComponent from "../../component/AuthTitleComponent";
import AuthButtonComponent from "../../component/AuthButtonComponent";
import AuthInputComponent from "../../component/AuthInputComponent";
import { mailCredentialValidator,passwordValidator } from "../../helper/credentialValidator";

export default function SignIn({navigation}){

  const [mail,setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const credentialsValidator = () => {
  let errors = {};

  const mailError = mailCredentialValidator(mail);
  const passwordError = passwordValidator(password);

  if (mailError) errors.mail = mailError;
  if (passwordError) errors.password = passwordError;

  setError(errors);
  return Object.keys(errors).length === 0;
};


  const handleSignIn = () =>{
    if(credentialsValidator())
      navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

    return(
      <>
       <StatusBar
        backgroundColor="#689AE5"   
        barStyle="light-content"    
      />
        <SafeAreaView style={styles.safeArea}>
              <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.flex}
        >
           <ScrollView
            contentContainerStyle={styles.scrollContainer}
          
           
          >
            <ImageBackground
                source={require("../../assets/Timer/recordBackground.png")}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.titleContent}><AuthTitleComponent/></View>
                <View style={styles.inputContent}>
                  <AuthInputComponent
                    placeholder={"Correo o legajo"}
                    value={mail}
                    onChange={setMail}
                    error={error.mail || ""}
                  />
                  <AuthInputComponent
                    placeholder={"Contraseña"}
                    value={password}
                    onChange={setPassword}
                    error={error.password || ""}
                  />
                </View>
                <TouchableOpacity style={styles.recoverContent} onPress={()=>navigation.navigate("AuthStack", {screen: "AddEmail"})}><Text style={styles.recoverText}>Olvidaste tu contraseña?</Text></TouchableOpacity>
                <View style={styles.buttonContent}><AuthButtonComponent onPress={handleSignIn} backgroundColor={Object.keys(error).length === 0 && mail && password ? "#6881E5" : "#979797"}/></View>
            
            </ImageBackground>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:"#fff"
  },
   flex: { flex: 1,
    width:"100%",
    },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingHorizontal: 0,
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height:"45%"
  },
  titleContent:{
    width:"90%",
    alignItems:"center",
    marginTop:"100%"
  },
  inputContent:{
    marginTop:40,
    width:"85%",
    gap:20
  },
  recoverContent:{
    width:"85%",
    justifyContent:"flex-start"
  },
  recoverText:{
    fontSize:14,
    fontWeight:500,
    textDecorationLine: 'underline',
    color:"#333333",
    paddingTop:7,
  },
  buttonContent:{
    width:"85%",
    alignItems:"center",
    marginTop:35
  }
});