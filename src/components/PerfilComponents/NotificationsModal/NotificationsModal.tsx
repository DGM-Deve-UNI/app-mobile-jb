// Componente NotificationsModal para gerenciar configurações de notificações do usuário
import React from "react";
import { Text, View } from "react-native";
import { BaseModal } from "@/src/components/ui/BaseModal";
import { NotificationSetting } from "@/src/components/ui/NotificationSetting";
import { Button } from "@/src/components/ui/Button";
import { NotificationSettings } from "@/src/types/profile.types";

// Defina a interface aqui
export interface NotificationsModalProps {
  visible: boolean;
  onClose: () => void;
  notifications: NotificationSettings;
  onToggleNotification: (key: keyof NotificationSettings) => void;
  onSave: () => void;
  successMessage: string;
  isDark: boolean;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  visible,
  onClose,
  notifications,
  onToggleNotification,
  onSave,
  successMessage,
  isDark,
}) => {
  const notificationSettings: {
    key: keyof NotificationSettings;
    title: string;
    description: string;
  }[] = [
    {
      key: "appointmentReminder",
      title: "Lembrete de Agendamento",
      description: "Notificações antes do seu horário marcado",
    },
    {
      key: "appointmentConfirmation",
      title: "Confirmação de Agendamento",
      description: "Confirmação quando você marcar um horário",
    },
    {
      key: "promotions",
      title: "Promoções e Ofertas",
      description: "Descontos especiais e promoções",
    },
    {
      key: "news",
      title: "Notícias e Atualizações",
      description: "Novidades da barbearia",
    },
    {
      key: "paymentReminder",
      title: "Lembrete de Pagamento",
      description: "Lembretes para pagamentos pendentes",
    },
  ];

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Notificações"
      successMessage={successMessage}
      isDark={isDark}
      actions={
        <View className="flex-row justify-end gap-3 mt-4">
          <Button
            title="Cancelar"
            onPress={onClose}
            variant="secondary"
            isDark={isDark}
          />
          <Button
            title="Salvar"
            onPress={onSave}
            variant="primary"
            isDark={isDark}
          />
        </View>
      }
    >
      <Text
        className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-5 text-lg leading-5`}
      >
        Selecione quais notificações você deseja receber:
      </Text>

      {notificationSettings.map((setting, index) => (
        <NotificationSetting
          key={setting.key}
          title={setting.title}
          description={setting.description}
          value={notifications[setting.key]}
          onValueChange={() => onToggleNotification(setting.key)}
          isDark={isDark}
          isLast={index === notificationSettings.length - 1}
        />
      ))}
    </BaseModal>
  );
};