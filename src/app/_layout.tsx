import React from "react";
import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { tabBarStyles, tabBarColors } from "@/src/styles/tabBarStyles";
import { View } from "react-native";
// ----------------------------------------------------------------------------
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho padrão
        tabBarStyle: tabBarStyles.tabBar, // Estilos personalizados para a tab bar
        tabBarLabelStyle: tabBarStyles.label, // Estilos personalizados para os rótulos
        tabBarActiveTintColor: tabBarColors.active, // Cor dos ícones ativos
        tabBarInactiveTintColor: tabBarColors.inactive, // Cor dos ícones inativos
      }}
    >
  {/* --= Tela 1 =-- */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              className={`w-20 h-9 rounded-full items-center justify-center ${
                focused ? "bg-yellow-400" : ""
              }`}
            >
              <Feather
                name="home"
                size={size}
                color={focused ? "#fff" : color}
              />
            </View>
          ),
        }}
      />
  {/* --= Tela 2 =-- */}
      <Tabs.Screen
        name="pages/agendamento"
        options={{
          title: "Agendamentos",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`w-20 h-9 rounded-full items-center justify-center ${
                focused ? "bg-yellow-400" : ""
              }`}
            >
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={focused ? "#fff" : color}
              />
            </View>
          ),
        }}
      />
  {/* --= Tela 3 =-- */}
      <Tabs.Screen
        name="pages/perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color, focused }) => (
            <View
              className={`w-20 h-9 rounded-full items-center justify-center ${
                focused ? "bg-yellow-400" : ""
              }`}
            >
              <Feather
                name="user"
                size={size}
                color={focused ? "#fff" : color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
