// Tipo para a notícia como ela VEM da API do NewsData.io
export type NewsApiItem = {
  article_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string[];
  pubDate: string;
};

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
}
