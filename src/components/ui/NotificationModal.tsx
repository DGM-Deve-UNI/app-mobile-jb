import React from "react";
import { View, Text } from "react-native";
import { BaseModal } from "./BaseModal";
import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "info" | "warning" | "error" | "success";
  isDark: boolean;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  onClose,
  title,
  message,
  type = "info",
  isDark,
}) => {
  const getIconAndColor = () => {
    switch (type) {
      case "success":
        return { icon: "checkmark-circle", color: "#10B981" };
      case "warning":
        return { icon: "warning", color: "#F59E0B" };
      case "error":
        return { icon: "close-circle", color: "#EF4444" };
      case "info":
      default:
        return { icon: "information-circle", color: "#3B82F6" };
    }
  };

  const { icon, color } = getIconAndColor();

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title={title}
      isDark={isDark}
      actions={
        <Button
          title="Entendido"
          onPress={onClose}
          variant="primary"
          isDark={isDark}
        />
      }
    >
      <View className="items-center mb-4">
        <Ionicons name={icon as any} size={48} color={color} />
      </View>
      <Text
        className={`text-center text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}
      >
        {message}
      </Text>
    </BaseModal>
  );
};
