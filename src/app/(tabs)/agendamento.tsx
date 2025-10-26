// Tela principal de Agendamentos com múltiplas etapas e histórico de agendamentos
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "@/src/contexts/ThemeContext";
import { Button } from "@/src/components/ui/Button";
import { BaseModal } from "@/src/components/ui/BaseModal";
import { ProgressIndicator } from "@/src/components/agendamentos/ProgressIndicator";
import { ServiceSelectionStep } from "@/src/components/agendamentos/steps/ServiceSelectionStep";
import { DateTimeStep } from "@/src/components/agendamentos/steps/DateTimeStep";
import { CustomerDataStep } from "@/src/components/agendamentos/steps/CustomerDataStep";
import { ConfirmationStep } from "@/src/components/agendamentos/steps/ConfirmationStep";
import { AppointmentCard } from "@/src/components/agendamentos/AppointmentCard";
import { ImportantInfoCard } from "@/src/components/agendamentos/ImportantInfoCard";
import { useAgendamentos } from "@/src/hooks/useAgendamentos";
import { AppointmentDetailsModal } from "@/src/components/agendamentos/AppointmentDetailsModal";
import {
  SERVICOS_OPTIONS,
  PROFISSIONAIS_OPTIONS,
  HORAS_OPTIONS,
} from "@/src/constants/agendamentos";

export default function Agendamentos() {
  const { isDark } = useTheme();
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const {
    agendamentos,
    showHistory,
    setShowHistory,
    selectedAgendamento,
    setSelectedAgendamento,
    formData,
    errors,
    formatarWhatsApp,
    getPrecoServico,
    finalizarAgendamento,
    validateStep,
    resetForm,
    updateFormData,
  } = useAgendamentos();

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleFinalizarAgendamento = () => {
    if (finalizarAgendamento()) {
      setShowSuccessModal(true);
    }
  };

  const handleResetForm = () => {
    resetForm();
    setStep(1);
    setShowSuccessModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "agendado":
        return "bg-blue-500";
      case "concluido":
        return "bg-green-500";
      case "cancelado":
        return "bg-red-500";
      case "pendente":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "agendado":
        return "Agendado";
      case "concluido":
        return "Concluído";
      case "cancelado":
        return "Cancelado";
      case "pendente":
        return "Pendente";
      default:
        return status;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ServiceSelectionStep
            servico={formData.servico}
            profissional={formData.profissional}
            onServicoChange={(value) => updateFormData("servico", value)}
            onProfissionalChange={(value) =>
              updateFormData("profissional", value)
            }
            onNext={nextStep}
            isDark={isDark}
            servicosOptions={SERVICOS_OPTIONS}
            profissionaisOptions={PROFISSIONAIS_OPTIONS}
          />
        );
      case 2:
        return (
          <DateTimeStep
            data={formData.data}
            hora={formData.hora}
            mostrarCalendario={mostrarCalendario}
            onDataChange={(date) => updateFormData("data", date)}
            onHoraChange={(hora) => updateFormData("hora", hora)}
            onMostrarCalendarioChange={setMostrarCalendario}
            onNext={nextStep}
            onBack={prevStep}
            isDark={isDark}
            horasOptions={HORAS_OPTIONS}
          />
        );
      case 3:
        return (
          <CustomerDataStep
            nome={formData.nome}
            email={formData.email}
            whatsapp={formData.whatsapp}
            observacoes={formData.observacoes}
            errors={errors}
            onNomeChange={(text) => updateFormData("nome", text)}
            onEmailChange={(text) => updateFormData("email", text)}
            onWhatsappChange={(text) => updateFormData("whatsapp", text)}
            onObservacoesChange={(text) => updateFormData("observacoes", text)}
            onNext={nextStep}
            onBack={prevStep}
            isDark={isDark}
            formatarWhatsApp={formatarWhatsApp}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            servico={formData.servico}
            profissional={formData.profissional}
            data={formData.data}
            hora={formData.hora}
            nome={formData.nome}
            email={formData.email}
            whatsapp={formData.whatsapp}
            observacoes={formData.observacoes}
            onConfirm={handleFinalizarAgendamento}
            onBack={prevStep}
            isDark={isDark}
            getPrecoServico={getPrecoServico}
          />
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Header */}
      <View
        className={`px-5 py-4 border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <Text
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Agendamentos
        </Text>
      </View>

      <ScrollView
        className="flex-1 px-5 py-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Botão Ver Histórico */}
        {/* {agendamentos.length > 0 && !showHistory && (
          <View className="mb-6">
            <Button
              title="📋 Ver Meus Agendamentos"
              onPress={() => setShowHistory(true)}
              variant="outline"
              isDark={isDark}
              size="medium"
              icon="list"
            />
          </View>
        )} */}

        {/* Modo Histórico */}
        {showHistory ? (
          <View>
            <View className="flex-row justify-between items-center mb-6">
              <Text
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Meus Agendamentos
              </Text>
              <Button
                title="Novo Agendamento"
                onPress={() => setShowHistory(false)}
                variant="primary"
                isDark={isDark}
                size="small"
                icon="add"
              />
            </View>

            {agendamentos.map((agendamento) => (
              <AppointmentCard
                key={agendamento.id}
                agendamento={agendamento}
                onPress={setSelectedAgendamento}
                isDark={isDark}
                getStatusColor={getStatusColor}
                getStatusText={getStatusText}
              />
            ))}
          </View>
        ) : (
          /* Modo Novo Agendamento */
          <>
            <ProgressIndicator step={step} isDark={isDark} />

            {/* Card Principal do Formulário */}
            <View
              className={`rounded-2xl border p-6 mb-6 ${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } shadow-md`}
            >
              {renderStep()}
            </View>

            <ImportantInfoCard isDark={isDark} />
          </>
        )}
      </ScrollView>

      {/* Modais */}
      <BaseModal
        visible={showSuccessModal}
        onClose={handleResetForm}
        title="Agendamento Confirmado! ✅"
        isDark={isDark}
        actions={
          <Button
            title="Fazer Novo Agendamento"
            onPress={handleResetForm}
            variant="primary"
            isDark={isDark}
            icon="add"
          />
        }
      >
        <Text
          className={`text-center mb-4 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Seu agendamento para {formData.servico.split(" - ")[0]} com{" "}
          {formData.profissional} foi confirmado!
        </Text>
        <Text
          className={`text-center font-semibold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          📅 {formData.data.toLocaleDateString("pt-BR")} às {formData.hora}
        </Text>
        <Text
          className={`text-center ${
            isDark ? "text-amber-300" : "text-amber-600"
          }`}
        >
          💰 {getPrecoServico()}
        </Text>
        <Text
          className={`text-center mt-4 text-sm ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          💡 Você receberá um lembrete por WhatsApp 1 hora antes do horário.
        </Text>
      </BaseModal>

      <AppointmentDetailsModal
        visible={!!selectedAgendamento}
        onClose={() => setSelectedAgendamento(null)}
        agendamento={selectedAgendamento}
        isDark={isDark}
        getStatusColor={getStatusColor}
        getStatusText={getStatusText}
      />

      {/* Botão no rodapé para ver histórico */}
      {agendamentos.length > 0 && !showHistory && (
        <View className="px-5 pb-5">
          <Button
            title="📋 Ver Meus Agendamentos"
            onPress={() => setShowHistory(true)}
            variant="outline"
            isDark={isDark}
            size="medium"
            icon="list"
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
