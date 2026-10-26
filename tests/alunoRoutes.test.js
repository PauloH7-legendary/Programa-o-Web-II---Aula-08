import { describe, it, expect, vi } from "vitest";
import request from "supertest";

const { createApp } = require("../src/app");

describe("Rotas de alunos", () => {
  it("deve cadastrar um aluno e retornar 201", async () => {
    const alunoCriado = {
      id: 1,
      nome: "Ana Silva",
      email: "ana@example.com",
    };

    const serviceMock = {
      cadastrarAluno: vi.fn().mockResolvedValue(alunoCriado),
      listarAlunos: vi.fn(),
    };

    const app = createApp(serviceMock);

    const resposta = await request(app)
      .post("/alunos")
      .send({
        nome: "Ana Silva",
        email: "ana@example.com",
      });

    expect(resposta.status).toBe(201);
    expect(resposta.body).toEqual(alunoCriado);
    expect(serviceMock.cadastrarAluno).toHaveBeenCalledWith({
      nome: "Ana Silva",
      email: "ana@example.com",
    });
  });

  it("deve listar alunos e retornar 200", async () => {
    const alunos = [
      { id: 1, nome: "Ana Silva", email: "ana@example.com" },
      { id: 2, nome: "Bruno Lima", email: "bruno@example.com" },
    ];

    const serviceMock = {
      cadastrarAluno: vi.fn(),
      listarAlunos: vi.fn().mockResolvedValue(alunos),
    };

    const app = createApp(serviceMock);

    const resposta = await request(app).get("/alunos");

    expect(resposta.status).toBe(200);
    expect(resposta.body).toEqual(alunos);
    expect(serviceMock.listarAlunos).toHaveBeenCalledOnce();
  });
});