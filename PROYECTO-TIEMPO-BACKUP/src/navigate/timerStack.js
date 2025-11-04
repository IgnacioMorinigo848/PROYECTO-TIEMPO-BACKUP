import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCategories from "../view/timer/MyCategories";
import Timer from "../view/timer/Timer";
import Record from "../view/timer/Record";

export default function TimerStack(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator initialRouteName="MyCategories" >
            <Stack.Screen name="MyCategories" component={MyCategories} options={{headerShown:false}} />
            <Stack.Screen name="Timer" component={Timer} options={{headerShown:false}} />
            <Stack.Screen name="Record" component={Record} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}