// Tela de Cadastro de Usuário com validação de formulário e feedback ao usuário
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useAuth } from "@/src/contexts/AuthContext";
import { AuthInput } from "@/src/components/ui/AuthInput";
import { Button } from "@/src/components/ui/Button";
import { BaseModal } from "@/src/components/ui/BaseModal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export default function CadastroScreen() {
  const { isDark } = useTheme();
  const { signup, isLoading } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      birthDate: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Celular é obrigatório";
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Celular inválido";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const formatPhone = (text: string) => {
    const numbers = text.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      await signup(formData);
      setModalMessage("Cadastro realizado com sucesso! Verifique seu celular.");
      setShowModal(true);
      // Redireciona para confirmação após cadastro
      setTimeout(() => {
        setShowModal(false);
        router.push("./confirmar");
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setModalMessage("Erro ao cadastrar. Tente novamente.");
      setShowModal(true);
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        birthDate: selectedDate.toISOString().split("T")[0],
      }));
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 px-6 py-8">
          {/* Header com Botão Voltar */}
          {/* <View className="flex-row items-center mb-8">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <Ionicons
                name="arrow-back" // ícone do Ionicons
                size={28} // tamanho do ícone
                color={isDark ? "white" : "black"} // cor conforme tema
              />
            </TouchableOpacity>
            <Text
              className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Cadastre-se
            </Text>
          </View> */}

          {/* Formulário */}
          <View className="mb-8">
            <AuthInput
              label="Nome completo"
              value={formData.name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, name: text }))
              }
              placeholder="Seu nome completo"
              error={errors.name}
              autoCapitalize="words"
            />

            <AuthInput
              label="E-mail"
              value={formData.email}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, email: text }))
              }
              placeholder="seu@email.com"
              keyboardType="email-address"
              error={errors.email}
            />

            <AuthInput
              label="Telefone/Celular"
              value={formData.phone}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, phone: formatPhone(text) }))
              }
              placeholder="(11) 99999-9999"
              keyboardType="phone-pad"
              error={errors.phone}
            />

            {/* Data de Nascimento */}
            <View className="mb-4">
              <Text
                className={`text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Data de Nascimento
              </Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className={`rounded-xl border-2 p-4 ${
                  isDark
                    ? "bg-gray-800 border-gray-600"
                    : "bg-white border-gray-300"
                } ${errors.birthDate ? "border-red-500" : ""}`}
              >
                <Text
                  className={`text-lg ${
                    formData.birthDate
                      ? isDark
                        ? "text-white"
                        : "text-gray-900"
                      : isDark
                        ? "text-gray-400"
                        : "text-gray-500"
                  }`}
                >
                  {formData.birthDate || "Selecione sua data de nascimento"}
                </Text>
              </TouchableOpacity>
              {errors.birthDate && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.birthDate}
                </Text>
              )}
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={
                  formData.birthDate ? new Date(formData.birthDate) : new Date()
                }
                mode="date"
                display="default"
                maximumDate={new Date()}
                onChange={handleDateChange}
              />
            )}

            {/* Botões */}
            <View className="flex-row gap-4">
              <View className="flex-1">
                <Button
                  title="Cancelar"
                  onPress={() => router.back()}
                  variant="secondary"
                  isDark={isDark}
                />
              </View>
              <View className="flex-1">
                <Button
                  title="Cadastrar"
                  onPress={handleSignup}
                  variant="primary"
                  isDark={isDark}
                  loading={isLoading}
                  disabled={isLoading}
                />
              </View>
            </View>
          </View>

          {/* Voltar ao Login */}
          <View className="flex-row justify-center">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => router.push("./login")}
            >
              <Ionicons
                name="arrow-back"
                size={20}
                color="#f59e0b"
                className="mr-1"
              />
              <Text className="text-lg font-semibold text-amber-500">
                Voltar ao Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        {/* <View
          className={`px-6 py-4 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <Text
            className={`text-center text-sm ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            App by JohnBravo
          </Text>
          <Text
            className={`text-center text-xs mt-1 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Versão: 1.0.0.0
          </Text>
        </View> */}

        {/* Modal de Feedback */}
        <BaseModal
          visible={showModal}
          onClose={() => setShowModal(false)}
          title="Cadastro"
          isDark={isDark}
          actions={
            <Button
              title="OK"
              onPress={() => setShowModal(false)}
              variant="primary"
              isDark={isDark}
            />
          }
        >
          <Text
            className={`text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {modalMessage}
          </Text>
        </BaseModal>
      </ScrollView>
    </SafeAreaView>
  );
}
