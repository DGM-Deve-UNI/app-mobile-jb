// src/styles/tabBarStyles.ts
import { useTheme } from "@/src/contexts/ThemeContext";

export const useTabBarStyles = () => {
  const { isDark } = useTheme();

  const tabBarStyles = {
    tabBar: {
      backgroundColor: isDark ? "#1F2937" : "#FFFFFF", // substitui colors.white pelo dark ou light
      borderTopWidth: 1,
      borderTopColor: isDark ? "#374151" : "#E5E7EB", // substitui colors.JB_amarelo_border
      position: "absolute",
      elevation: 0,
      shadowOpacity: 0,
      height: 80, // mantido do primeiro código
      // paddingBottom: 10, // comentado no primeiro, pode descomentar se quiser
      paddingTop: 8,
    },
    label: {
      fontSize: 16, // mantido do primeiro código
      fontWeight: "700",
      marginTop: 8,
    },
  };

  const tabBarColors = {
    active: isDark ? "#F59E0B" : "#D97706", // amarelo ativo dark/light (adaptado do segundo)
    inactive: isDark ? "#9CA3AF" : "#6B7280", // cinza inactive dark/light
  };

  return { tabBarStyles, tabBarColors };
};

