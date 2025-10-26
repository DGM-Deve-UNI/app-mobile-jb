// Botão estilizado com animação, tema dinâmico e suporte a ícones
import React, { useRef } from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = keyof typeof Ionicons.glyphMap;

export type CustomIconName =
  | "login"
  | "check"
  | "confirm"
  | "back"
  | "next"
  | "edit"
  | "delete"
  | "save";

const iconMap: Record<CustomIconName, IoniconName> = {
  login: "log-in-outline",
  check: "checkmark",
  confirm: "checkmark-circle",
  back: "arrow-back",
  next: "arrow-forward",
  edit: "create-outline",
  delete: "trash-outline",
  save: "save-outline",
};

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  isDark?: boolean;
  icon?: CustomIconName | IoniconName;
  iconSize?: number;
  textSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  isDark = false,
  icon,
  iconSize,
  textSize,
}) => {
  // ⚡️ animação de clique
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 40,
      bounciness: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 4,
    }).start();
  };

  // 🎨 estilos dinâmicos
  const bgColor =
    variant === "primary"
      ? isDark
        ? "#F59E0B"
        : "#D97706"
      : variant === "secondary"
        ? isDark
          ? "#4B5563"
          : "#6B7280"
        : "transparent";

  const textColor =
    variant === "outline"
      ? isDark
        ? "#F9FAFB"
        : "#111827"
      : "#FFFFFF";

  const borderColor =
    variant === "outline"
      ? isDark
        ? "#6B7280"
        : "#D1D5DB"
      : "transparent";

  const shadowStyle = !isDark
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
      }
    : {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      };

  const padding =
    size === "small" ? 10 : size === "large" ? 16 : 12;
  const radius = 12;

  const iconSizeFinal = iconSize ?? (size === "small" ? 18 : size === "large" ? 28 : 22);
  const textSizeFinal = textSize ?? (size === "small" ? 14 : size === "large" ? 20 : 16);

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Animated.View
        style={[
          {
            transform: [{ scale }],
            backgroundColor: bgColor,
            padding,
            borderRadius: radius,
            borderWidth: variant === "outline" ? 2 : 0,
            borderColor,
            opacity: disabled ? 0.6 : 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          shadowStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <>
            {icon && (
              <Ionicons
                name={(iconMap[icon as CustomIconName] || icon) as IoniconName}
                size={iconSizeFinal}
                color={textColor}
                style={{ marginRight: 8 }}
              />
            )}
            <Text
              style={{
                color: textColor,
                fontSize: textSizeFinal,
                fontWeight: "700",
              }}
            >
              {title}
            </Text>
          </>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
