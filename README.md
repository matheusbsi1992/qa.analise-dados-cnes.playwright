# 🧪 Automação de Testes e Análise de Profissionais — CNES

Projeto de **automação de testes com Playwright**, desenvolvido para realizar a navegação automatizada no sistema **CNES — Cadastro Nacional de Estabelecimentos de Saúde**, com foco na consulta e análise dos profissionais vinculados a um estabelecimento de saúde.

Durante a execução de um cenário de teste realizado em **29/09/2026**, foi identificada uma limitação no comportamento da funcionalidade de impressão disponibilizada pelo próprio sistema. A funcionalidade não era acionada conforme o comportamento esperado durante a execução automatizada.

Diante dessa situação, foi adotada uma estratégia alternativa para preservar a validação do cenário e produzir evidências estruturadas e rastreáveis.

A solução consistiu na **coleta automatizada dos dados apresentados nas tabelas de profissionais**, seguida da geração de um arquivo **Excel (.xlsx)** contendo os dados obtidos durante a execução.

Além da evidência estruturada em planilha, foi utilizada a **gravação da execução automatizada em vídeo**, permitindo registrar visualmente o fluxo executado pelo teste.

---

## 📌 Objetivo

O objetivo deste projeto é demonstrar a aplicação de **automação de testes end-to-end** utilizando Playwright para:

- realizar a navegação automatizada no sistema CNES;
- localizar e acessar um estabelecimento;
- acessar a área de profissionais;
- percorrer as páginas disponíveis através da paginação;
- coletar os dados apresentados nas tabelas;
- estruturar os dados coletados;
- gerar uma evidência em formato `.xlsx`;
- registrar a execução automatizada em vídeo;
- produzir evidências que possam ser utilizadas durante a análise do cenário.

O projeto também demonstra uma situação prática de QA na qual o comportamento esperado de uma funcionalidade não ocorre durante a automação e é necessário adaptar a estratégia de validação sem abandonar o objetivo do teste.

---

## 🎯 Contexto do cenário

Durante a execução automatizada de uma consulta no CNES, foi utilizado um fluxo semelhante ao seguinte:

```text
Acesso ao CNES
      ↓
Navegação pelo sistema
      ↓
Identificação do estabelecimento
      ↓
Acesso à seção de profissionais
      ↓
Localização da tabela de profissionais
      ↓
Identificação da paginação
      ↓
Navegação pelas páginas
      ↓
Coleta dos dados
      ↓
Estruturação das informações
      ↓
Geração do arquivo Excel
      ↓
Gravação da execução
      ↓
Evidências do teste
```

A intenção inicial incluía a utilização da funcionalidade de impressão disponibilizada pelo próprio sistema.

Entretanto, durante a execução automatizada, foi observado que o mecanismo de impressão não era acionado conforme esperado.

Em vez de considerar a execução perdida, foi adotada uma estratégia alternativa de evidência.

---

# 🔎 Problema identificado

A principal particularidade deste cenário foi a limitação encontrada durante a execução da funcionalidade de impressão.

O comportamento esperado era que a funcionalidade disponibilizada pelo sistema fosse acionada e permitisse a geração da impressão correspondente.

Durante a automação, entretanto, esse comportamento não ocorreu conforme esperado.

Esse tipo de situação é relevante em processos de **Quality Assurance**, pois uma falha ou limitação de uma funcionalidade auxiliar não necessariamente deve impedir a validação de todo o cenário.

Nesse caso, o objetivo principal era analisar os profissionais apresentados pelo sistema.

Por isso, foi utilizada uma abordagem alternativa:

> Em vez de depender exclusivamente da impressão, os dados apresentados na interface foram coletados automaticamente e estruturados em uma planilha Excel.

Essa abordagem permitiu manter a rastreabilidade do cenário e produzir uma evidência estruturada da informação analisada.

---

# 🧩 Estratégia de validação

A estratégia adotada foi dividida em duas formas principais de evidência.

### 1. Evidência estruturada

Os dados apresentados na tabela de profissionais foram coletados durante a execução automatizada e posteriormente organizados em um arquivo:

```text
.xlsx
```

Esse formato permite realizar posteriormente:

