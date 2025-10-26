// Componente ServiceSelectionStep para seleção de serviço e profissional com suporte a temas claro e escuro
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CustomPicker } from "@/src/components/ui/CustomPicker";
import { Button } from "@/src/components/ui/Button";

interface ServiceSelectionStepProps {
  servico: string;
  profissional: string;
  onServicoChange: (value: string) => void;
  onProfissionalChange: (value: string) => void;
  onNext: () => void;
  isDark: boolean;
  servicosOptions: { label: string; value: string }[];
  profissionaisOptions: { label: string; value: string }[];
}

export const ServiceSelectionStep: React.FC<ServiceSelectionStepProps> = ({
  servico,
  profissional,
  onServicoChange,
  onProfissionalChange,
  onNext,
  isDark,
  servicosOptions,
  profissionaisOptions,
}) => {
  return (
    <View>
      <View className="items-center mb-2">
        <Ionicons name="cut" size={32} color={isDark ? "#FFC107" : "#F59E0B"} />
      </View>
      <Text
        className={`text-xl font-bold text-center mb-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Escolha seu Serviço
      </Text>

      <View className="mb-6">
        <Text
          className={`text-base font-medium mb-3 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Qual serviço você precisa?
        </Text>
        <CustomPicker
          selectedValue={servico}
          onValueChange={onServicoChange}
          items={servicosOptions}
          placeholder="Selecione um serviço..."
          isDark={isDark}
        />
      </View>

      <View className="mb-8">
        <Text
          className={`text-base font-medium mb-3 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Escolha seu barbeiro:
        </Text>
        <CustomPicker
          selectedValue={profissional}
          onValueChange={onProfissionalChange}
          items={profissionaisOptions}
          placeholder="Selecione um profissional..."
          isDark={isDark}
        />
      </View>

      {servico && profissional && (
        <View
          className={`p-4 rounded-lg mb-6 ${
            isDark ? "bg-gray-700" : "bg-amber-50"
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              isDark ? "text-amber-300" : "text-amber-700"
            }`}
          >
            ✅ {servico.split(" - ")[0]} com {profissional}
          </Text>
        </View>
      )}

      <Button
        title="Continuar para Data e Horário"
        onPress={onNext}
        variant="primary"
        isDark={isDark}
        disabled={!servico || !profissional}
        icon="calendar"
      />
    </View>
  );
};
