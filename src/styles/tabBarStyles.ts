import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const tabBarStyles = StyleSheet.create({
tabBar: {
    backgroundColor: colors.white, // Cor de fundo
    borderTopWidth: 1, // Linha superior
    borderTopColor: colors.JB_amarelo_border, // Cor da linha superior
    position: "absolute", // Posição absoluta para sobrepor o conteúdo
    elevation: 0, // Remove sombra no Android
    shadowOpacity: 0, // Remove sombra no iOS
    height: 80, // Altura da tab bar
    // paddingBottom: 10, // Espaçamento inferior
    paddingTop: 8, // Espaçamento superior
},
label: {
    fontSize: 16, // Altere aqui o tamanho da fonte
    fontWeight: "700", // Altere aqui o peso da fonte
    marginTop: 8,
},
});

export const tabBarColors = {
  active: colors.JB_amarelo_ativo, // Active icon color
  inactive: colors.JB_cinza, // Inactive icon color
};