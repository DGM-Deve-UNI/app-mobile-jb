// src/app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View, Text } from "react-native";
import { ThemeProvider, useTheme } from "@/src/contexts/ThemeContext";
import { AuthProvider, useAuth } from "@/src/contexts/AuthContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <RootStack />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function RootStack() {
  const { user, isLoading } = useAuth();
  const { isDark } = useTheme();

  // 🔹 Loader enquanto carrega o estado do usuário (Splash)
  if (isLoading) {
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
            Carregando...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // 🔹 Navegação principal
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "none", // remove animação de transição
        contentStyle: { backgroundColor: isDark ? "#111827" : "#ffffff" }, // 🔹 fundo da Stack
      }}
    >
      {/* Rotas protegidas para usuário logado */}
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Rotas para usuário não logado */}
      <Stack.Protected guard={!user}>
        <Stack.Screen
          name="login"
          options={{ headerShown: false, animation: "none" }}
        />
        {/* Adicione cadastro, onboarding, confirmar etc aqui */}
      </Stack.Protected>
    </Stack>
  );
}
