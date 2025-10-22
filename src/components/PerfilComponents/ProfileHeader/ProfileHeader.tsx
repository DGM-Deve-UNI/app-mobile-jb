import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";

export const ProfileHeader: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <View
      className={`px-5 py-4 border-b ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
    >
      <Text
        className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Perfil
      </Text>
    </View>
  );
};
