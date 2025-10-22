// src/components/agendamentos/AppointmentDetailsModal.tsx
import { BaseModal } from "@/src/components/ui/BaseModal";
import { Button } from "@/src/components/ui/Button";
import { Agendamento } from "@/src/types/agendamento";
import React from "react";
import { Text, View } from "react-native";

interface AppointmentDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  agendamento: Agendamento | null;
  isDark: boolean;
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

export const AppointmentDetailsModal: React.FC<
  AppointmentDetailsModalProps
> = ({
  visible,
  onClose,
  agendamento,
  isDark,
  getStatusColor,
  getStatusText,
}) => {
  if (!agendamento) return null;

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Detalhes do Agendamento"
      isDark={isDark}
      actions={
        <Button
          title="Fechar"
          onPress={onClose}
          variant="primary"
          isDark={isDark}
        />
      }
    >
      <View className="gap-2">
        <View className="flex-row justify-between">
          <Text className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Serviço:
          </Text>
          <Text
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {agendamento.servico}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Profissional:
          </Text>
          <Text
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {agendamento.profissional}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Data e Horário:
          </Text>
          <Text
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {agendamento.data.toLocaleDateString("pt-BR")} às {agendamento.hora}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Valor:
          </Text>
          <Text className={`font-bold text-amber-500`}>
            {agendamento.valor}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Status:
          </Text>
          <View
            className={`px-3 py-1 rounded-full ${getStatusColor(agendamento.status)}`}
          >
            <Text className="text-white text-xs font-semibold">
              {getStatusText(agendamento.status)}
            </Text>
          </View>
        </View>

        <View className="border-t pt-3 gap-2 border-gray-300">
          <Text
            className={`text-lg font-bold mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Seus dados:
          </Text>
          <Text
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            👤 {agendamento.nome}
          </Text>
          <Text
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            📧 {agendamento.email}
          </Text>
          <Text
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            📱 {agendamento.whatsapp}
          </Text>
        </View>

        {agendamento.observacoes && (
          <View className="border-t pt-3 gap-2 border-gray-300">
            <Text
              className={`text-lg font-bold mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Observações:
            </Text>
            <Text
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {agendamento.observacoes}
            </Text>
          </View>
        )}

        <View className="border-t pt-3 border-gray-300">
          <Text
            className={`text-ls ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Agendamento criado em:{" "}
            {agendamento.dataCriacao.toLocaleDateString("pt-BR")} às{" "}
            {agendamento.dataCriacao.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>
    </BaseModal>
  );
};
