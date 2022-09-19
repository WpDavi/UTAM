import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import  CustomTabBar from '../Componentes/tabbar'


import Feed from "../screens/TabScreens/Feed";
import Bazar from "../screens/TabScreens/Bazar";
import Reclamaçoes from "../screens/TabScreens/Reclamações";
import Hanking from "../screens/TabScreens/Hanking";
import Perfil from "../screens/TabScreens/Perfil";

const Tab = createBottomTabNavigator()

export default function MainTab() {
    
    return(
        <Tab.Navigator
        tabBar={props=><CustomTabBar{...props}/>}
        screenOptions={{
            headerShown:false
        }}
        >
            <Tab.Screen name="Feed" component={Feed} /> 
            <Tab.Screen name="Bazar" component={Bazar} /> 
            <Tab.Screen name="Reclamaçoes" component={Reclamaçoes} /> 
            <Tab.Screen name="Hanking" component={Hanking} /> 
            <Tab.Screen name="Perfil" component={Perfil} /> 
        </Tab.Navigator>


    )
}