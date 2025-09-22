import React from "react";
import { View, Text } from "react-native";

export function FeedHeader() {
  return (
    <View className="px-6 pt-20 pb-4 bg-gray-700">
      <Text className="text-white font-bold text-4xl">Feed de Notícias</Text>
      <Text className="text-gray-300 mt-1">
        Fique por dentro das últimas novidades
      </Text>
    </View>
  );
}
