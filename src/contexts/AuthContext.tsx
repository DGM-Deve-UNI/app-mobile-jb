  // Autenticação do usuário usando Context API e Firebase Auth
  import React, { createContext, useContext, useState, useEffect } from "react";
  import { SignupData, User } from "@/src/types/auth";

  interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (phone: string) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    confirmPhone: (code: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
  }

  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Verifica se usuário está logado ao iniciar o app
    useEffect(() => {
      checkAuthState();
    }, []);

    const checkAuthState = async () => {
      try {
        // Aqui você verificaria no AsyncStorage ou Firebase Auth
        // const savedUser = await AsyncStorage.getItem('@user');
        // if (savedUser) setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const login = async (phone: string) => {
      setIsLoading(true);
      try {
        // TODO: Integrar com Firebase Auth
        console.log("Login com telefone:", phone);
        // Simulação de sucesso
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    const signup = async (data: SignupData) => {
      setIsLoading(true);
      try {
        // TODO: Integrar com Firebase Auth
        console.log("Cadastro com dados:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    // No src/contexts/AuthContext.tsx, no confirmPhone:
    const confirmPhone = async (code: string) => {
      setIsLoading(true);
      try {
        // TODO: Integrar com Firebase Auth
        console.log("Confirmar código:", code);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulação de usuário logado
        const mockUser: User = {
          id: "1",
          name: "Usuário Teste",
          email: "teste@email.com",
          phone: "+5511999999999",
          birthDate: "1990-01-01",
          createdAt: new Date(),
        };
        setUser(mockUser);

        // Redireciona automaticamente (o AuthWrapper vai cuidar disso)
      } finally {
        setIsLoading(false);
      }
    };

    const logout = () => {
      setUser(null);
      // TODO: Limpar AsyncStorage e Firebase
    };

    return (
      <AuthContext.Provider
        value={{
          user,
          isAuthenticated: !!user,
          login,
          signup,
          confirmPhone,
          logout,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
