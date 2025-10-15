import "@/src/styles/global.css";
import React, { useState, useEffect, useCallback } from "react";
import NewsCard from "@/src/components/NewsComponents/NewsCard";
import { ActivityIndicator, RefreshControl, ScrollView, Text, View, } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { NewsItem, NewsApiItem } from "@/src/types/news";

// Chave de API
const API_KEY = Constants.expoConfig?.extra?.NEWS_DATA_API_KEY;
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=pt&country=br`;

// Transforma o item da API no formato interno
const mapApiToNewsItem = (apiItem: NewsApiItem, index: number): NewsItem => ({
  id: apiItem.article_id || `fallback-id-${index}`, // 👈 Garante key única
  title: apiItem.title || "Título Indisponível",
  summary: apiItem.description || "Sem resumo disponível.",
  image:
    apiItem.image_url || "https://via.placeholder.com/600x400?text=Sem+Imagem",
  category: apiItem.category?.[0] || "Geral",
  date: new Date(apiItem.pubDate).toLocaleDateString("pt-BR"),
});

export default function FeedNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  const fetchNews = useCallback(async (isRefresh = false) => {
    if (!API_KEY) {
      console.error("ERRO: Chave de API ausente.");
      setLoading(false);
      if (isRefresh) setRefreshing(false);
      return;
    }

    if (!isRefresh) setLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const formattedNews: NewsItem[] = data.results
          .filter((item: NewsApiItem) => item.title)
          .map((item: NewsApiItem, index: number) =>
            mapApiToNewsItem(item, index)
          );

        setNews(formattedNews);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error("Falha ao buscar notícias:", error);
    } finally {
      setLoading(false);
      if (isRefresh) setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNews(true);
  }, [fetchNews]);

  return (
    <ScrollView
      className="flex-1 px-5 py-4"
      contentContainerStyle={{
        paddingBottom: tabBarHeight + insets.bottom + 24,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#6b7280"
        />
      }
    >
      <Text className="text-3xl font-bold mb-4 text-gray-800">
        Últimas Notícias
      </Text>

      {loading ? (
        <View className="flex-1 justify-center items-center py-10">
          <ActivityIndicator size="large" color="#2563eb" />
          <Text className="mt-2 text-lg text-gray-600">
            Carregando notícias...
          </Text>
        </View>
      ) : news.length > 0 ? (
        news.map((item) => <NewsCard key={item.id} news={item} />)
      ) : (
        <View className="py-10 flex items-center">
          <Text className="text-xl font-semibold text-gray-500">
            {API_KEY
              ? "Nenhuma notícia encontrada."
              : "Chave de API não configurada."}
          </Text>
          <Text className="text-base text-gray-500 mt-2">
            Puxe para recarregar ou verifique a configuração.
          </Text>
        </View>
      )}

      {!loading && news.length > 0 && (
        <View className="py-4 flex items-center">
          <Text className="text-lg font-semibold text-gray-500">
            Você chegou ao final do feed
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
