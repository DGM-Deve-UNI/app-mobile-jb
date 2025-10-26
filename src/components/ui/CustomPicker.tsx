// Componente CustomPicker reutilizável com suporte a temas claro e escuro
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomPickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  placeholder: string;
  isDark: boolean;
}

export const CustomPicker: React.FC<CustomPickerProps> = ({
  selectedValue,
  onValueChange,
  items,
  placeholder,
  isDark,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectedItem = items.find((item) => item.value === selectedValue);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className={`rounded-xl border-2 p-4 flex-row items-center justify-between ${
          isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
        }`}
      >
        <Text
          className={`${isDark ? "text-white" : "text-gray-900"} ${
            !selectedValue ? "opacity-60" : ""
          }`}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Ionicons
          name="chevron-down"
          size={20}
          color={isDark ? "#9CA3AF" : "#6B7280"}
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center bg-black/50">
          <View
            className={`mx-4 rounded-2xl max-h-80 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <View
              className={`p-4 border-b ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <Text
                className={`text-lg font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {placeholder}
              </Text>
            </View>

            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onValueChange(item.value);
                    setModalVisible(false);
                  }}
                  className={`p-4 border-b ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } ${
                    selectedValue === item.value
                      ? isDark
                        ? "bg-gray-700"
                        : "bg-amber-50"
                      : ""
                  }`}
                >
                  <Text
                    className={`
                    ${isDark ? "text-white" : "text-gray-900"}
                    ${selectedValue === item.value ? "font-semibold" : ""}
                  `}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className={`p-4 rounded-b-2xl border-t ${isDark ? "bg-gray-700" : "bg-gray-100"} ${isDark ? "border-gray-600" : "border-gray-300"}`}
            >
              <Text
                className={`text-center font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
