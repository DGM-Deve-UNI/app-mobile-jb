// components/UserCard.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UserCardProps {
  name: string;
  email: string;
  isDark: boolean;
  colors: {
    surface: string;
    text: string;
    textSecondary: string;
    primary: string;
    border: string;
  };
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  isDark,
  colors,
}) => {
  return (
    <View
      className={`p-5 rounded-2xl border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} items-center mb-5 shadow-lg`}
    >
      <View
        className={`w-20 h-20 rounded-full ${isDark ? "bg-gray-700" : "bg-amber-50"} items-center justify-center mb-3 border-2 border-amber-500`}
      >
        <Ionicons
          name="person"
          size={44}
          color={isDark ? colors.primary : "#D97706"}
        />
      </View>
      <Text
        className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}
      >
        {name}
      </Text>
      <Text className={isDark ? "text-gray-400" : "text-gray-600"}>
        {email}
      </Text>
    </View>
  );
};
