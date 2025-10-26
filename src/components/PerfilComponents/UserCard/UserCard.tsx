// Componente UserCard para exibir informações do usuário com suporte a temas claro e escuro
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Defina a interface aqui
export interface UserCardProps {
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
      className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-2xl border p-5 mb-5 shadow-md ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <View className="flex-row items-center">
        <View className="w-16 h-16 rounded-full bg-amber-500 items-center justify-center mr-4">
          <Ionicons name="person" size={24} color="white" />
        </View>
        <View className="flex-1">
          <Text
            className="text-xl font-bold mb-1"
            style={{ color: colors.text }}
          >
            {name}
          </Text>
          <Text className="text-base" style={{ color: colors.textSecondary }}>
            {email}
          </Text>
        </View>
      </View>
    </View>
  );
};
