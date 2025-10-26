// Tipos relacionados a agendamentos no aplicativo JohnBravo - Agendamento, dados do formulário e erros de validação de formulário
export interface Agendamento {
  id: string;
  servico: string;
  profissional: string;
  data: Date;
  hora: string;
  nome: string;
  email: string;
  whatsapp: string;
  observacoes: string;
  status: "agendado" | "concluido" | "cancelado" | "pendente";
  valor: string;
  dataCriacao: Date;
}

export interface AgendamentoFormData {
  servico: string;
  profissional: string;
  data: Date;
  hora: string;
  nome: string;
  email: string;
  whatsapp: string;
  observacoes: string;
}

export interface FormErrors {
  nome: string;
  email: string;
  whatsapp: string;
}
