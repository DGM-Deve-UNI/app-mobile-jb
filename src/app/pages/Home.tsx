import React from "react";
import { View, FlatList } from "react-native";

import { FeedHeader } from "@/components/FeedHeader";
import { Highlight } from "@/components/Highlight";
import { NewsCard } from "@/components/NewsCard";

const mockNews = [
  {
    id: "1",
    title: "Nova atualização lançada",
    description:
      "Agora com suporte ao modo escuro automático e melhorias no desempenho.",
  },
  {
    id: "2",
    title: "Evento ao vivo",
    description:
      "Participe do nosso evento online para desenvolvedores na próxima semana.",
  },
  {
    id: "3",
    title: "Dica de produtividade",
    description:
      "Como organizar seu dia para ser mais produtivo com React Native.",
  },
];

export default function Home() {
  return (
    <View className="flex-1 bg-gray-700">
      <FeedHeader />
      <Highlight />
      <FlatList
        data={mockNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard title={item.title} description={item.description} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
