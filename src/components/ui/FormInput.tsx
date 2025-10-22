// components/FormInput.tsx
import React from "react";
import { TextInput, Text, View } from "react-native";

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  isDark: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  isDark,
}) => {
  return (
    <View className="mb-4">
      <Text
        className={`${isDark ? "text-white" : "text-gray-900"} mb-2 font-semibold`}
      >
        {label}
      </Text>
      <TextInput
        className={`border rounded-xl ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} p-3.5 text-base`}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
      />
    </View>
  );
};