- consulta dos registros;
- filtragem;
- ordenação;
- conferência dos dados;
- análise dos profissionais;
- comparação entre resultados;
- armazenamento da evidência.

### 2. Evidência visual

A execução automatizada também foi registrada através da gravação disponibilizada pelo Playwright.

O vídeo permite acompanhar visualmente o fluxo executado pelo teste, incluindo a navegação realizada pelo navegador e a interação automatizada com o sistema.

Dessa forma, o projeto trabalha com dois tipos complementares de evidência:

```text
                 EXECUÇÃO DO TESTE
                         │
             ┌───────────┴───────────┐
             ↓                       ↓
       Evidência visual       Evidência estruturada
             │                       │
          Vídeo                    Excel
          (.mp4)                   (.xlsx)
```

---

# 🛠️ Tecnologias utilizadas

## JavaScript

Linguagem utilizada para implementação da automação e manipulação da lógica necessária para execução do cenário.

## Node.js

Ambiente utilizado para execução do projeto JavaScript e gerenciamento das dependências.

## Playwright

Framework utilizado para automação da navegação e interação com o sistema CNES.

O Playwright permite automatizar operações como:

- abertura do navegador;
- navegação entre páginas;
- localização de elementos;
- preenchimento de informações;
- cliques;
- leitura de conteúdo da página;
- validações;
- execução de testes end-to-end;
- gravação da execução.

## Playwright Test

Runner utilizado para organização e execução dos testes automatizados.

Também possibilita recursos importantes para este projeto, como:

- organização dos cenários;
- configuração de execução;
- assertions;
- controle de timeout;
- projetos de navegador;
- relatórios;
- gravação de evidências.

## XLSX

Biblioteca utilizada para trabalhar com arquivos Excel.

Neste projeto, ela é utilizada para transformar os dados coletados durante a automação em uma evidência estruturada no formato:

```text
.xlsx
```

---

# 📋 Fluxo automatizado

O fluxo principal do cenário pode ser representado da seguinte forma:

### Etapa 1 — Acesso ao sistema

O teste inicia a navegação automatizada até o sistema CNES.

### Etapa 2 — Localização do estabelecimento

O cenário realiza as operações necessárias para identificar o estabelecimento que será analisado.

### Etapa 3 — Acesso aos profissionais

Após a identificação do estabelecimento, a automação acessa a seção responsável pela apresentação dos profissionais.

### Etapa 4 — Identificação da tabela

O teste identifica a tabela contendo os profissionais apresentados pelo sistema.

### Etapa 5 — Paginação

Quando existem múltiplas páginas de resultados, o teste realiza a navegação entre as páginas disponíveis.

O objetivo é evitar que a análise fique restrita somente aos registros apresentados na primeira página.

### Etapa 6 — Coleta dos dados

Os dados apresentados na tabela são capturados durante a execução.

A coleta busca preservar as informações necessárias para posterior análise.

### Etapa 7 — Estruturação dos dados

Após a coleta, as informações são organizadas de forma estruturada.

### Etapa 8 — Geração do Excel

Os dados estruturados são exportados para um arquivo `.xlsx`.

O arquivo passa a representar uma evidência estruturada da execução.

### Etapa 9 — Registro da execução

A execução automatizada também pode ser registrada através da gravação do Playwright.

O vídeo complementa a planilha, permitindo observar o comportamento do teste durante a navegação.

---

# 📊 Evidência em Excel

A geração do arquivo Excel possui uma função importante dentro da estratégia de QA.

Em vez de manter os dados somente no contexto visual da página, as informações são transformadas em um artefato que pode ser armazenado e analisado posteriormente.

Exemplo conceitual:

```text
CNES
 │
 ├── Tabela apresentada no sistema
 │
 ↓
Playwright
 │
 ↓
Coleta automatizada
 │
 ↓
JavaScript
 │
 ↓
Estruturação dos dados
 │
 ↓
XLSX
 │
 ↓
Arquivo .xlsx
```

Esse processo possibilita utilizar o resultado da automação como uma evidência independente da interface visual.

---

# 🎥 Evidência através de vídeo

Além do arquivo Excel, a execução automatizada pode ser registrada em vídeo.

