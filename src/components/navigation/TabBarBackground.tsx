import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export function TabBarBackground() {
  return (
    <BlurView
      intensity={50}
      tint="dark" // pode trocar para 'dark', 'light' ou 'default'
      style={StyleSheet.absoluteFill}
    />
  );
}