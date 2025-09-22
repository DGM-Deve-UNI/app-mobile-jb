import "./src/styles/global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/routes";
import { StatusBar } from 'expo-status-bar';
import { Profile } from '@/app/pages/Profile';
import { View } from "react-native";
import Home from "@/app/pages/Home";

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="light" backgroundColor="#000000" />
        {/* <StatusBar style="auto" /> */}
        <Routes />
      </NavigationContainer>

    // <View className="flex-1 justify-center items-center bg-gray-700 text-white">
    //   {/* <Profile /> */}

      
    // </View>
  );
}