Essa evidência é particularmente importante para demonstrar:

- o fluxo percorrido pelo teste;
- a navegação realizada;
- as páginas acessadas;
- a interação com os elementos;
- a paginação;
- o comportamento observado durante a execução;
- a estratégia utilizada para contornar a limitação encontrada.

Assim, o projeto possui uma abordagem de evidência composta:

| Evidência | Formato | Finalidade |
|---|---|---|
| Dados coletados | `.xlsx` | Evidência estruturada |
| Execução automatizada | `.mp4` | Evidência visual |
| Código de automação | `.js` | Evidência técnica |
| Resultado do teste | Playwright Test | Evidência de execução |

---

# 🧪 Abordagem de QA

Este projeto não está limitado à execução de comandos automatizados.

Um dos principais objetivos é demonstrar o processo de análise realizado quando o comportamento esperado de uma funcionalidade não ocorre conforme planejado.

O fluxo adotado foi:

```text
Comportamento esperado
        ↓
Execução automatizada
        ↓
Comportamento observado
        ↓
Identificação da limitação
        ↓
Análise do objetivo do teste
        ↓
Definição de estratégia alternativa
        ↓
Coleta automatizada
        ↓
Geração das evidências
```

Essa abordagem permite separar dois conceitos:

**Comportamento da funcionalidade de impressão**

e

**Objetivo da validação do cenário.**

Mesmo diante da limitação encontrada na impressão, ainda era possível validar e registrar os dados apresentados na tabela de profissionais.

---

# 🔬 Rastreabilidade

A utilização de diferentes artefatos permite aumentar a rastreabilidade da execução.

A relação pode ser representada como:

```text
Cenário
   │
   ├── Código automatizado
   │
   ├── Execução Playwright
   │
   ├── Vídeo
   │
   └── Excel
```

Cada artefato possui uma finalidade diferente.

O código demonstra **como o cenário foi automatizado**.

O vídeo demonstra **como a execução ocorreu**.

O Excel demonstra **quais dados foram coletados**.

Essa combinação proporciona uma visão mais completa da execução.

---

# 📁 Organização conceitual do projeto

A estrutura do projeto segue uma organização voltada para automação utilizando Playwright.

Uma organização típica pode ser representada por:

```text
qa.analise.dados.cnes/
│
├── tests/
│   ├── arquivos de teste
│   └── ...
│
├── DSL/
│   └── recursos reutilizáveis
│
├── test-results/
│   └── resultados das execuções
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura acima deve ser ajustada caso os diretórios e arquivos do repositório possuam nomes diferentes.

---

# ⚙️ Pré-requisitos

Para executar o projeto, é necessário possuir um ambiente com:

- Node.js;
- npm;
- navegador compatível com Playwright;
- dependências do projeto instaladas.

Recomenda-se utilizar uma versão LTS do Node.js compatível com a versão do Playwright utilizada pelo projeto.

---

# 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/matheusbsi1992/qa.analise.dados.cnes.git
```

Acesse o diretório:

```bash
cd qa.analise.dados.cnes
```

Instale as dependências:

```bash
npm install
```

Caso seja necessário instalar os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

Em ambientes Linux, pode ser necessário instalar também as dependências dos navegadores:

```bash
npx playwright install-deps
```

---

# ▶️ Execução dos testes

A execução pode ser realizada através do Playwright Test.

Exemplo:

```bash
npx playwright test
```

Para executar visualizando o navegador:

```bash
npx playwright test --headed
```

Para executar um teste específico:

```bash
npx playwright test tests/NOME_DO_TESTE.spec.js
```

Para utilizar o modo de depuração:

```bash
npx playwright test --debug
```

Os comandos específicos podem variar de acordo com a configuração existente no projeto.

---

# 🌐 Navegadores

O Playwright permite executar o cenário em diferentes engines de navegador.

Entre as possibilidades:

```text
Chromium
Firefox
WebKit
```

Isso possibilita ampliar a cobertura do cenário e verificar o comportamento da automação em diferentes ambientes de navegador.

---

# 📹 Gravação da execução

A configuração do Playwright pode ser utilizada para registrar a execução automatizada.

