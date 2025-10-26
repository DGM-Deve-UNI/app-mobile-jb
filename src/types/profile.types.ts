// Tipos e interfaces relacionados ao perfil do usuário
import { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

export interface UserData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
}

export interface NotificationSettings {
  appointmentReminder: boolean;
  appointmentConfirmation: boolean;
  promotions: boolean;
  news: boolean;
  paymentReminder: boolean;
}

export interface ProfileOption {
  icon: IconName;
  label: string;
  onPress: () => void;
}