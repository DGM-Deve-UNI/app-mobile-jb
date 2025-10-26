// Componente PersonalInfo para exibir informações pessoais com suporte a temas claro e escuro
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";
import { PersonalInfoItem } from "@/src/components/PerfilComponents/PersonalInfoItem";

// Defina a interface aqui
export interface PersonalInfoProps {
  personalInfo: {
    icon: string;
    label: string;
    value: string;
  }[];
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  const { isDark } = useTheme();

  return (
    <View
      className={`${isDark ? "bg-gray-800" : "bg-white"} p-5 pb-0 rounded-2xl border ${
        isDark ? "border-gray-700" : "border-gray-200"
      } shadow-md`}
    >
      <Text
        className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}
      >
        Informações Pessoais
      </Text>

      {personalInfo.map((info, index) => (
        <PersonalInfoItem
          key={index}
          icon={info.icon}
          label={info.label}
          value={info.value}
          isLast={index === personalInfo.length - 1}
          isDark={isDark}
        />
      ))}
    </View>
  );
};
