import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Config() {
  const [step, setStep] = useState(1);

  const [servico, setServico] = useState("");
  const [profissional, setProfissional] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const finalizarAgendamento = () => {
    Alert.alert("Sucesso", "Agendamento realizado com sucesso!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Agendamento</Text>
      <Text style={styles.subtitulo}>Etapa {step} de 4</Text>

      {/* Etapa 1 */}
      {step === 1 && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Serviço e Profissional</Text>
          <TextInput
            style={styles.input}
            placeholder="Serviço"
            value={servico}
            onChangeText={setServico}
          />
          <TextInput
            style={styles.input}
            placeholder="Profissional"
            value={profissional}
            onChangeText={setProfissional}
          />

          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Etapa 2 */}
      {step === 2 && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Data e Horário</Text>
          <TextInput
            style={styles.input}
            placeholder="Data (ex: 10/10/2025)"
            value={data}
            onChangeText={setData}
          />
          <TextInput
            style={styles.input}
            placeholder="Hora (ex: 14:00)"
            value={hora}
            onChangeText={setHora}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.secondaryButton} onPress={prevStep}>
              <Text style={styles.secondaryButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={nextStep}>
              <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Etapa 3 */}
      {step === 3 && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Dados do Cliente</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="WhatsApp"
            value={whatsapp}
            onChangeText={setWhatsapp}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Observações"
            value={observacoes}
            onChangeText={setObservacoes}
            multiline
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.secondaryButton} onPress={prevStep}>
              <Text style={styles.secondaryButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={nextStep}>
              <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Etapa 4 */}
      {step === 4 && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Resumo do Agendamento</Text>
          <View style={styles.resumoBox}>
            <Text>Serviço: {servico}</Text>
            <Text>Profissional: {profissional}</Text>
            <Text>Data: {data}</Text>
            <Text>Hora: {hora}</Text>
            <Text>Nome: {nome}</Text>
            <Text>E-mail: {email}</Text>
            <Text>WhatsApp: {whatsapp}</Text>
            <Text>Observações: {observacoes || "Nenhuma"}</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.secondaryButton} onPress={prevStep}>
              <Text style={styles.secondaryButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={finalizarAgendamento}>
              <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#e9ecef",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    flex: 1,
    marginRight: 5,
  },
  secondaryButtonText: {
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resumoBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fefefe",
    marginBottom: 15,
  },
});
