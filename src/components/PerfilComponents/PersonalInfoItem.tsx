// components/PersonalInfoItem.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PersonalInfoItemProps {
  icon: string;
  label: string;
  value: string;
  isLast: boolean;
  isDark: boolean;
}

export const PersonalInfoItem: React.FC<PersonalInfoItemProps> = ({
  icon,
  label,
  value,
  isLast,
  isDark,
}) => {
  return (
    <View
      className={`flex-row items-start mb-4 pb-4 ${
        !isLast
          ? `border-b ${isDark ? "border-gray-700" : "border-gray-200"}`
          : ""
      }`}
    >
      <Ionicons
        name={icon as any}
        size={18}
        color={isDark ? "#FFC107" : "#F59E0B"}
        className="mt-0.5"
      />
      <View className="flex-1 ml-3">
        <Text
          className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm mb-1 font-medium`}
        >
          {label}
        </Text>
        <Text
          className={`${isDark ? "text-white" : "text-gray-900"} text-base leading-5`}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};
