import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';

// Tipo para os nomes de ícone do Ionicons
type IconName = keyof typeof Ionicons.glyphMap;

interface Colors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  primary: string;
  card: string;
  success: string;
  successText: string;
  inputBackground: string;
  overlay: string;
}

const Perfil: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  // cores
  const colors: Colors = isDark ? {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#BDBDBD',
    border: '#2C2C2C',
    primary: '#FFC107',
    card: '#1E1E1E',
    success: '#14532d',
    successText: '#A7F3D0',
    inputBackground: '#2C2C2C',
    overlay: '#00000088',
  } : {
    background: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#1A1A1A',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    primary: '#F59E0B',
    card: '#FFFFFF',
    success: '#D1FAE5',
    successText: '#065F46',
    inputBackground: '#F9FAFB',
    overlay: '#00000040',
  };

  // states
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [notificationsModalVisible, setNotificationsModalVisible] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [notificationSuccessMessage, setNotificationSuccessMessage] = useState('');

  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 99999-9999',
    birthDate: '15/05/1990',
    address: 'Rua das Flores, 123 - Centro, São Paulo - SP, 01234-567'
  });

  const [notifications, setNotifications] = useState({
    appointmentReminder: true,
    appointmentConfirmation: true,
    promotions: false,
    news: true,
    paymentReminder: true
  });

  const [editData, setEditData] = useState(userData);

  const handleSaveEdit = () => {
    setUserData(editData);
    setSuccessMessage('✅ Dados atualizados com sucesso!');
    setTimeout(() => {
      setSuccessMessage('');
      setEditModalVisible(false);
    }, 1000);
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveNotifications = () => {
    setNotificationSuccessMessage('✅ Configurações salvas com sucesso!');
    setTimeout(() => {
      setNotificationSuccessMessage('');
      setNotificationsModalVisible(false);
    }, 1000);
  };

  const themeIcon: IconName = isDark ? 'sunny' : 'moon';

  const options: { icon: IconName; label: string; onPress: () => void }[] = [
    {
      icon: 'person',
      label: 'Editar Perfil',
      onPress: () => {
        setEditData(userData);
        setEditModalVisible(true);
      }
    },
    {
      icon: 'notifications',
      label: 'Notificações',
      onPress: () => {
        setNotificationsModalVisible(true);
      }
    },
    {
      icon: themeIcon,
      label: `Tema ${isDark ? 'Claro' : 'Escuro'}`,
      onPress: toggleTheme
    }
  ];

  const personalInfo = [
    { icon: 'call' as IconName, label: 'Telefone', value: userData.phone },
    { icon: 'calendar' as IconName, label: 'Data de Nascimento', value: userData.birthDate },
    { icon: 'location' as IconName, label: 'Endereço', value: userData.address }
  ];

  const notificationSettings = [
    { key: 'appointmentReminder' as keyof typeof notifications, title: 'Lembrete de Agendamento', description: 'Notificações antes do seu horário marcado' },
    { key: 'appointmentConfirmation' as keyof typeof notifications, title: 'Confirmação de Agendamento', description: 'Confirmação quando você marcar um horário' },
    { key: 'promotions' as keyof typeof notifications, title: 'Promoções e Ofertas', description: 'Descontos especiais e promoções' },
    { key: 'news' as keyof typeof notifications, title: 'Notícias e Atualizações', description: 'Novidades da barbearia' },
    { key: 'paymentReminder' as keyof typeof notifications, title: 'Lembrete de Pagamento', description: 'Lembretes para pagamentos pendentes' }
  ];

  const editFields = {
    name: 'Nome Completo',
    email: 'E-mail',
    phone: 'Telefone',
    birthDate: 'Data de Nascimento',
    address: 'Endereço'
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Perfil</Text>
      </View>

      {/* ScrollView principal */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: 120, // espaço extra no fim
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Card do usuário */}
        <View style={{
          padding: 20,
          borderRadius: 16,
          backgroundColor: colors.surface,
          borderWidth: 1,
          borderColor: colors.border,
          alignItems: 'center',
          marginBottom: 20,
          shadowColor: '#000',
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
        }}>
          <View style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: isDark ? '#2C2C2C' : '#FEF3C7',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
            borderWidth: 2,
            borderColor: colors.primary,
          }}>
            <Ionicons name="person" size={50} color={isDark ? colors.primary : '#D97706'} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: 4 }}>
            {userData.name}
          </Text>
          <Text style={{ color: colors.textSecondary }}>{userData.email}</Text>
        </View>

        {/* Opções */}
        <View style={{
          borderRadius: 16,
          backgroundColor: colors.surface,
          borderWidth: 1,
          borderColor: colors.border,
          marginBottom: 20,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 1 },
          elevation: 2,
        }}>
          {options.map(({ icon, label, onPress }, index) => (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderBottomWidth: index !== options.length - 1 ? 1 : 0,
                borderColor: colors.border,
                backgroundColor: colors.surface,
              }}
              activeOpacity={0.7}
            >
              <Ionicons name={icon} size={22} color={colors.primary} />
              <Text style={{
                flex: 1,
                marginLeft: 12,
                color: colors.text,
                fontSize: 16,
                fontWeight: '500'
              }}>
                {label}
              </Text>
              <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Informações pessoais */}
        <View style={{
          backgroundColor: colors.surface,
          padding: 20,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.border,
          shadowColor: '#000',
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 1 },
          elevation: 2,
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.text,
            marginBottom: 16
          }}>
            Informações Pessoais
          </Text>

          {personalInfo.map(({ icon, label, value }, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginBottom: 16,
                paddingBottom: 16,
                borderBottomWidth: i !== personalInfo.length - 1 ? 1 : 0,
                borderColor: colors.border,
              }}
            >
              <Ionicons name={icon} size={18} color={colors.primary} style={{ marginTop: 2 }} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{
                  color: colors.textSecondary,
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: '500'
                }}>
                  {label}
                </Text>
                <Text style={{
                  color: colors.text,
                  fontSize: 16,
                  lineHeight: 20
                }}>
                  {value}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal Editar Perfil */}
      <Modal visible={editModalVisible} animationType="slide" transparent onRequestClose={() => setEditModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.overlay }}>
          <View style={{
            width: Platform.OS === 'web' ? 600 : '90%',
            maxHeight: '85%',
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: colors.border,
            elevation: 10,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>Editar Perfil</Text>
              <TouchableOpacity onPress={() => setEditModalVisible(false)} style={{ padding: 6, borderRadius: 20 }}>
                <Ionicons name="close" size={22} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>

            {successMessage ? (
              <View style={{
                backgroundColor: colors.success,
                padding: 12,
                borderRadius: 8,
                marginBottom: 16,
              }}>
                <Text style={{ color: colors.successText, textAlign: 'center', fontWeight: '600' }}>
                  {successMessage}
                </Text>
              </View>
            ) : null}

            {/* Scroll interno do modal */}
            <ScrollView
              style={{ maxHeight: 450 }}
              contentContainerStyle={{ paddingBottom: 40 }}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              {Object.entries(editFields).map(([key, label]) => (
                <View key={key} style={{ marginBottom: 16 }}>
                  <Text style={{ color: colors.text, marginBottom: 8, fontWeight: '600' }}>{label}</Text>
                  <TextInput
                    style={{
                      backgroundColor: colors.inputBackground,
                      borderWidth: 1,
                      borderColor: colors.border,
                      borderRadius: 12,
                      color: colors.text,
                      padding: 14,
                      fontSize: 16,
                    }}
                    value={editData[key as keyof typeof editData]}
                    onChangeText={v => setEditData({ ...editData, [key]: v })}
                    placeholder={label}
                    placeholderTextColor={colors.textSecondary}
                  />
                </View>
              ))}
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, gap: 12 }}>
              <TouchableOpacity
                onPress={() => setEditModalVisible(false)}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  backgroundColor: 'transparent'
                }}
              >
                <Text style={{ color: colors.textSecondary, fontWeight: '600' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSaveEdit}
                style={{
                  backgroundColor: colors.primary,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 12,
                  elevation: 3,
                }}
              >
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Notificações */}
      <Modal visible={notificationsModalVisible} animationType="slide" transparent onRequestClose={() => setNotificationsModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.overlay }}>
          <View style={{
            width: Platform.OS === 'web' ? 600 : '90%',
            maxHeight: '85%',
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: colors.border,
            elevation: 10,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>Notificações</Text>
              <TouchableOpacity onPress={() => setNotificationsModalVisible(false)} style={{ padding: 6, borderRadius: 20 }}>
                <Ionicons name="close" size={22} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>

            {notificationSuccessMessage ? (
              <View style={{
                backgroundColor: colors.success,
                padding: 12,
                borderRadius: 8,
                marginBottom: 16,
              }}>
                <Text style={{ color: colors.successText, textAlign: 'center', fontWeight: '600' }}>
                  {notificationSuccessMessage}
                </Text>
              </View>
            ) : null}

            {/* Scroll interno de notificações */}
            <ScrollView
              style={{ maxHeight: 450 }}
              contentContainerStyle={{ paddingBottom: 40 }}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <Text style={{ color: colors.textSecondary, marginBottom: 20, fontSize: 14, lineHeight: 20 }}>
                Selecione quais notificações você deseja receber:
              </Text>

              {notificationSettings.map(({ key, title, description }) => (
                <View key={key} style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                }}>
                  <View style={{ flex: 1, marginRight: 16 }}>
                    <Text style={{ color: colors.text, fontWeight: '600', marginBottom: 4, fontSize: 16 }}>{title}</Text>
                    <Text style={{ color: colors.textSecondary, fontSize: 14, lineHeight: 18 }}>{description}</Text>
                  </View>
                  <Switch
                    value={notifications[key]}
                    onValueChange={() => toggleNotification(key)}
                    trackColor={{
                      false: isDark ? '#555' : '#D1D5DB',
                      true: isDark ? '#FFD54F' : '#FBBF24'
                    }}
                    thumbColor={notifications[key] ? colors.primary : '#f4f3f4'}
                  />
                </View>
              ))}
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, gap: 12 }}>
              <TouchableOpacity
                onPress={() => setNotificationsModalVisible(false)}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  backgroundColor: 'transparent'
                }}
              >
                <Text style={{ color: colors.textSecondary, fontWeight: '600' }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSaveNotifications}
                style={{
                  backgroundColor: colors.primary,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 12,
                  elevation: 3,
                }}
              >
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Perfil;
