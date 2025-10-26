// Tab Layout das abas principais do app (home, agendamentos, perfil)
import React from "react";
import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { useTabBarStyles } from "@/src/styles/tabBarStyles";

export default function TabLayout() {
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
      {/* --= Tela 1: Home =-- */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Feed",
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

      {/* --= Tela 2: Agendamentos =-- */}
      <Tabs.Screen
        name="agendamento"
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

      {/* --= Tela 3: Perfil =-- */}
      <Tabs.Screen
        name="perfil"
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