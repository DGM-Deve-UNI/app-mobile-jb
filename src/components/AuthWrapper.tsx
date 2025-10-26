// Componente AuthWrapper para proteger rotas que requerem autenticação
import React from "react";
import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // Se não estiver logado, vai para a tela de login
        router.replace("/auth/login");
      }
    }
  }, [isLoading, router, user]);

  if (isLoading) {
    // Tela de loading enquanto checa autenticação
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Usuário logado, mostra o app normalmente
  return <>{children}</>;
};
