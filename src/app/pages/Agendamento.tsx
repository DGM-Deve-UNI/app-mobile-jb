import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView, Platform, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Agendamento() {
  const [step, setStep] = useState(1);

  const [servico, setServico] = useState("");
  const [profissional, setProfissional] = useState("");
  const [data, setData] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [hora, setHora] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const servicos = ["Corte Masculino", "Barba", "Sobrancelha", "Combo Corte + Barba"];
  const profissionais = ["Rafael", "André", "Lucas"];
  const horasDisponiveis = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validarWhatsapp = (numero) => /^[0-9]{10,13}$/.test(numero.replace(/\D/g, ""));

  const finalizarAgendamento = () => {
    if (!validarEmail(email)) {
      Alert.alert("Erro", "E-mail inválido!");
      return;
    }

    if (!validarWhatsapp(whatsapp)) {
      Alert.alert("Erro", "Número de WhatsApp inválido!");
      return;
    }

    Alert.alert("Sucesso", "Agendamento realizado!");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 20, backgroundColor: "#f9f9f9" }}>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 12, elevation: 3 }}>
        {step === 1 && (
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
              Etapa 1: Serviço e Profissional
            </Text>

            <Text style={{ marginBottom: 5 }}>Serviço:</Text>
            <Picker selectedValue={servico} onValueChange={(item) => setServico(item)}>
              <Picker.Item label="Selecione um serviço..." value="" />
              {servicos.map((s, i) => (
                <Picker.Item key={i} label={s} value={s} />
              ))}
            </Picker>

            <Text style={{ marginTop: 10, marginBottom: 5 }}>Profissional:</Text>
            <Picker selectedValue={profissional} onValueChange={(item) => setProfissional(item)}>
              <Picker.Item label="Selecione um profissional..." value="" />
              {profissionais.map((p, i) => (
                <Picker.Item key={i} label={p} value={p} />
              ))}
            </Picker>

            <Button title="Avançar" onPress={nextStep} disabled={!servico || !profissional} />
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
              Etapa 2: Data e Horário
            </Text>

            <TouchableOpacity onPress={() => setMostrarCalendario(true)} style={{ marginBottom: 10 }}>
              <Text style={{ textAlign: "center", color: "#007bff" }}>
                {`Selecionar Data: ${data.toLocaleDateString("pt-BR")}`}
              </Text>
            </TouchableOpacity>

            {mostrarCalendario && (
              <DateTimePicker
                value={data}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(event, selectedDate) => {
                  setMostrarCalendario(false);
                  if (selectedDate) setData(selectedDate);
                }}
              />
            )}

            <Text style={{ marginTop: 10, marginBottom: 5 }}>Horário:</Text>
            <Picker selectedValue={hora} onValueChange={(item) => setHora(item)}>
              <Picker.Item label="Selecione um horário..." value="" />
              {horasDisponiveis.map((h, i) => (
                <Picker.Item key={i} label={h} value={h} />
              ))}
            </Picker>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <Button title="Voltar" onPress={prevStep} />
              <Button title="Avançar" onPress={nextStep} disabled={!hora} />
            </View>
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
              Etapa 3: Dados do Cliente
            </Text>

            <TextInput
              style={{ borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 }}
              placeholder="Nome completo"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={{ borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 }}
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={{ borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 }}
              placeholder="WhatsApp"
              keyboardType="phone-pad"
              value={whatsapp}
              onChangeText={setWhatsapp}
            />

            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                marginBottom: 10,
                height: 80,
                textAlignVertical: "top",
              }}
              placeholder="Observações"
              multiline
              value={observacoes}
              onChangeText={setObservacoes}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <Button title="Voltar" onPress={prevStep} />
              <Button title="Avançar" onPress={nextStep} disabled={!nome || !email || !whatsapp} />
            </View>
          </View>
        )}

        {step === 4 && (
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
              Etapa 4: Resumo do Agendamento
            </Text>

            <Text>Serviço: {servico}</Text>
            <Text>Profissional: {profissional}</Text>
            <Text>Data: {data.toLocaleDateString("pt-BR")}</Text>
            <Text>Hora: {hora}</Text>
            <Text>Nome: {nome}</Text>
            <Text>E-mail: {email}</Text>
            <Text>WhatsApp: {whatsapp}</Text>
            <Text>Observações: {observacoes || "Nenhuma"}</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
              <Button title="Voltar" onPress={prevStep} />
              <Button title="Confirmar Agendamento" onPress={finalizarAgendamento} />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
