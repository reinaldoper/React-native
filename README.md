# React Native App

Este é um projeto de exemplo em React Native que utiliza navegação entre telas e busca dados de uma API.

## Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI

## Instalação

1. Clone o repositório:

```bash
git clone git@github.com:reinaldoper/React-native.git
cd React-native
```

2. Instale as dependências:

  ```bash
  npm install
  # ou
  yarn install
  ```

3. Inicie o projeto:

  ```bash
  npx expo start
  ```

3. Estrutura do Projeto

- App.js: Arquivo principal que configura a navegação entre as telas.
- screens/HomeScreen.js: Tela inicial que exibe uma lista de posts.
- screens/DetailsScreen.js: Tela de detalhes que exibe informações detalhadas de um post.
- styles.js: Arquivo de estilos para o projeto.
- app.json: Arquivo de configuração do Expo.

4. Dependências

- react-native-elements: Biblioteca de componentes UI para React Native.
- react-native-vector-icons: Biblioteca de ícones para React Native.
- expo: Framework e plataforma para React Native.

5. HomeScreen

- A tela inicial (HomeScreen) busca e exibe uma lista de posts da API JSONPlaceholder. Cada post é exibido em um cartão com um botão "Ver Detalhes" que navega para a tela de detalhes.

6. DetailsScreen

- A tela de detalhes (DetailsScreen) exibe informações detalhadas de um post específico. Se os dados ainda estiverem sendo carregados, um spinner (ActivityIndicator) é exibido.


## Publicação no Expo

1. Faça login no Expo:

  ```bash
  expo login
  ```

2. Publique o projeto no Expo:

  ```bash
  npx expo publish
  ```

## Build para Produção:

1. Instale o eas-cli:

  ```bash
  npm install -g eas-cli
  ```

2. Configure o EAS Build:

  ```bash
  eas build:configure
  ```

3. Inicie o build para Android:

  ```bash
  eas build -p android
  ```

4. Inicie o build para iOS:

  ```bash
  eas build -p ios
  ```

## Contribuição:

- Faça um fork do projeto.
- Crie uma branch para sua feature (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adiciona nova feature').
- Faça um push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.



### Explicação

- **Pré-requisitos**: Lista os requisitos necessários para rodar o projeto.
- **Instalação**: Instruções para clonar o repositório e instalar as dependências.
- **Estrutura do Projeto**: Descrição dos principais arquivos e suas funções.
- **Dependências**: Lista das principais dependências do projeto.
- **Uso**: Explicação de como as telas funcionam.
- **Publicação no Expo**: Instruções para publicar o projeto no Expo.
- **Build para Produção**: Instruções para criar builds de produção usando o EAS.
- **Contribuição**: Instruções para contribuir com o projeto.

