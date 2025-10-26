// Componente Header com suporte a temas claro e escuro
import React from "react";
import "@/src/styles/global.css";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useTheme } from "@/src/contexts/ThemeContext";
// ----------------------------------------------------------------------------
export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View
      className={`flex-row border-b-2 items-center justify-between p-5 ${
        isDark ? "bg-gray-800 border-b-gray-700" : "bg-white border-b-zinc-300"
      }`}
    >
      {/* Logo e Título */}
      <View className="flex-row items-center gap-2">
        <MaterialCommunityIcons name="newspaper" size={30} color="#eab308" />
        <Text
          className={`font-bold text-2xl ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          JohnBravo Notícias
        </Text>
      </View>

      {/* Ícones da Direita */}
      <View className="flex-row gap-4 items-center">
        {/* Botão de Toggle Theme */}
        <TouchableOpacity onPress={toggleTheme}>
          <MaterialCommunityIcons
            name={isDark ? "weather-sunny" : "weather-night"}
            size={26}
            color={isDark ? "#eab308" : "#6b7280"}
          />
        </TouchableOpacity>

        {/* Ícone de Notificações */}
        <MaterialCommunityIcons name="bell-ring" size={26} color="#eab308" />

        {/* Ícone de Favoritos */}
        <Feather name="bookmark" size={26} color="#eab308" />
      </View>
    </View>
  );
}
