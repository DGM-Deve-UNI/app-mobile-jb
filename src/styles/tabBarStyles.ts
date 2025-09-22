import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const tabBarStyles = StyleSheet.create({
tabBar: {
    backgroundColor: colors.bg_glass, // Cor de fundo transparente
    borderTopWidth: 1, // Linha superior
    borderTopColor: colors.BG_amarelo_border, // Cor da linha superior
    position: "absolute", // Posição absoluta para sobrepor o conteúdo
    elevation: 0, // Remove sombra no Android
    shadowOpacity: 0, // Remove sombra no iOS
    height: 80, // Altura da tab bar
    paddingBottom: 10, // Espaçamento inferior
    paddingTop: 10, // Espaçamento superior
},
label: {
    fontSize: 14, // Altere aqui o tamanho da fonte
    fontWeight: "800", // Altere aqui o peso da fonte
},
});

export const tabBarColors = {
active: colors.BG_amarelo, // Active icon color
inactive: colors.BG_cinza, // Inactive icon color
};