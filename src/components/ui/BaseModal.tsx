// components/BaseModal.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  successMessage?: string;
  isDark: boolean;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  visible,
  onClose,
  title,
  children,
  actions,
  successMessage,
  isDark,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View
          className={`w-11/12 max-h-[85%] ${isDark ? "bg-gray-800" : "bg-white"} rounded-2xl p-5 border ${
            isDark ? "border-gray-700" : "border-gray-200"
          } shadow-2xl`}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text
              className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {title}
            </Text>
            <TouchableOpacity onPress={onClose} className="p-1.5 rounded-full">
              <Ionicons
                name="close"
                size={22}
                color={isDark ? "#9CA3AF" : "#6B7280"}
              />
            </TouchableOpacity>
          </View>

          {/* Success Message */}
          {successMessage && (
            <View
              className={`${isDark ? "bg-green-900" : "bg-green-100"} p-3 rounded-lg mb-4`}
            >
              <Text
                className={`${isDark ? "text-green-300" : "text-green-800"} text-center font-semibold`}
              >
                {successMessage}
              </Text>
            </View>
          )}

          {/* Content */}
          <ScrollView className="max-h-96" showsVerticalScrollIndicator bounces>
            {children}
          </ScrollView>

          {/* Actions */}
          {actions && (
            <View className="flex-row justify-end mt-5 space-x-3">
              {actions}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
