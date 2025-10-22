// src/components/agendamentos/ProgressIndicator.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ProgressIndicatorProps {
  step: number;
  isDark: boolean;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  step,
  isDark,
}) => {
  const steps = [
    { number: 1, label: "Serviço" },
    { number: 2, label: "Data/Hora" },
    { number: 3, label: "Dados" },
    { number: 4, label: "Confirmação" },
  ];

  return (
    <View className="mb-8">
      <View className="flex-row justify-between items-center mb-3 px-2">
        {steps.map((stepItem, index) => (
          <React.Fragment key={stepItem.number}>
            <View className="items-center flex-1">
              <View
                className={`w-10 h-10 rounded-full items-center justify-center border-2 ${
                  step >= stepItem.number
                    ? "bg-amber-500 border-amber-500"
                    : `${
                        isDark
                          ? "bg-gray-800 border-gray-600"
                          : "bg-white border-gray-300"
                      }`
                }`}
              >
                {step > stepItem.number ? (
                  <Ionicons name="checkmark" size={20} color="white" />
                ) : (
                  <Text
                    className={`font-bold text-sm ${
                      step >= stepItem.number
                        ? "text-white"
                        : isDark
                          ? "text-gray-400"
                          : "text-gray-600"
                    }`}
                  >
                    {stepItem.number}
                  </Text>
                )}
              </View>
              <Text
                className={`text-xs mt-2 text-center ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stepItem.label}
              </Text>
            </View>
            {index < steps.length - 1 && (
              <View
                className={`flex-1 h-0.5 mx-2 ${
                  step > stepItem.number
                    ? "bg-amber-500"
                    : isDark
                      ? "bg-gray-700"
                      : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};
