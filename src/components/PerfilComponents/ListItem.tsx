// Componente ListItem reutilizável com suporte a temas claro e escuro
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Defina a interface
export interface ListItemProps {
  icon: string;
  label: string;
  onPress: () => void;
  isLast?: boolean;
  isDark: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  label,
  onPress,
  isLast = false,
  isDark,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center px-4 py-3 ${
        !isLast
          ? `border-b ${isDark ? "border-gray-700" : "border-gray-200"}`
          : ""
      }`}
    >
      <Ionicons
        name={icon as any}
        size={24}
        color={isDark ? "#FFC107" : "#F59E0B"}
        className="mr-3"
      />
      <Text
        className={`flex-1 text-base ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {label}
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={isDark ? "#9CA3AF" : "#6B7280"}
      />
    </TouchableOpacity>
  );
};
