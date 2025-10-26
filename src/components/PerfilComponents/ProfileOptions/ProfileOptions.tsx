// Componente ProfileOptions para exibir uma lista de opções de perfil com suporte a temas claro e escuro
import React from "react";
import { View } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";
import { ListItem } from "@/src/components/PerfilComponents/ListItem";
import { ProfileOption } from "@/src/types/profile.types";

// Defina a interface aqui
export interface ProfileOptionsProps {
  options: ProfileOption[];
}

export const ProfileOptions: React.FC<ProfileOptionsProps> = ({ options }) => {
  const { isDark } = useTheme();

  return (
    <View
      className={`rounded-2xl border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} mb-5 shadow-md overflow-hidden`}
    >
      {options.map((option, index) => (
        <ListItem
          key={index}
          icon={option.icon}
          label={option.label}
          onPress={option.onPress}
          isLast={index === options.length - 1}
          isDark={isDark}
        />
      ))}
    </View>
  );
};
