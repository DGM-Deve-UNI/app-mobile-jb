// src/app/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTabBarStyles } from "@/src/styles/tabBarStyles";
import { View } from "react-native";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Componente que usa o hook dentro do ThemeProvider
function TabNavigator() {
  const { tabBarStyles, tabBarColors } = useTabBarStyles();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyles.tabBar as any,
        tabBarLabelStyle: tabBarStyles.label as any,
        tabBarActiveTintColor: tabBarColors.active,
        tabBarInactiveTintColor: tabBarColors.inactive,
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

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <TabNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
