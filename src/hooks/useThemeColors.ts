// src/hooks/useThemeColors.ts
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeColors {
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  primary: string;
  primaryBg: string;
}

export const useThemeColors = (): ThemeColors => {
  const { isDark } = useTheme();

  return {
    background: isDark ? "bg-gray-900" : "bg-gray-50",
    surface: isDark ? "bg-gray-800" : "bg-white",
    card: isDark ? "bg-gray-700" : "bg-gray-100",
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    textMuted: isDark ? "text-gray-400" : "text-gray-500",
    border: isDark ? "border-gray-700" : "border-gray-200",
    primary: isDark ? "text-blue-400" : "text-blue-600",
    primaryBg: isDark ? "bg-blue-900" : "bg-blue-50",
  };
};
