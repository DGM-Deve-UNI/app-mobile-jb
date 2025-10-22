import React from "react";
import "@/src/styles/global.css";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  setStatusBarStyle,
  setStatusBarBackgroundColor,
} from "expo-status-bar";
import Header from "@/src/components/headerFeed";
import FeedNews from "@/src/components/NewsComponents/FeedNews";
import { useTheme } from "@/src/contexts/ThemeContext";

// -----------------------------------------------------------------------------
export default function Index() {
  const { isDark } = useTheme();

  // Configura o StatusBar quando o tema muda
  React.useEffect(() => {
    setStatusBarStyle(isDark ? "light" : "dark");
    setStatusBarBackgroundColor(isDark ? "#1F2937" : "#FFFFFF", true);
  }, [isDark]);

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Header />

      <Text
        className={`text-2xl font-semibold px-6 py-4 ${
          isDark ? "text-white" : "text-gray-500"
        }`}
      >
        Olá, User 👋🏼
      </Text>

      <FeedNews />
    </SafeAreaView>
  );
}
