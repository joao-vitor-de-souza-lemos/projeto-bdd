# 🥒 BDD Testing — SauceDemo (Cucumber + Playwright)

> Automação de testes com abordagem BDD utilizando Cucumber e Playwright, cobrindo fluxos de autenticação do sistema [SauceDemo](https://www.saucedemo.com) com cenários escritos em linguagem Gherkin.

---

## 📌 Sobre o Projeto

Este repositório contém uma suíte de testes automatizados seguindo a metodologia **BDD (Behavior Driven Development)**, utilizando **Cucumber** para a escrita dos cenários em linguagem **Gherkin** e **Playwright** como engine de automação do navegador.

O projeto integra o padrão **Page Object Model (POM)** à estrutura BDD, centralizando a lógica de interação com a interface nos Page Objects e mantendo os Step Definitions focados no comportamento esperado da aplicação.

---

## 🛠️ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) — engine de automação de navegador
- [Cucumber](https://cucumber.io/) — framework BDD para JavaScript
- [Gherkin](https://cucumber.io/docs/gherkin/) — linguagem de escrita dos cenários BDD
- JavaScript (CommonJS) — linguagem dos testes e configurações
- Git & GitHub — versionamento e hospedagem do projeto

---

## 📁 Estrutura do Projeto

```
projeto-bdd/
├── tests/
│   ├── features/
│   │   └── login.feature          # Cenários BDD em Gherkin
│   ├── pages/
│   │   └── loginPage.js           # Page Object da tela de Login
│   └── step_definitions/
│       ├── hooks.js               # Hooks Before/After (setup e teardown)
│       ├── login.step.js          # Step Definitions dos cenários de Login
│       └── catalog.step.js        # Step Definitions dos cenários de Catálogo
├── .gitignore
├── cucumber.json                  # Configuração do Cucumber
├── package.json                   # Dependências e scripts do projeto
├── playwright.config.js           # Configuração do Playwright
└── README.md
```

---

## ✅ Cenários Implementados

### Feature: Login de usuário

| Cenário | Credenciais | Tipo | Status |
|---------|-------------|------|--------|
| Login com senha incorreta | `standard_user` / senha inválida | Negativo | ✅ Implementado |
| Login com sucesso | `standard_user` / senha válida | Positivo | ✅ Implementado |

### Exemplo de cenário em Gherkin

```gherkin
Scenario: Login com sucesso
    Given que o cliente está na tela de login
    When preenche o nome de usuário "standard_user" e uma senha "secret_sauce"
    And clica no botão Entrar
    Then o cliente será redirecionado para a tela de catálogos
```

---

## 🌍 Aplicação Testada

- **Sistema:** SauceDemo — aplicação pública para estudos de QA
- **URL:** https://www.saucedemo.com
- **Credenciais de acesso:** disponíveis publicamente na própria página de login do ambiente demo

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18+

---

## 🚀 Como Executar

**1. Clone o repositório:**
```bash
git clone https://github.com/joao-vitor-de-souza-lemos/projeto-bdd.git
cd projeto-bdd
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Instale os browsers do Playwright:**
```bash
npx playwright install
```

**4. Execute os testes:**
```bash
npm test
```

---

## 👤 Autor

**João Vitor de Souza Lemos**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaolemos2004-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/joaolemos2004)
[![GitHub](https://img.shields.io/badge/GitHub-joao--vitor--de--souza--lemos-black?style=flat&logo=github)](https://github.com/joao-vitor-de-souza-lemos)
