// src/app/(auth)/_layout.tsx
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";

export default function AuthLayout() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Carregando...");

  // 🔹 Simula algum processo inicial e mensagem dinâmica
  useEffect(() => {
    setLoadingMessage("Verificando autenticação...");

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // pequeno delay para suavizar transição

    return () => clearTimeout(timeout);
  }, []);

  // 🔹 Loader inicial (evita flash branco e exibe mensagem)
  if (loading) {
    return (
      <SafeAreaView
        className={`flex-1 justify-center items-center ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <View className="items-center">
          <ActivityIndicator
            size="large"
            color={isDark ? "#eab308" : "#2563eb"}
          />
          <Text
            className={`mt-3 text-lg font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {loadingMessage}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // 🔹 Stack principal de Auth
  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Stack
        screenOptions={{
          animation: "none",
          headerStyle: { backgroundColor: isDark ? "#111827" : "#ffffff" },
          headerTintColor: isDark ? "#f9fafb" : "#111827",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: isDark ? "#111827" : "#ffffff" },
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" options={{ title: "Criar Conta" }} />
        <Stack.Screen
          name="confirmar"
          options={{ title: "Confirmar Código" }}
        />
      </Stack>
    </SafeAreaView>
  );
}
