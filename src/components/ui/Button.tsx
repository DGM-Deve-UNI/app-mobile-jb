import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  isDark?: boolean;
  icon?: string;
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
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return `bg-amber-500 ${disabled ? "opacity-50" : ""}`;
      case "secondary":
        return `bg-gray-500 ${disabled ? "opacity-50" : ""}`;
      case "outline":
        return `border-2 ${isDark ? "border-gray-600" : "border-gray-300"} ${disabled ? "opacity-50" : ""}`;
      default:
        return `bg-amber-500 ${disabled ? "opacity-50" : ""}`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "px-3 py-2";
      case "medium":
        return "px-4 py-3";
      case "large":
        return "px-6 py-4";
      default:
        return "px-4 py-3";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "primary":
      case "secondary":
        return "text-white";
      case "outline":
        return isDark ? "text-white" : "text-gray-900";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`rounded-xl flex-row items-center justify-center ${getVariantStyles()} ${getSizeStyles()} ${
        disabled ? "" : "active:opacity-80"
      }`}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "outline" ? (isDark ? "white" : "black") : "white"}
        />
      ) : (
        <>
          {icon && (
            <Ionicons
              name={icon as any}
              size={16}
              color={
                variant === "outline" ? (isDark ? "white" : "black") : "white"
              }
              className="mr-2"
            />
          )}
          <Text
            className={`font-semibold text-center ${getTextStyles()} ${
              size === "small"
                ? "text-sm"
                : size === "large"
                  ? "text-lg"
                  : "text-base"
            }`}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
