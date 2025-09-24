
import "./src/styles/global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/routes";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { CustomLightTheme, CustomDarkTheme } from "@/styles/themes";

function NavigationWrapper() {
  const { isDark } = useTheme();

  return (
    <NavigationContainer theme={isDark ? CustomDarkTheme : CustomLightTheme}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Routes />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationWrapper />
    </ThemeProvider>
  );
}
