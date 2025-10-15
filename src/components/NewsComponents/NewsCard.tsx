import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { NewsItem } from "@/src/types/news";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <View className="rounded-xl shadow-sm mb-4 overflow-hidden border bg-white border-gray-100">
      <Image
        source={{ uri: news.image }}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold px-2 py-1 rounded-full text-blue-600 bg-blue-50">
            {news.category}
          </Text>
          <Text className="text-sm text-gray-500">{news.date}</Text>
        </View>

        <Text className="text-2xl font-bold mb-2 text-gray-800">
          {news.title}
        </Text>

        <Text className="text-lg mb-3 text-gray-600">{news.summary}</Text>

        <TouchableOpacity className="flex-row items-center justify-end">
          <Text className="text-xl font-semibold mr-1 text-blue-600">
            Ler mais
          </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color="#2563eb"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
