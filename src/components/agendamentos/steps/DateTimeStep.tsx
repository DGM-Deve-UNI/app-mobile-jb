// Componente DateTimeStep para seleção de data e horário com suporte a temas claro e escuro
import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CustomPicker } from "@/src/components/ui/CustomPicker";
import { Button } from "@/src/components/ui/Button";

interface DateTimeStepProps {
  data: Date;
  hora: string;
  mostrarCalendario: boolean;
  onDataChange: (date: Date) => void;
  onHoraChange: (hora: string) => void;
  onMostrarCalendarioChange: (show: boolean) => void;
  onNext: () => void;
  onBack: () => void;
  isDark: boolean;
  horasOptions: { label: string; value: string }[];
}

export const DateTimeStep: React.FC<DateTimeStepProps> = ({
  data,
  hora,
  mostrarCalendario,
  onDataChange,
  onHoraChange,
  onMostrarCalendarioChange,
  onNext,
  onBack,
  isDark,
  horasOptions,
}) => {
  return (
    <View>
      <View className="items-center mb-2">
        <Ionicons
          name="calendar"
          size={32}
          color={isDark ? "#FFC107" : "#F59E0B"}
        />
      </View>
      <Text
        className={`text-xl font-bold text-center mb-6 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Data e Horário
      </Text>

      <View className="mb-6">
        <Text
          className={`text-base font-medium mb-3 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Escolha a data:
        </Text>
        <TouchableOpacity
          onPress={() => onMostrarCalendarioChange(true)}
          className={`rounded-xl border-2 p-4 flex-row items-center justify-between ${
            isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
          }`}
        >
          <Text
            className={`text-lg ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {data.toLocaleDateString("pt-BR")}
          </Text>
          <Ionicons
            name="calendar"
            size={24}
            color={isDark ? "#FFC107" : "#F59E0B"}
          />
        </TouchableOpacity>

        {mostrarCalendario && (
          <DateTimePicker
            value={data}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            minimumDate={new Date()}
            onChange={(event, selectedDate) => {
              onMostrarCalendarioChange(false);
              if (selectedDate) onDataChange(selectedDate);
            }}
          />
        )}
      </View>

      <View className="mb-8">
        <Text
          className={`text-base font-medium mb-3 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Escolha o horário:
        </Text>
        <CustomPicker
          selectedValue={hora}
          onValueChange={onHoraChange}
          items={horasOptions}
          placeholder="Selecione um horário..."
          isDark={isDark}
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
            title="Continuar"
            onPress={onNext}
            variant="primary"
            isDark={isDark}
            disabled={!hora}
            size="medium"
          />
        </View>
      </View>
    </View>
  );
};
