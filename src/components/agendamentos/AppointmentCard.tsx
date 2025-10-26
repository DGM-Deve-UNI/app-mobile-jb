// Card de Agendamento
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Agendamento } from "@/src/types/agendamento";

interface AppointmentCardProps {
  agendamento: Agendamento;
  onPress: (agendamento: Agendamento) => void;
  isDark: boolean;
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  agendamento,
  onPress,
  isDark,
  getStatusColor,
  getStatusText,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(agendamento)}
      className={`rounded-2xl border p-4 mb-4 ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } shadow-md`}
    >
      <View className="flex-row justify-between items-start mb-2">
        <Text
          className={`font-bold text-lg flex-1 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {agendamento.servico}
        </Text>
        <View
          className={`px-3 py-1 rounded-full ${getStatusColor(
            agendamento.status
          )}`}
        >
          <Text className="text-white text-xs font-semibold">
            {getStatusText(agendamento.status)}
          </Text>
        </View>
      </View>

      <Text
        className={`text-sm mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}
      >
        👨‍💼 {agendamento.profissional}
      </Text>
      <Text
        className={`text-sm mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}
      >
        📅 {agendamento.data.toLocaleDateString("pt-BR")} às {agendamento.hora}
      </Text>
      <Text
        className={`text-sm font-semibold ${
          isDark ? "text-amber-300" : "text-amber-600"
        }`}
      >
        💰 {agendamento.valor}
      </Text>

      <View className="flex-row justify-between items-center mt-3">
        <Text
          className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          Criado em: {agendamento.dataCriacao.toLocaleDateString("pt-BR")}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color={isDark ? "#9CA3AF" : "#6B7280"}
          accessibilityLabel="Ver detalhes do agendamento"
        />
      </View>
    </TouchableOpacity>
  );
};