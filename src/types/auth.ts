// Tipos relacionados à autenticação no aplicativo JohnBravo - Usuário, dados de login, cadastro e confirmação de conta
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  createdAt: Date;
}

export interface LoginData {
  phone: string;
}

export interface SignupData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
}

export interface ConfirmationData {
  code: string;
}
