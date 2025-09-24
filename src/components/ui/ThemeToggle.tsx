// src/components/ThemeToggle.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} className="p-2">
      <Ionicons
        name={isDark ? "sunny" : "moon"}
        size={24}
        color={isDark ? "#fbbf24" : "#4b5563"}
      />
    </TouchableOpacity>
  );
};
