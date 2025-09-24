// src/theme/themes.ts
import { Theme } from "@react-navigation/native";

export const CustomLightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#2563eb",
    background: "#f9fafb",
    card: "#ffffff",
    text: "#111827",
    border: "#e5e7eb",
    notification: "#ef4444",
  },
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "400" as const,
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500" as const,
    },
    bold: {
      fontFamily: "System",
      fontWeight: "700" as const,
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "800" as const,
    },
  },
};

export const CustomDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#3b82f6",
    background: "#111827",
    card: "#1f2937",
    text: "#f9fafb",
    border: "#374151",
    notification: "#ef4444",
  },
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "400" as const,
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500" as const,
    },
    bold: {
      fontFamily: "System",
      fontWeight: "700" as const,
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "800" as const,
    },
  },
};
