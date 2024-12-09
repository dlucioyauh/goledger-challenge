
# GoLedger Challenge - Blockchain Music Platform

## Descrição do Projeto

Este projeto é uma aplicação React que utiliza a API da GoLedger para gerenciar registros em blockchain. A proposta principal é exibir artistas cadastrados na plataforma, utilizando tecnologias modernas e boas práticas de desenvolvimento.

---

## Funcionalidades Implementadas

- **Exibição de Artistas**:  
  A aplicação consome o endpoint `/api/query/search` para buscar e exibir artistas registrados na blockchain.

- **Feedback ao Usuário**:  
  Mensagens de carregamento, erros e ausência de dados são exibidas de forma clara para melhorar a experiência do usuário.

- **Estrutura Modular**:  
  A arquitetura do código facilita futuras expansões para inclusão de álbuns, músicas e playlists.

- **Design Responsivo e Simples**:  
  Layout adaptado para diferentes tamanhos de tela com uma interface limpa e funcional.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação da interface de usuário.
- **TypeScript**: Tipagem estática para maior confiabilidade do código.
- **Axios**: Para consumo da API.
- **React Router**: Gerenciamento de rotas.
- **CSS**: Estilização customizada.
- **Vite**: Ferramenta para desenvolvimento rápido e eficiente.

---

## Instalação e Execução

### Pré-requisitos
- Node.js v16+ instalado.
- Gerenciador de pacotes `npm` ou `yarn`.

### Passos para rodar a aplicação:

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor local:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação no navegador em:
   ```
   http://localhost:5173
   ```

---

## Limitações e Próximos Passos

### Limitações:
- A aplicação atual exibe apenas **artistas**. As funcionalidades para exibição de álbuns, músicas e playlists não foram implementadas devido ao prazo do desafio.

### Próximos Passos:
- Implementar os endpoints para listar álbuns, músicas e playlists.
- Adicionar suporte à criação, edição e exclusão de assets utilizando a API.
- Melhorar o design para uma experiência mais rica ao usuário.

---

## Considerações sobre a API

- **Transações**:  
  A API suporta operações como `deleteAsset` com suporte a cascata para exclusão de assets relacionados.

- **Schemas**:  
  Para obter detalhes sobre os assets e suas propriedades, utilize o endpoint `/getSchema`.

- **Swagger**:  
  A API possui documentação completa no Swagger. Endpoints como `/getTx` e `/getSchema` foram explorados para entender as regras de negócio.

---

## Contribuição

Este projeto foi desenvolvido como parte de um desafio técnico da GoLedger. Sugestões e feedbacks são bem-vindos!

---

## Autor

Douglas Lucio - Desenvolvedor Full Stack  
[LinkedIn](https://www.linkedin.com/in/douglaslucio) | [Email](mailto:dlucio.douglas@gmail.com)
```

