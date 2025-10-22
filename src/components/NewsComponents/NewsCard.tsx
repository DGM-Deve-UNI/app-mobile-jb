import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NewsItem } from "@/src/types/news";
// -----------------------------------------------------------------------------
interface NewsCardProps {
  news: NewsItem;
  isDark: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, isDark }) => {
  return (
    <View
      className={`rounded-xl shadow-sm mb-4 overflow-hidden border ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      <Image
        source={{ uri: news.image }}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text
            className={`text-lg font-semibold px-2 py-1 rounded-full ${
              isDark
                ? "text-amber-300 bg-amber-900"
                : "text-blue-600 bg-blue-50"
            }`}
          >
            {news.category}
          </Text>
          <Text
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {news.date}
          </Text>
        </View>

        <Text
          className={`text-2xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {news.title}
        </Text>

        <Text
          className={`text-lg mb-3 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {news.summary}
        </Text>

        <TouchableOpacity className="flex-row items-center justify-end">
          <Text
            className={`text-xl font-semibold mr-1 ${
              isDark ? "text-amber-400" : "text-blue-600"
            }`}
          >
            Ler mais
          </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={isDark ? "#fbbf24" : "#2563eb"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
