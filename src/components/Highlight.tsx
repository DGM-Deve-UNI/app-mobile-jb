import React from "react";
import { View, Text } from "react-native";

export function Highlight() {
  return (
    <View className="bg-yellow-400 rounded-lg mx-6 my-4 p-6 shadow-lg">
      <Text className="text-gray-900 font-extrabold text-xl mb-2">
        Destaque do Dia
      </Text>
      <Text className="text-gray-800">
        Essa é a notícia mais importante para você hoje, fique ligado!
      </Text>
    </View>
  );
}
