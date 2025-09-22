import React from "react";
import { tabBarStyles, tabBarColors } from "@/styles/tabBarStyles";
import { TabBarBackground } from "@/components/navigation/TabBarBackground";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// =============================================================================
// - Pages -
import Home from "@/app/pages/Home"; 
import Agendamento from "@/app/pages/Agendamento";
import Perfil from "@/app/pages/Perfil";
import Config from "@/app/pages/Config";

import { Entypo, Feather } from "@expo/vector-icons";
// =============================================================================
// - Navegação -
const Tab = createBottomTabNavigator();
// - Configuração das rotas com a tab bar personalizada -
export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho padrão
        tabBarStyle: tabBarStyles.tabBar, // Estilos personalizados para a tab bar
        tabBarLabelStyle: tabBarStyles.label, // Estilos personalizados para os rótulos
        tabBarBackground: () => <TabBarBackground />, // Fundo com efeito de desfoque
        tabBarActiveTintColor: tabBarColors.active, // Cor dos ícones ativos
        tabBarInactiveTintColor: tabBarColors.inactive, // Cor dos ícones inativos
      }}
    >
      {/* Menus */}
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Agendamento"
        component={Agendamento}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Configuração"
        component={Config}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
