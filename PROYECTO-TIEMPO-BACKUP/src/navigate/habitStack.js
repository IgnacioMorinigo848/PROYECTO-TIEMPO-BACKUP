import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Habits from "../view/habits/Habits.jsx";
import HabitDetail from "../view/habits/HabitDetail.jsx";

export default function HabitStack(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator initialRouteName="Habits" >
            <Stack.Screen name="Habits" component={Habits} options={{headerShown:false}} />
            <Stack.Screen name="HabitDetail" component={HabitDetail} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}