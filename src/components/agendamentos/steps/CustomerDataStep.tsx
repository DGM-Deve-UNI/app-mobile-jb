// Componente CustomerDataStep para coleta de dados do cliente com suporte a temas claro e escuro
import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/src/components/ui/Button";
import { FormErrors } from "@/src/types/agendamento";

interface CustomerDataStepProps {
  nome: string;
  email: string;
  whatsapp: string;
  observacoes: string;
  errors: FormErrors;
  onNomeChange: (text: string) => void;
  onEmailChange: (text: string) => void;
  onWhatsappChange: (text: string) => void;
  onObservacoesChange: (text: string) => void;
  onNext: () => void;
  onBack: () => void;
  isDark: boolean;
  formatarWhatsApp: (text: string) => string;
}

export const CustomerDataStep: React.FC<CustomerDataStepProps> = ({
  nome,
  email,
  whatsapp,
  observacoes,
  errors,
  onNomeChange,
  onEmailChange,
  onWhatsappChange,
  onObservacoesChange,
  onNext,
  onBack,
  isDark,
  formatarWhatsApp,
}) => {
  return (
    <View>
      <View className="items-center mb-2">
        <Ionicons
          name="person"
          size={32}
          color={isDark ? "#FFC107" : "#F59E0B"}
        />
      </View>
      <Text
        className={`text-xl font-bold text-center mb-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Seus Dados
      </Text>

      <View className="mb-4">
        <Text
          className={`text-base font-medium mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Nome completo *
        </Text>
        <TextInput
          className={`rounded-xl border-2 p-4 text-base ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          } ${errors.nome ? "border-red-500" : ""}`}
          placeholder="Digite seu nome completo"
          placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
          value={nome}
          onChangeText={onNomeChange}
        />
        {errors.nome && (
          <Text className="text-red-500 text-sm mt-1">{errors.nome}</Text>
        )}
      </View>

      <View className="mb-4">
        <Text
          className={`text-base font-medium mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          E-mail *
        </Text>
        <TextInput
          className={`rounded-xl border-2 p-4 text-base ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          } ${errors.email ? "border-red-500" : ""}`}
          placeholder="seu@email.com"
          placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={onEmailChange}
        />
        {errors.email && (
          <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
        )}
      </View>

      <View className="mb-6">
        <Text
          className={`text-base font-medium mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          WhatsApp *
        </Text>
        <TextInput
          className={`rounded-xl border-2 p-4 text-base ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          } ${errors.whatsapp ? "border-red-500" : ""}`}
          placeholder="(11) 99999-9999"
          placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
          keyboardType="phone-pad"
          value={whatsapp}
          onChangeText={(text) => onWhatsappChange(formatarWhatsApp(text))}
          maxLength={15}
        />
        {errors.whatsapp && (
          <Text className="text-red-500 text-sm mt-1">{errors.whatsapp}</Text>
        )}
      </View>

      <View className="mb-6">
        <Text
          className={`text-base font-medium mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Observações (opcional)
        </Text>
        <TextInput
          className={`rounded-xl border-2 p-4 text-base h-24 ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
          placeholder="Alguma observação especial sobre o serviço..."
          placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
          multiline
          textAlignVertical="top"
          value={observacoes}
          onChangeText={onObservacoesChange}
        />
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
            title="Ver Resumo"
            onPress={onNext}
            variant="primary"
            isDark={isDark}
            size="medium"
          />
        </View>
      </View>
    </View>
  );
};
