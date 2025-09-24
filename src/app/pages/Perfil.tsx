// -----------------------------Modelo Inicial-----------------------------
// import React from "react";
// import { View, Text } from "react-native";

// function Perfil() {
//     return (
//         <View className="flex-1 justify-center items-center bg-gray-700">
//             <Text className="text-white font-semibold text-5xl">Perfil</Text>
//         </View>
//   )
// }

// export default Perfil;

// -----------------------------Modelo Completo 1-----------------------------
// src/app/pages/Perfil.tsx
// import React from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { useTheme } from '@/contexts/ThemeContext';
// import { useThemeColors } from '@/hooks/useThemeColors';

// const Perfil: React.FC = () => {
//   const { isDark } = useTheme();
//   const { background, surface, text, textSecondary, border } = useThemeColors();

//   return (
//     <View className={`flex-1 ${background}`}>
//       {/* Header */}
//       <View className={`px-6 py-4 border-b ${surface} ${border}`}>
//         <Text className={`text-2xl font-bold ${text}`}>Perfil</Text>
//       </View>

//       {/* Conteúdo */}
//       <ScrollView className="flex-1 px-6 py-4">
//         {/* Card de Informações Pessoais */}
//         <View className={`p-6 rounded-lg ${surface} border ${border} mb-4`}>
//           <Text className={`text-lg font-semibold ${text} mb-2`}>
//             Informações Pessoais
//           </Text>
//           <Text className={textSecondary}>
//             Gerencie suas informações de perfil aqui.
//           </Text>
          
//           {/* Exemplo de informações */}
//           <View className="mt-4">
//             <View className="flex-row justify-between py-3 border-b border-gray-200">
//               <Text className={textSecondary}>Nome:</Text>
//               <Text className={text}>João Silva</Text>
//             </View>
//             <View className="flex-row justify-between py-3 border-b border-gray-200">
//               <Text className={textSecondary}>Email:</Text>
//               <Text className={text}>joao@email.com</Text>
//             </View>
//             <View className="flex-row justify-between py-3">
//               <Text className={textSecondary}>Telefone:</Text>
//               <Text className={text}>(11) 99999-9999</Text>
//             </View>
//           </View>
//         </View>

//         {/* Card de Configurações */}
//         <View className={`p-6 rounded-lg ${surface} border ${border} mb-4`}>
//           <Text className={`text-lg font-semibold ${text} mb-2`}>
//             Configurações
//           </Text>
//           <Text className={textSecondary}>
//             Personalize sua experiência no app.
//           </Text>
//         </View>

//         {/* Card de Estatísticas */}
//         <View className={`p-6 rounded-lg ${surface} border ${border}`}>
//           <Text className={`text-lg font-semibold ${text} mb-2`}>
//             Estatísticas
//           </Text>
//           <Text className={textSecondary}>
//             Veja suas atividades recentes.
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Perfil;

// -----------------------------Novo Modelo Simples-----------------------------
// src/app/pages/Perfil.tsx
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColors';

const Perfil: React.FC = () => {
    const { isDark } = useTheme();
    const { background, text, surface, border } = useThemeColors();

    return (
        <View className={`flex-1 justify-center items-center ${background}`}>
            {/* Ícone ou Avatar */}
            <View className={`w-24 h-24 rounded-full ${surface} border-4 ${border} mb-6 items-center justify-center`}>
                <Text className={`text-2xl font-bold ${text}`}>JS</Text>
            </View>
            
            <Text className={`font-semibold text-5xl ${text} mb-2`}>Perfil</Text>
            <Text className={`text-lg ${text}`}>João Silva</Text>
            <Text className={`text-sm mt-1 ${text}`}>joao@email.com</Text>
            
            {/* Status do Tema */}
            <View className={`mt-8 px-4 py-2 rounded-full ${surface} border ${border}`}>
                <Text className={text}>
                    Tema atual: {isDark ? 'Escuro' : 'Claro'} 🌙
                </Text>
            </View>
        </View>
    );
}

export default Perfil;

// -----------------------------Modelo Completo Hibrido-----------------------------
// src/app/pages/Perfil.tsx
// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useTheme } from '@/contexts/ThemeContext';
// import { useThemeColors } from '@/hooks/useThemeColors';

// const Perfil: React.FC = () => {
//   const { isDark, toggleTheme } = useTheme();
//   const { background, surface, text, textSecondary, border, primary } = useThemeColors();

//   return (
//     <View className={`flex-1 ${background}`}>
//       {/* Header */}
//       <View className={`px-6 py-4 border-b ${surface} ${border}`}>
//         <Text className={`text-2xl font-bold ${text}`}>Perfil</Text>
//       </View>

//       {/* Conteúdo Principal */}
//       <ScrollView className="flex-1 px-6 py-4">
//         {/* Card do Usuário */}
//         <View className={`p-6 rounded-lg ${surface} border ${border} mb-6 items-center`}>
//           <View className={`w-20 h-20 rounded-full bg-blue-100 items-center justify-center mb-4`}>
//             <Text className="text-2xl font-bold text-blue-600">JS</Text>
//           </View>
//           <Text className={`text-xl font-bold ${text} mb-1`}>João Silva</Text>
//           <Text className={textSecondary}>joao@email.com</Text>
//         </View>

//         {/* Opções do Perfil */}
//         <View className={`rounded-lg ${surface} border ${border} mb-6 overflow-hidden`}>
//           <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
//             <Ionicons name="person" size={20} color={isDark ? '#60a5fa' : '#2563eb'} />
//             <Text className={`ml-3 flex-1 ${text}`}>Editar Perfil</Text>
//             <Ionicons name="chevron-forward" size={16} color={textSecondary} />
//           </TouchableOpacity>

//           <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
//             <Ionicons name="notifications" size={20} color={isDark ? '#60a5fa' : '#2563eb'} />
//             <Text className={`ml-3 flex-1 ${text}`}>Notificações</Text>
//             <Ionicons name="chevron-forward" size={16} color={textSecondary} />
//           </TouchableOpacity>

//           <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
//             <Ionicons name="lock-closed" size={20} color={isDark ? '#60a5fa' : '#2563eb'} />
//             <Text className={`ml-3 flex-1 ${text}`}>Privacidade</Text>
//             <Ionicons name="chevron-forward" size={16} color={textSecondary} />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={toggleTheme} className="flex-row items-center px-4 py-3">
//             <Ionicons 
//               name={isDark ? 'sunny' : 'moon'} 
//               size={20} 
//               color={isDark ? '#fbbf24' : '#2563eb'} 
//             />
//             <Text className={`ml-3 flex-1 ${text}`}>
//               Tema {isDark ? 'Claro' : 'Escuro'}
//             </Text>
//             <Ionicons name="chevron-forward" size={16} color={textSecondary} />
//           </TouchableOpacity>
//         </View>

//         {/* Estatísticas Rápidas */}
//         <View className={`p-4 rounded-lg ${surface} border ${border}`}>
//           <Text className={`text-lg font-semibold ${text} mb-3`}>Estatísticas</Text>
//           <View className="flex-row justify-around">
//             <View className="items-center">
//               <Text className={`text-2xl font-bold ${primary}`}>24</Text>
//               <Text className={textSecondary}>Notícias</Text>
//             </View>
//             <View className="items-center">
//               <Text className={`text-2xl font-bold ${primary}`}>12</Text>
//               <Text className={textSecondary}>Favoritos</Text>
//             </View>
//             <View className="items-center">
//               <Text className={`text-2xl font-bold ${primary}`}>5</Text>
//               <Text className={textSecondary}>Comentários</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Perfil;