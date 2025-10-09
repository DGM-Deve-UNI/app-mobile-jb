import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

// Interface para os dados da notícia
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
}

// Interface para as props do NewsCard
interface NewsCardProps {
  news: NewsItem;
  isDark: boolean;
}

// Interface para as props do ThemeToggle
interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

// Dados de exemplo para as notícias
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "React Native ganha nova atualização",
    summary:
      "A nova versão traz melhorias de performance e novas APIs para desenvolvedores mobile.",
    category: "Tecnologia",
    date: "2 horas atrás",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Expo lança SDK 49 com novas funcionalidades",
    summary:
      "A nova SDK traz suporte ao React Native 0.72 e diversas melhorias para desenvolvimento.",
    category: "Desenvolvimento",
    date: "5 horas atrás",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 3,
    title: "Tailwind CSS para React Native",
    summary:
      "NativeWind permite usar Tailwind em aplicações React Native com facilidade.",
    category: "Design",
    date: "1 dia atrás",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 4,
    title: "Melhores práticas para UI mobile em 2023",
    summary:
      "Conheça as tendências de design para aplicativos móveis neste ano.",
    category: "Design",
    date: "2 dias atrás",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

// Componente de card de notícia COM DARK MODE E TIPAGEM
const NewsCard: React.FC<NewsCardProps> = ({ news, isDark }) => {
  return (
    <View
      className={`rounded-xl shadow-sm mb-4 overflow-hidden border ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      <Image
        source={{ uri: news.image }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isDark ? "text-blue-400 bg-blue-900" : "text-blue-600 bg-blue-50"
            }`}
          >
            {news.category}
          </Text>
          <Text
            className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {news.date}
          </Text>
        </View>
        <Text
          className={`text-lg font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {news.title}
        </Text>
        <Text
          className={`text-sm mb-3 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {news.summary}
        </Text>
        <TouchableOpacity className="flex-row items-center justify-end">
          <Text
            className={`text-sm font-medium mr-1 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Ler mais
          </Text>
          <Ionicons
            name="arrow-forward-circle"
            size={18}
            color={isDark ? "#60a5fa" : "#2563eb"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Botão de toggle do tema COM TIPAGEM
const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} className="ml-4">
      <Ionicons
        name={isDark ? "sunny" : "moon"}
        size={24}
        color={isDark ? "#fbbf24" : "#4b5563"}
      />
    </TouchableOpacity>
  );
};

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <StatusBar style={isDark ? "light" : "dark"} />

      {/* Header */}
      <View
        className={`px-5 py-4 shadow-sm flex-row justify-between items-center border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <Text
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          NewsFeed
        </Text>
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4">
            <Ionicons
              name="search"
              size={24}
              color={isDark ? "#d1d5db" : "#4b5563"}
            />
          </TouchableOpacity>
          <TouchableOpacity className="mr-4">
            <Ionicons
              name="notifications-outline"
              size={24}
              color={isDark ? "#d1d5db" : "#4b5563"}
            />
          </TouchableOpacity>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </View>
      </View>

      {/* Categorias */}
      <View
        className={`border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 py-3"
          contentContainerStyle={{ flexGrow: 0 }}
        >
          <TouchableOpacity
            className={`px-4 py-2 rounded-full mr-3 ${
              isDark ? "bg-blue-600" : "bg-blue-600"
            }`}
          >
            <Text className="text-white text-sm font-medium">Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-full mr-3 ${
              isDark ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Tecnologia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-full mr-3 ${
              isDark ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Design
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-full mr-3 ${
              isDark ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Negócios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-full ${
              isDark ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Esportes
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Feed de Notícias */}
      <ScrollView
        className="flex-1 px-5 py-4"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDark ? "#d1d5db" : "#6b7280"}
          />
        }
      >
        <Text
          className={`text-xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Últimas Notícias
        </Text>

        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} isDark={isDark} />
        ))}

        <View className="py-4 flex items-center">
          <Text
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Você chegou ao final do feed
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
