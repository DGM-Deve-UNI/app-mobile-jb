// Componente NotificationSetting para exibir uma configuração de notificação com suporte a temas claro e escuro
import React from "react";
import { View, Text, Switch } from "react-native";

interface NotificationSettingProps {
  title: string;
  description: string;
  value: boolean;
  onValueChange: () => void;
  isDark: boolean;
  isLast: boolean;
}

export const NotificationSetting: React.FC<NotificationSettingProps> = ({
  title,
  description,
  value,
  onValueChange,
  isDark,
  isLast,
}) => {
  return (
    <View
      className={`flex-row justify-between items-start mb-5 pb-5 ${
        !isLast
          ? `border-b ${isDark ? "border-gray-700" : "border-gray-200"}`
          : ""
      }`}
    >
      <View className="flex-1 mr-4">
        <Text
          className={`${isDark ? "text-white" : "text-gray-900"} font-semibold mb-1 text-base`}
        >
          {title}
        </Text>
        <Text
          className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm leading-4.5`}
        >
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: isDark ? "#555" : "#D1D5DB",
          true: isDark ? "#FFD54F" : "#FBBF24",
        }}
        thumbColor={value ? (isDark ? "#FFC107" : "#F59E0B") : "#f4f3f4"}
      />
    </View>
  );
};
