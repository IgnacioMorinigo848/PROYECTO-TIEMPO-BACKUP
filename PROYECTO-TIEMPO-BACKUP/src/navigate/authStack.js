import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../view/auth/SignIn";
import AddEmail from "../view/auth/AddEmail";

export default function AuthStack(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator initialRouteName="SignIn" >
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
            <Stack.Screen name="AddEmail" component={AddEmail} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}