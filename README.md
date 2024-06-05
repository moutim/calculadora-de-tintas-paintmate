
# 1. Visão Geral do Projeto
![image](https://github.com/moutim/calculadora-de-tintas/assets/88093439/6cb647ca-bfcb-46d1-8466-92b6a64a1d6b)

- **Nome do Projeto**: PaintMate 🎨✨

- **Descrição**: PaintMate é uma calculadora projetada para ajudar o usuário a determinar a quantidade de tinta necessária para pintar uma sala composta por quatro paredes.

  [Protótipo no Figma](https://www.figma.com/design/Pskw0uHahpxJ3Zik2mInda/Calculadora-de-Tintas?node-id=0-1&t=RSe31Ez2jZC3tWsB-0) 🖌️📐

- **Tecnologias Utilizadas**:
  - **Frontend**: React, Typescript, Context API, Axios, HTML, CSS, Cypress (testes E2E), ESLint 🛠️📦
  - **Backend**: NestJS, Typescript, Swagger, Jest (testes E2E).

# 2. Estrutura do Projeto
- **Arquitetura**: Tanto o backend quanto o frontend estão estruturados em módulos para facilitar a escalabilidade e organização.
  - **Frontend**: Dividido em módulos, componentes e páginas.
  - **Backend**: Dividido em módulos, controladores, serviços e módulos.

# 3. Configuração e Instalação
#### 3.1. Com Docker 🐳
- **Pré-requisitos**: Docker

- **Instalação e Execução do Projeto**:
  1. Clone o repositório: `git clone git@gitlab.com:moutim/digital-republic-case.git`
  2. Abra o terminal na pasta clonada.
  3. Execute o comando `docker-compose up` para iniciar o projeto.
  4. Acesse o frontend em: [http://localhost:3000/](http://localhost:3000/) 🖥️
  5. Acesse a documentação Swagger do backend em: [http://localhost:5000/api](http://localhost:5000/api) 📚

#### 3.2. Localmente 🏠
- **Pré-requisitos**: Node.js, NPM ou Yarn

- **Clonagem do Repositório**:
  1. Clone o repositório: `git clone git@gitlab.com:moutim/digital-republic-case.git`
  2. Abra o terminal na pasta clonada.

- **Execução do Frontend**:
  1. Entre na pasta do frontend: `cd front`
  2. Instale as dependências: `npm install` ou `yarn install`
  3. Rode o projeto: `npm run dev` ou `yarn dev`

- **Execução do Backend**:
  1. Entre na pasta do backend: `cd back`
  2. Instale as dependências: `npm install` ou `yarn install`
  3. Rode o projeto: `npm run dev` ou `yarn dev`

# 4. Tecnologias usadas
### 4.1 Backend
- **Estrutura do Backend**: A estrutura de pasta está dividida em módulos para uma melhor organização, com cada módulo tendo uma responsabilidade específica, como o módulo `calculator` para realizar o cálculo.
  - **Pasta Principal**:
    - **src**: Contém todo o código-fonte.
      - **modules**: Contém os módulos do projeto.
        - **calculator**: Módulo responsável pelo cálculo.
      - **controllers**: Controladores da aplicação.
      - **services**: Serviços da aplicação.
      - **dtos**: Data Transfer Objects usados pela aplicação.
      - **interfaces**: Interfaces e tipos.
      - **main.ts**: Arquivo principal de inicialização.

- **Principais Dependências**: Swagger, ESLint, Jest, Typescript

- **Endpoints da API**:
  - **POST /calcular**: Recebe um body com as informações das quatro paredes e retorna a área total a ser pintada, litros necessários e quantos galões são necessários.

### 4.2 Frontend
- **Estrutura do Frontend**: Assim como o backend, o frontend é estruturado em módulos para melhor organização. O módulo `home` é responsável pela página principal da aplicação.
  - **Pasta Principal**:
    - **src**: Contém todo o código-fonte.
      - **modules**: Contém os módulos do projeto.
        - **Home**: Página principal.
      - **components**: Componentes reutilizáveis.
      - **utils**: Serviços de API.
      - **contexts**: Contextos para gerenciamento de estado.
      - **App.tsx**: Componente principal da aplicação.
      - **index.tsx**: Ponto de entrada da aplicação.

- **Principais Dependências**: ESLint, Cypress, React, Axios, Typescript

- **Rotas**: A aplicação possui uma rota principal e está projetada para ser facilmente expandida para incluir mais rotas conforme necessário no futuro.

- **Estilos**: A estilização foi feita principalmente com CSS, utilizando uma abordagem modular para escalabilidade.

# 5. Testes

- **Testes End-to-End do FrontEnd**:
  - **Framework Utilizado**: Cypress
  - **Como Rodar os Testes no Terminal**:
    1. Abra o terminal na pasta do frontend.
    2. Execute o comando `npm run test:e2e`.
  - **Como Rodar os Testes no Dashboard do Cypress**:
    1. Abra o terminal na pasta do frontend.
    2. Execute o comando `npm run cypress`.
    3. Acesse os testes E2E e execute os specs. 🚀✨

- **Testes no Backend**:
  - **Framework Utilizado**: Jest
  - **Tipos de Testes**: Testes End-to-End (E2E)
  - **Como Rodar os Testes no Terminal**:
    - Abra o terminal na pasta do backend.
    - Execute o comando `npm run test:e2e` para rodar todos os testes.  🧪🔍📊



# Contato

**Informações de Contato:** Para dúvidas e suporte, entre em contato.

- **Email:** [moutimg@gmail.com](mailto:moutimg@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/vitormoutim/](https://www.linkedin.com/in/vitormoutim/)

