// src/components/agendamentos/ImportantInfoCard.tsx
import React from "react";
import { View, Text } from "react-native";

interface ImportantInfoCardProps {
  isDark: boolean;
}

export const ImportantInfoCard: React.FC<ImportantInfoCardProps> = ({
  isDark,
}) => {
  return (
    <View
      className={`rounded-2xl border p-5 ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } shadow-md`}
    >
      <Text
        className={`text-lg font-bold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        ℹ️ Informações Importantes
      </Text>
      <View className="space-y-2">
        <Text
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          • Chegue 10 minutos antes do horário marcado
        </Text>
        <Text
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          • Cancelamentos com até 2 horas de antecedência
        </Text>
        <Text
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          • Aceitamos cartão, pix e dinheiro
        </Text>
        <Text
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          • Tempo médio do serviço: 30-45 minutos
        </Text>
      </View>
    </View>
  );
};
