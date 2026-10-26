# Testes de Software - Aula 08

Projeto desenvolvido para praticar testes automatizados em uma aplicação Node.js, utilizando Express, Prisma ORM, SQLite, Vitest e Supertest.

## Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- Vitest
- Supertest

## Funcionalidades

A aplicação disponibiliza duas rotas para gerenciamento de alunos:

- `POST /alunos` - cadastra um aluno.
- `GET /alunos` - lista os alunos cadastrados.

Cada aluno possui um identificador, nome e e-mail.

## Testes automatizados

Foram implementados quatro testes:

### Testes unitários

- Verificação do cadastro de um aluno com dados válidos.
- Verificação da rejeição de um cadastro com nome vazio.

### Testes de rotas

- Verificação do cadastro de aluno, esperando o status HTTP `201`.
- Verificação da listagem de alunos, esperando o status HTTP `200`.

Os testes unitários utilizam mocks para simular as operações do Prisma, enquanto os testes de rotas utilizam Supertest para verificar as respostas da aplicação Express.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Prepare o banco de dados:

```bash
npx prisma migrate dev
npx prisma generate

```

Execute os testes:

```bash
npm test

```

Inicie o servidor:

```bash
node server.js

```

### Resultado dos testes

Os quatro testes automatizados passaram com sucesso utilizando o Vitest.