import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useProfile } from "@/src/hooks/useProfile";
import {
  ProfileHeader,
  UserCard,
  ProfileOptions,
  PersonalInfo,
  EditProfileModal,
  NotificationsModal,
} from "@/src/components/PerfilComponents";
import { ProfileOption } from "@/src/types/profile.types";

const Perfil: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
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

        </ScrollView>
          {/* Footer dentro do ScrollView mas com margin */}
          <View
            className={`py-4 mt-8 mb-24`}
          >
            <Text
              className={`text-center font-semibold text-base ${
                isDark ? "text-zinc-50" : "text-zinc-500"
              }`}
            >
              JohnBravo®
            </Text>
            <Text
              className={`text-center text-xs opacity-70 ${
                isDark ? "text-zinc-100" : "text-zinc-400"
              }`}
            >
              Versão 1.0.0
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
