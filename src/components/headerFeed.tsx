import React from "react";
import "@/src/styles/global.css";
import { Text, View } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
// ----------------------------------------------------------------------------
export default function Header() {
  return (
      <View className="flex-row border-b-2 border-b-zinc-300 items-center justify-between p-5">
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons
            name="newspaper"
            size={30}
            color="#eab308"
            className=""
          />
          <Text className="font-bold text-2xl">News Feed</Text>
        </View>

        <View className="flex-row gap-4">
          <MaterialCommunityIcons
            name="bell-ring"
            size={30}
            color="#eab308"
            className=""
          />
          <Feather name="bookmark" size={30} color="#eab308" className="" />
        </View>
      </View>
  );
}