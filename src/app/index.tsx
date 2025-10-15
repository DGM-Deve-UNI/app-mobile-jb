import React from "react";
import "@/src/styles/global.css";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/headerFeed";
import FeedNews from "../components/NewsComponents/FeedNews";
// -----------------------------------------------------------------------------
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      <Header />

        <Text className="text-2xl font-semibold px-6 py-4 text-gray-500">
          Olá, User 👋🏼
        </Text>
      <FeedNews/>
    </SafeAreaView>
  );
}