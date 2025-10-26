// Tela de Login com validação de formulário e feedback ao usuário
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useAuth } from "@/src/contexts/AuthContext";
import { AuthInput } from "@/src/components/ui/AuthInput";
import { Button } from "@/src/components/ui/Button";
import { BaseModal } from "@/src/components/ui/BaseModal";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LoginScreen() {
  const { isDark } = useTheme();
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ phone: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const validateForm = () => {
    const newErrors = { phone: "" };

    if (!phone.trim()) {
      newErrors.phone = "Celular é obrigatório";
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(phone)) {
      newErrors.phone = "Celular inválido (formato: (11) 99999-9999)";
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

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      await login(phone);
      // Redireciona para confirmação após cadastro
      setTimeout(() => {
        setShowModal(false);
        router.push("./confirmar");
      }, 100);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setModalMessage("Erro ao fazer login. Tente novamente.");
      setShowModal(true);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implementar login com Google
    setModalMessage("Login com Google em desenvolvimento");
    setShowModal(true);
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6 py-8">
          {/* Logo e Título */}
          <View className="items-center mb-12">
            {/* <View
              className={`w-32 h-32 rounded-full items-center justify-center mb-6 ${
                isDark ? "bg-amber-500" : "bg-amber-400"
              }`}
            >
              <Text className="text-white text-4xl font-bold">JB</Text>
            </View> */}
            <View
              className={`w-32 h-32 rounded-full items-center justify-center mb-16`}
            >
              <Image
                source={require("@/src/assets/images/icon.png")} // caminho da sua imagem
                style={{ width: 200, height: 200, borderRadius: 50 }} // ajusta o tamanho e mantém circular
                resizeMode="contain"
              />
            </View>

            <Text
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Login
            </Text>
            <Text
              className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Entre na sua conta
            </Text>
          </View>

          {/* Formulário */}
          <View className="mb-8">
            <AuthInput
              label="Digite seu celular"
              value={phone}
              onChangeText={(text) => setPhone(formatPhone(text))}
              placeholder="(11) 99999-9999"
              keyboardType="phone-pad"
              error={errors.phone}
            />

            <Button
              title="Entrar"
              onPress={handleLogin}
              variant="primary"
              size="medium"
              icon="login"
              iconSize={20}
              textSize={20}
              isDark={isDark}
              loading={isLoading}
              disabled={isLoading}
            />
          </View>

          {/* Divisor */}
          <View className="flex-row items-center mb-6">
            <View
              className={`flex-1 h-px ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            />
            <Text
              className={`mx-4 text-lg ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ou
            </Text>
            <View
              className={`flex-1 h-px ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
            />
          </View>

          {/* Login com Google */}
          <TouchableOpacity
            onPress={handleGoogleLogin}
            className={`flex-row items-center justify-center rounded-xl border-2 p-4 mb-6 ${
              isDark
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-300"
            }`}
          >
            <FontAwesome name="google" size={24} color="#DB4437" />
            <Text
              className={`text-lg font-semibold ml-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Login com Google
            </Text>
          </TouchableOpacity>

          {/* Cadastre-se */}
          <View className="flex-row justify-center">
            <Text
              className={`text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Não tem conta?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("./cadastro")}>
              <Text className="text-base font-semibold text-amber-500">
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View
          className={`px-6 py-4 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            App by JohnBravo®
          </Text>
          <Text
            className={`text-center text-sm mt-1 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Versão: 1.0.0.0
          </Text>
        </View>

        {/* Modal de Feedback */}
        <BaseModal
          visible={showModal}
          onClose={() => setShowModal(false)}
          title="Atenção"
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
