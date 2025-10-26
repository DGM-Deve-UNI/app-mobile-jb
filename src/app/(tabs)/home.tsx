// Tela inicial do aplicativo com cabeçalho e feed de notícias, adaptando o StatusBar ao tema atual
import React from "react";
import "@/src/styles/global.css";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  setStatusBarStyle,
  setStatusBarBackgroundColor,
} from "expo-status-bar";
import Header from "@/src/components/headerFeed";
import FeedNews from "@/src/components/NewsComponents/FeedNews";
import { useTheme } from "@/src/contexts/ThemeContext";
import { AuthWrapper } from "@/src/components/AuthWrapper";

// -----------------------------------------------------------------------------
export default function Index() {
  const { isDark } = useTheme();

  // Configura o StatusBar quando o tema muda
  React.useEffect(() => {
    setStatusBarStyle(isDark ? "light" : "dark");
    setStatusBarBackgroundColor(isDark ? "#1F2937" : "#FFFFFF", true);
  }, [isDark]);

  return (
    <AuthWrapper>
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
    </AuthWrapper>
  );
}
