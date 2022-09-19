import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Registration from "../screens/Registration";
import PreLogin from "../screens/PreLogin";

import MainTab from "./MainTab";


const Stack = createNativeStackNavigator()

export default function MainStack() {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>          
            
            <Stack.Screen name="PreLogin" component={PreLogin} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainTab" component={MainTab} />

        </Stack.Navigator>
    )
}