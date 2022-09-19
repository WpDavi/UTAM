import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import MainStack from "./src/routes/MainStack";

export default function app() {
  return(
    <NavigationContainer>
      <MainStack/>
      <StatusBar backgroundColor={'#142B09'}/>
    </NavigationContainer>
    
  )
}