// Hook personalizado para gerenciar agendamentos no aplicativo JohnBravo - useAgendamentos hook para lógica de agendamento e validação de formulário
import { useState } from "react";
import {
  Agendamento,
  AgendamentoFormData,
  FormErrors,
} from "@/src/types/agendamento";

export const useAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] =
    useState<Agendamento | null>(null);

  const [formData, setFormData] = useState<AgendamentoFormData>({
    servico: "",
    profissional: "",
    data: new Date(),
    hora: "",
    nome: "",
    email: "",
    whatsapp: "",
    observacoes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const validarEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const validarWhatsapp = (numero: string) => {
    const numeroLimpo = numero.replace(/\D/g, "");
    return /^[0-9]{10,11}$/.test(numeroLimpo);
  };

  const formatarWhatsApp = (text: string) => {
    const numbers = text.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const getPrecoServico = () => {
    const match = formData.servico.match(/R\$\s?(\d+[,.]?\d*)/);
    return match ? match[0] : "";
  };

  const finalizarAgendamento = () => {
    if (validateStep(3)) {
      const novoAgendamento: Agendamento = {
        id: Date.now().toString(),
        servico: formData.servico.split(" - ")[0],
        profissional: formData.profissional,
        data: new Date(formData.data),
        hora: formData.hora,
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        observacoes: formData.observacoes,
        status: "agendado",
        valor: getPrecoServico(),
        dataCriacao: new Date(),
      };

      setAgendamentos((prev) => [novoAgendamento, ...prev]);
      return true;
    }
    return false;
  };

  const validateStep = (step: number) => {
    const newErrors = { nome: "", email: "", whatsapp: "" };

    if (step === 1) {
      return formData.servico && formData.profissional;
    } else if (step === 2) {
      return formData.hora;
    } else if (step === 3) {
      if (!formData.nome.trim()) {
        newErrors.nome = "Nome é obrigatório";
      } else if (formData.nome.trim().length < 2) {
        newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
      }

      if (!formData.email.trim()) {
        newErrors.email = "E-mail é obrigatório";
      } else if (!validarEmail(formData.email)) {
        newErrors.email = "E-mail inválido";
      }

      if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = "WhatsApp é obrigatório";
      } else if (!validarWhatsapp(formData.whatsapp)) {
        newErrors.whatsapp = "WhatsApp inválido (DDD + número)";
      }

      setErrors(newErrors);
      return !Object.values(newErrors).some((error) => error !== "");
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      servico: "",
      profissional: "",
      data: new Date(),
      hora: "",
      nome: "",
      email: "",
      whatsapp: "",
      observacoes: "",
    });
    setErrors({ nome: "", email: "", whatsapp: "" });
  };

  const updateFormData = (field: keyof AgendamentoFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    agendamentos,
    showHistory,
    setShowHistory,
    selectedAgendamento,
    setSelectedAgendamento,
    formData,
    errors,
    setErrors,
    validarEmail,
    validarWhatsapp,
    formatarWhatsApp,
    getPrecoServico,
    finalizarAgendamento,
    validateStep,
    resetForm,
    updateFormData,
  };
};
