// src/components/agendamentos/steps/ConfirmationStep.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/src/components/ui/Button";

interface ConfirmationStepProps {
  servico: string;
  profissional: string;
  data: Date;
  hora: string;
  nome: string;
  email: string;
  whatsapp: string;
  observacoes: string;
  onConfirm: () => void;
  onBack: () => void;
  isDark: boolean;
  getPrecoServico: () => string;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  servico,
  profissional,
  data,
  hora,
  nome,
  email,
  whatsapp,
  observacoes,
  onConfirm,
  onBack,
  isDark,
  getPrecoServico,
}) => {
  return (
    <View>
      <View className="items-center mb-2">
        <Ionicons
          name="checkmark-circle"
          size={32}
          color={isDark ? "#FFC107" : "#F59E0B"}
        />
      </View>
      <Text
        className={`text-xl font-bold text-center mb-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Confirmação
      </Text>

      <View
        className={`rounded-xl border-2 p-5 mb-6 ${
          isDark
            ? "bg-gray-700 border-gray-600"
            : "bg-amber-50 border-amber-200"
        }`}
      >
        <Text
          className={`text-lg font-bold text-center mb-4 ${
            isDark ? "text-white" : "text-amber-800"
          }`}
        >
          📋 Resumo do Agendamento
        </Text>

        <View className="space-y-3">
          <View className="flex-row justify-between items-start">
            <Text
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              } flex-1`}
            >
              Serviço:
            </Text>
            <Text
              className={`font-semibold text-right flex-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {servico.split(" - ")[0]}
            </Text>
          </View>
          <View className="flex-row justify-between items-start">
            <Text
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              } flex-1`}
            >
              Profissional:
            </Text>
            <Text
              className={`font-semibold text-right flex-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {profissional}
            </Text>
          </View>
          <View className="flex-row justify-between items-start">
            <Text
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              } flex-1`}
            >
              Data e Horário:
            </Text>
            <Text
              className={`font-semibold text-right flex-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {data.toLocaleDateString("pt-BR")} às {hora}
            </Text>
          </View>
          <View className="flex-row justify-between items-start">
            <Text
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              } flex-1`}
            >
              Valor:
            </Text>
            <Text className={`font-bold text-right flex-1 text-amber-500`}>
              {getPrecoServico()}
            </Text>
          </View>

          <View className="border-t pt-3 mt-2 border-gray-300">
            <Text
              className={`text-sm font-medium mb-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Seus dados:
            </Text>
            <Text
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {nome}
            </Text>
            <Text
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {email}
            </Text>
            <Text
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {whatsapp}
            </Text>
          </View>

          {observacoes && (
            <View className="border-t pt-3 mt-2 border-gray-300">
              <Text
                className={`text-sm font-medium mb-1 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Observações:
              </Text>
              <Text
                className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {observacoes}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View
        className={`p-4 rounded-lg mb-6 ${
          isDark ? "bg-gray-700" : "bg-blue-50"
        }`}
      >
        <Text
          className={`text-center text-sm ${
            isDark ? "text-blue-300" : "text-blue-700"
          }`}
        >
          💡 Você receberá um lembrete por WhatsApp 1 hora antes do horário
          marcado.
        </Text>
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Button
            title="Voltar"
            onPress={onBack}
            variant="secondary"
            isDark={isDark}
            size="medium"
          />
        </View>
        <View className="flex-1">
          <Button
            title="Confirmar Agendamento"
            onPress={onConfirm}
            variant="primary"
            isDark={isDark}
            size="medium"
            icon="checkmark"
          />
        </View>
      </View>
    </View>
  );
};
