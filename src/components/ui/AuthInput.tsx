// Componente AuthInput para entrada de autenticação com suporte a temas claro e escuro
import React from "react";
import { TextInput, Text, View } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";

interface AuthInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  error?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  error,
  autoCapitalize = "none",
}) => {
  const { isDark } = useTheme();

  return (
    <View className="mb-4">
      <Text
        className={`text-sm font-medium mb-2 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </Text>
      <TextInput
        className={`rounded-xl border-2 p-4 text-lg ${
          isDark
            ? "bg-gray-800 border-gray-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        } ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
        placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};