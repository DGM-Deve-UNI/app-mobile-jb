import { useState } from "react";
import { UserData, NotificationSettings } from "@/src/types/profile.types";

export interface UseProfileReturn {
  userData: UserData;
  notifications: NotificationSettings;
  editData: UserData;
  editModalVisible: boolean;
  notificationsModalVisible: boolean;
  successMessage: string;
  notificationSuccessMessage: string;
  setEditData: (data: UserData) => void;
  setEditModalVisible: (visible: boolean) => void;
  setNotificationsModalVisible: (visible: boolean) => void;
  handleSaveEdit: () => void;
  toggleNotification: (key: keyof NotificationSettings) => void;
  handleSaveNotifications: () => void;
}

export const useProfile = (): UseProfileReturn => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [notificationsModalVisible, setNotificationsModalVisible] =
    useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [notificationSuccessMessage, setNotificationSuccessMessage] =
    useState("");

  const [userData, setUserData] = useState<UserData>({
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 99999-9999",
    birthDate: "15/05/1990",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP, 01234-567",
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    appointmentReminder: true,
    appointmentConfirmation: true,
    promotions: false,
    news: true,
    paymentReminder: true,
  });

  const [editData, setEditData] = useState<UserData>(userData);

  const handleSaveEdit = () => {
    setUserData(editData);
    setSuccessMessage("✅ Dados atualizados com sucesso!");
    setTimeout(() => {
      setSuccessMessage("");
      setEditModalVisible(false);
    }, 1000);
  };

  const toggleNotification = (key: keyof NotificationSettings) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveNotifications = () => {
    setNotificationSuccessMessage("✅ Configurações salvas com sucesso!");
    setTimeout(() => {
      setNotificationSuccessMessage("");
      setNotificationsModalVisible(false);
    }, 1000);
  };

  return {
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
  };
};
