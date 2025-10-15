import "@/src/styles/global.css";
import React from "react";
import { StatusBar, Text, View } from "react-native";
// ----------------------------------------------------------------------------
export default function Agendamentos() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-300">
      <StatusBar />
      <Text className="text-5xl font-bold p-2 text-pink-700">Agendamentos</Text>
    </View>
  );
}