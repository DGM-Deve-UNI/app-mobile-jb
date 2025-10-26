// Tema claro e escuro usando Context API com detecção automática do tema do sistema
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";

interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  border: string;
  tabActive: string;
  tabInactive: string;
}

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (dark: boolean) => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentScheme = Appearance.getColorScheme();
    setIsDark(currentScheme === "dark");

    const subscription = Appearance.addChangeListener(
      ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
        setIsDark(colorScheme === "dark");
      }
    );

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const setDark = (dark: boolean) => setIsDark(dark);

  // 🎨 Definição de paletas de cores
  const lightColors: ThemeColors = {
    background: "#FFFFFF",
    text: "#111827",
    primary: "#D97706",
    secondary: "#FBBF24",
    border: "#E5E7EB",
    tabActive: "#D97706",
    tabInactive: "#6B7280",
  };

  const darkColors: ThemeColors = {
    background: "#1F2937",
    text: "#F9FAFB",
    primary: "#F59E0B",
    secondary: "#FCD34D",
    border: "#374151",
    tabActive: "#F59E0B",
    tabInactive: "#9CA3AF",
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
