import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TimerStack from "./timerStack";

import Home from "../view/Home";
import Record from "../view/record/Record";
import PointEarned from "../view/pointEarned/PointEarned";
import Profile from "../view/profile/Profile";
import Statistics from "../view/statistics/Statistics";
import AuthStack from "./authStack";
import HabitStack from "./habitStack";
import ChatBot from "../view/chatBot/ChatBot";

const Stack = createStackNavigator();

export default function MainStack () {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="TimerStack" component={TimerStack} options={{headerShown:false}}/>
            <Stack.Screen name="Record" component={Record} options={{headerShown:false}}/>
            <Stack.Screen name="Statistics" component={Statistics} options={{headerShown:false}}/>
            <Stack.Screen name="PointEarned" component={PointEarned} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name="HabitStack" component={HabitStack} options={{headerShown:false}}/>
            <Stack.Screen name="ChatBot" component={ChatBot} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