O vídeo pode ser utilizado como evidência complementar ao resultado obtido pelo teste.

O fluxo de evidência fica:

```text
Teste automatizado
       ↓
Execução Playwright
       ↓
Gravação
       ↓
Vídeo
       ↓
Evidência visual
```

---

# 📈 Resultados esperados

Ao executar o cenário, espera-se obter:

1. execução automatizada do fluxo de consulta;
2. acesso à área de profissionais;
3. navegação pelas páginas disponíveis;
4. coleta dos dados apresentados;
5. geração do arquivo Excel;
6. registro da execução automatizada;
7. evidências suficientes para análise posterior.

---

# 🧠 Aprendizado de QA

Um dos principais aprendizados deste projeto está relacionado à capacidade de adaptação durante a execução de testes.

Em automação de testes, nem sempre todas as funcionalidades se comportam da forma esperada.

Quando isso ocorre, o trabalho de QA não deve necessariamente terminar na identificação do comportamento inesperado.

É necessário analisar:

- qual era o objetivo do cenário;
- qual comportamento era esperado;
- qual comportamento foi observado;
- qual funcionalidade foi afetada;
- quais informações ainda podem ser validadas;
- quais evidências podem ser produzidas;
- qual estratégia alternativa mantém a confiabilidade da análise.

Neste cenário, a impossibilidade de utilizar a impressão conforme esperado levou à adoção de uma estratégia baseada na **coleta automatizada dos dados e geração de evidência estruturada**.

---

# 🧪 Conceitos de testes aplicados

O projeto envolve conceitos relacionados a:

- Test Automation;
- End-to-End Testing;
- Functional Testing;
- Data Validation;
- Evidence Collection;
- Regression Testing;
- Exploratory Testing;
- Web Automation;
- Test Evidence;
- Test Traceability;
- Automated Data Extraction.

A aplicação desses conceitos permite utilizar a automação não apenas para verificar se um botão ou elemento está funcionando, mas também para **produzir dados e evidências úteis para o processo de qualidade**.

---

# 🔄 Estratégia utilizada

A estratégia deste projeto pode ser resumida em:

```text
┌───────────────────────────────┐
│      Sistema CNES             │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      Playwright               │
│   Automação do cenário        │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│   Consulta de profissionais   │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│       Paginação               │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Coleta dos dados          │
└───────────────┬───────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌───────────────┐  ┌───────────────┐
│     XLSX      │  │     Vídeo     │
│ Evidência     │  │ Evidência     │
│ estruturada   │  │ visual        │
└───────────────┘  └───────────────┘
```

---

# 📌 Conclusão

Este projeto demonstra uma aplicação prática de **automação de testes com Playwright**, utilizando JavaScript e Node.js para realizar a navegação, coleta e organização dos dados apresentados pelo CNES.

O diferencial do cenário está na estratégia adotada diante da limitação encontrada na funcionalidade de impressão.

Em vez de interromper o processo de validação, foi desenvolvida uma abordagem alternativa baseada na **extração automatizada dos dados da tabela de profissionais**, geração de uma evidência em Excel e registro da execução através de vídeo.

O projeto demonstra, portanto, que a automação de testes pode ser utilizada não somente para verificar comportamentos, mas também para **produzir evidências estruturadas, apoiar análises e aumentar a rastreabilidade dos resultados**.

---

# 📚 Referências

### Playwright

Documentação oficial:

https://playwright.dev/

### Node.js

Documentação oficial:

https://nodejs.org/

### CNES

Cadastro Nacional de Estabelecimentos de Saúde:

https://cnes.datasus.gov.br/

### XLSX

Biblioteca utilizada para manipulação de arquivos Excel:

https://www.npmjs.com/package/xlsx

---

# 🔗 Projeto

Repositório:

https://github.com/matheusbsi1992/qa.analise.dados.cnes

Publicação relacionada ao projeto:

https://www.linkedin.com/feed/update/urn:li:activity:7516936066512203776/

---

# 👨‍💻 Autor

**Matheus Andrade**

Projeto desenvolvido com foco em **Quality Assurance, Automação de Testes, Playwright, JavaScript e geração de evidências automatizadas**.
