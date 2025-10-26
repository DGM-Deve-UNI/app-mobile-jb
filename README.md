# APP Agendamento JB

Resumo
- Aplicativo móvel para agendamento de serviços/consultas com interface simples e fluxo rápido de criação e gerenciamento de compromissos.
- Projeto: app-agendamento-jb

Principais funcionalidades
- Cadastro e login de usuários (email/senha, OAuth opcional)
- Visualização de agenda / calendário
- Criação, edição e cancelamento de agendamentos
- Notificações locais/push (lembretes)
- Perfil do usuário e histórico de agendamentos
- Sincronização com backend (API REST/GraphQL)

Tecnologias (exemplo)
- UI: React Native (Expo) ou React Native CLI
- Estado: Context API / Redux / Zustand
- Backend: API REST (Node/Express, Firebase, etc.)
- Autenticação: JWT / Firebase Auth
- Armazenamento: AsyncStorage / SecureStore
- CI/CD: GitHub Actions / EAS Build (Expo)

Instalação (local)
1. Pré-requisitos
   - Node.js >= 16, npm ou yarn
   - Expo CLI (se usar Expo): `npm install -g expo-cli`
   - Android Studio / Xcode (para emuladores) ou dispositivo físico

2. Clonar e instalar
   - git clone <repo-url>
   - cd app-agendamento-jb
   - npm install | yarn install

3. Executar em desenvolvimento
   - Com Expo:
     - `expo start`
     - Abrir no Android/iOS via QR code
   - Com React Native CLI:
     - Android: `npx react-native run-android`
     - iOS: `npx react-native run-ios`

Configuração
- Variáveis de ambiente (exemplo .env)
  - API_URL=https://api.example.com
  - FIREBASE_API_KEY=...
  - NOTIFICATIONS_KEY=...
- Adicionar chaves/segredos conforme backend e serviços (não commitar .env)

Build / Distribuição
- Expo:
  - `eas build --platform android`
  - `eas build --platform ios`
- React Native CLI:
  - Gerar builds nativos via Android Studio / Xcode

Testes e qualidade
- Rodar testes unitários: `npm test` (Jest)
- Lint: `npm run lint` (ESLint)
- Format: `npm run format` (Prettier)

Boas práticas
- Não commitar segredos (.env, keystore)
- Usar branches por funcionalidade/bugfix
- Documentar mudanças no CHANGELOG

Contribuição
- Abrir issue descrevendo o problema/feature
- Criar branch: `feature/<descricao>`
- Fazer PR com descrição, screenshots e testes quando aplicável

Troubleshooting (comuns)
- Erro de cache: `expo start -c` ou `npx react-native start --reset-cache`
- Dependências nativas: rodar `cd android && ./gradlew clean` ou limpar pods em iOS

<!-- Modelos e telas (substituir por imagens reais)
- docs/screenshots/home.png
- docs/screenshots/agenda.png
- docs/screenshots/perfil.png -->

Licença
- Defina uma licença (ex.: MIT) no arquivo LICENSE

Contato
- Mantenedor: equipe de desenvolvimento
- Para suporte: abrir issue no repositório

<!-- Notas finais
- Ajuste instruções de instalação e build conforme o stack real do projeto (Expo vs RN CLI, serviços backend).
- Atualize este README com links, imagens e comandos reais antes de publicar. -->
---