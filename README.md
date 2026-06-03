# TypeScript Test com Jest 🧪

Projeto inicial para demonstração e aprendizado de testes automatizados em ambientes TypeScript utilizando o framework Jest.

## 🚀 Tecnologias Utilizadas

- **TypeScript** (Linguagem)
- **Jest** (Framework de Testes)
- **ts-jest** (Pré-processador para suporte TypeScript no Jest)

## 📁 Estrutura do Projeto

```text
├── src/
│   └── ts/
│       └── calc.ts         # Código de produção (funções matemáticas)
├── __tests__/
│   └── calc.test.ts       # Arquivos de testes unitários
├── jest.config.js          # Configuração do Jest
├── package.json            # Dependências e scripts do projeto
└── tsconfig.json           # Configuração do TypeScript
```

## 📦 Como Instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd typescript-test-jest
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## 🛠️ Como Executar os Testes

O projeto possui scripts configurados para rodar os testes de forma simples.

Executa todos os testes uma única vez:
```bash
npm test
```

Executa os testes em modo Watch (atualiza automaticamente ao salvar um arquivo):
```bash
npm run test:watch
```


