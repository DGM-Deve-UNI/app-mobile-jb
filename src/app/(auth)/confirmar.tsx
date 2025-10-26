// Tela de Confirmação de Número de Telefone com entrada de código e feedback ao usuário
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useAuth } from "@/src/contexts/AuthContext";
import { Button } from "@/src/components/ui/Button";
import { BaseModal } from "@/src/components/ui/BaseModal";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";


export default function ConfirmarScreen() {
  const { isDark } = useTheme();
  const { confirmPhone, isLoading } = useAuth();
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    // Permite apenas números
    const numericText = text.replace(/[^0-9]/g, "");

    const newCode = [...code];
    newCode[index] = numericText;
    setCode(newCode);
    setError("");

    // Avança para o próximo input
    if (numericText && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Volta para o input anterior se apagou
    if (!numericText && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // No handleConfirm, deixe apenas:
const handleConfirm = async () => {
  const fullCode = code.join("");

  if (fullCode.length !== 6) {
    setError("Código deve ter 6 dígitos");
    return;
  }

  try {
    await confirmPhone(fullCode);
    setModalMessage("Número confirmado com sucesso!");
    setShowModal(true);

    // Redireciona para a Home (index)
    setTimeout(() => {
      router.replace("../(tabs)/home");
    }, 1500);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    setModalMessage("Código inválido. Tente novamente.");
    setShowModal(true);
  }
};


  function handleResendCode(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

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
              Confirme seu número
            </Text>
          </View> */}
          
          <View className="flex-1 justify-center">
            {/* Instruções */}
            <Text
              className={`text-xl text-center mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Digite o código de 6 dígitos que enviamos para seu celular
            </Text>

            {/* Inputs do Código */}
            <View className="mb-8">
              <Text
                className={`text-lg font-medium mb-4 text-center ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Código:
              </Text>

              <View className="flex-row justify-center gap-4 mb-2">
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    className={`w-16 h-16 rounded-xl border-2 text-center text-xl font-bold ${
                      isDark
                        ? "bg-gray-800 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } ${error ? "border-red-500" : ""}`}
                    value={digit}
                    onChangeText={(text) => handleCodeChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    selectTextOnFocus
                  />
                ))}
              </View>

              {error && (
                <Text className="text-red-500 text-sm text-center mt-2">
                  {error}
                </Text>
              )}
            </View>

            {/* Botão Confirmar */}
            <Button
              title="Confirmar"
              onPress={handleConfirm}
              variant="primary"
              isDark={isDark}
              loading={isLoading}
              disabled={isLoading}
              icon="check"
            />

            {/* Reenviar Código */}
            <TouchableOpacity onPress={handleResendCode} className="mt-4">
              <Text className="text-center text-amber-500 font-semibold">
                Reenviar código
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
          onClose={() => {
            setShowModal(false);
            if (modalMessage === "Número confirmado com sucesso!") {
              router.replace("../index"); // vai para Index
            }
          }}
          title="Confirmação"
          isDark={isDark}
          actions={
            <Button
              title="OK"
              onPress={() => {
                setShowModal(false);
                if (modalMessage === "Número confirmado com sucesso!") {
                  router.replace("../(tab)/home"); // vai para Index
                }
              }}
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
