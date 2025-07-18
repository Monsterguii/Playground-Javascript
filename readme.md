# 🚀 Playground JavaScript

Bem-vindo ao meu playground de JavaScript e Node.js! Este repositório é dedicado aos meus estudos, experimentos e práticas com JavaScript moderno e Node.js.

## 📚 Sobre

Este é meu espaço de aprendizado onde exploro diversas funções sobre javascript e seus arredores, como node.js, express, e até suas aplicações no front-end, então esperem um pouco de HTML e CSS aqui rs.
Quero usar este espaço para praticar tudo o que for possivel fazer com javascript, buscando um maior entedimento e proficiência na sua usabilidade fullstack.

## 🗂️ Estrutura do Projeto

Esta estrutura inicial servirá como bases para todos os estudos feitos neste repositório, sempre contendo um exemplo para estudo e depois uma aplicação prática.

```
📁 Playground Javascript/
├── 📁 Export_e_Import/          # Estudos sobre módulos
│   ├── exportado.js             # Exemplo de exports
│   ├── importar.js              # Exemplo de imports
│   └── 📁 exercicio/            # Exercício prático
│       ├── funcoes_auxiliares.js # Funções modulares
│       ├── main.js              # Aplicação principal
│       ├── main_promises.js     # Versão com Promises
│       ├── main_promisify.js    # Versão com util.promisify
│       └── main_callbacks.js    # Versão com callbacks
└── 📄 readme.md                 # Este arquivo
```

## 🎯 Objetivos de Aprendizado

- [x] **Módulos JavaScript** - Entender exports/imports
- [x] **Programação Assíncrona** - Dominar callbacks, promises e async/await
- [ ] **APIs REST** - Criar e consumir APIs
- [ ] **Express.js** - Framework web para Node.js
- [ ] **Banco de Dados** - Integração com MongoDB/PostgreSQL
- [ ] **Testes** - Jest e outras ferramentas de teste
- [ ] **Deploy** - Publicação de aplicações

## 🛠️ Tecnologias Estudadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 🔥 Projetos em Destaque

### 📊 Sistema de Maior Número
Um exercício prático que demonstra:
- Uso de módulos (exports/imports)
- Interface de linha de comando com `readline`
- Diferentes abordagens para programação assíncrona
- Tratamento de entrada do usuário

**Localização**: `Export_e_Import/exercicio/`

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM (incluso com Node.js)

### Executando os Projetos

```bash
# Navegue até o diretório do projeto
cd "Export_e_Import/exercicio"

# Execute a versão principal
node main.js

# Ou experimente outras versões
node main_promises.js
node main_promisify.js
node main_callbacks.js
```

## 📖 Conceitos Aprendidos

### 🔄 Export/Import
```javascript
// Exportando (funcoes_auxiliares.js)
module.exports = { gets, prints };

// Importando (main.js)
const { gets, prints } = require('./funcoes_auxiliares.js');
```

### ⚡ Programação Assíncrona

#### 1. Callbacks Tradicionais
```javascript
rl.question('Pergunta:', (resposta) => {
    // Código executado após resposta
});
```

#### 2. Promises + Async/Await
```javascript
const pergunta = (texto) => new Promise(resolve => {
    rl.question(texto, resolve);
});

const resposta = await pergunta('Digite algo:');
```

#### 3. Recursão para Iterações Assíncronas
```javascript
function perguntarProximoNumero() {
    if (contador < 4) {
        rl.question('Digite um número: ', (input) => {
            processarInput(input);
            contador++;
            perguntarProximoNumero(); // Recursão
        });
    }
}
```

## 🎓 Recursos de Estudo

- 📘 [MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- 📗 [Node.js Documentation](https://nodejs.org/docs/)
- 📙 [JavaScript.info](https://javascript.info/)
- 📕 [Eloquent JavaScript](https://eloquentjavascript.net/)

## 🤝 Contribuições

Este é um repositório pessoal de estudos, mas sugestões e dicas são sempre bem-vindas! Sinta-se à vontade para:
- Abrir issues com sugestões
- Propor melhorias nos códigos
- Compartilhar recursos de aprendizado

## 📈 Progresso

```
🟢 Módulos JavaScript ████████████████████████████████████████ 100%
🟢 Callbacks           ████████████████████████████████████████ 100%
🟢 Promises/Async      ████████████████████████████████████████ 100%
🟡 APIs REST           ████████████████████░░░░░░░░░░░░░░░░░░░░  50%
🔴 Express.js          ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  20%
🔴 Banco de Dados      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   0%
🔴 Testes              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   0%
```

## 📝 Notas

Este repositório é uma documentação viva do meu aprendizado em JavaScript e Node.js. Cada pasta e arquivo representa um conceito estudado e praticado.

---

⭐ **Curtiu o projeto?** Deixe uma estrela no repositório!

**Autor**: Guilherme Dias
**Contato**: guilhermediasfp1@gmail.com
**LinkedIn**: https://www.linkedin.com/in/guilherme-dias-53266b29a/