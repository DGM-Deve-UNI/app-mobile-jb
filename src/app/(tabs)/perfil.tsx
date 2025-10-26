// Tela de Perfil do Usuário com opções de edição, notificações e tema
import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useProfile } from "@/src/hooks/useProfile";
import { useAuth } from "@/src/contexts/AuthContext";
import {
  ProfileHeader,
  UserCard,
  ProfileOptions,
  PersonalInfo,
  EditProfileModal,
  NotificationsModal,
} from "@/src/components/PerfilComponents";
import { ProfileOption } from "@/src/types/profile.types";
import { Button } from "@/src/components/ui/Button";

const Perfil: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logout } = useAuth(); // função de logout do AuthContext

  const {
    userData,
    notifications,
    editData,
    editModalVisible,
    notificationsModalVisible,
    successMessage,
    notificationSuccessMessage,
    setEditData,
    setEditModalVisible,
    setNotificationsModalVisible,
    handleSaveEdit,
    toggleNotification,
    handleSaveNotifications,
  } = useProfile();

  const themeIcon = isDark ? "sunny" : "moon";

  const options: ProfileOption[] = [
    {
      icon: "person",
      label: "Editar Perfil",
      onPress: () => {
        setEditData(userData);
        setEditModalVisible(true);
      },
    },
    {
      icon: "notifications",
      label: "Notificações",
      onPress: () => setNotificationsModalVisible(true),
    },
    {
      icon: themeIcon,
      label: `Tema ${isDark ? "Claro" : "Escuro"}`,
      onPress: toggleTheme,
    },
  ];

  const personalInfo = [
    { icon: "call", label: "Telefone", value: userData.phone },
    {
      icon: "calendar",
      label: "Data de Nascimento",
      value: userData.birthDate,
    },
    { icon: "location", label: "Endereço", value: userData.address },
  ];

  const colors = {
    surface: isDark ? "#1E1E1E" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#1A1A1A",
    textSecondary: isDark ? "#BDBDBD" : "#6B7280",
    primary: isDark ? "#FFC107" : "#F59E0B",
    border: isDark ? "#2C2C2C" : "#E5E7EB",
  };

  return (
    <View className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <ProfileHeader />

      {/* Conteúdo Principal com espaço para o TabBar */}
      <View className="flex-1">
        <ScrollView
          className="px-5 py-4"
          showsVerticalScrollIndicator
          bounces
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 80, // Espaço para o footer + TabBar
          }}
        >
          <UserCard
            name={userData.name}
            email={userData.email}
            isDark={isDark}
            colors={colors}
          />

          <ProfileOptions options={options} />

          <PersonalInfo personalInfo={personalInfo} />

          {/* Botão de Logout */}
        </ScrollView>
          <View className="mb-6 px-6">
            <Button
              title="Sair"
              onPress={logout}
              // variant="outline"
              size="medium"
              iconSize={20}
              textSize={20}
              isDark={isDark}
              icon="log-out"
            />
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
      </View>

      {/* Modal de edição de dados */}
      <EditProfileModal
        visible={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        editData={editData}
        setEditData={setEditData}
        onSave={handleSaveEdit}
        successMessage={successMessage}
        isDark={isDark}
      />

      {/* Modal de config de notificação */}
      <NotificationsModal
        visible={notificationsModalVisible}
        onClose={() => setNotificationsModalVisible(false)}
        notifications={notifications}
        onToggleNotification={toggleNotification}
        onSave={handleSaveNotifications}
        successMessage={notificationSuccessMessage}
        isDark={isDark}
      />
    </View>
  );
};

export default Perfil;
