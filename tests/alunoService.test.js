import { describe, it, expect, vi } from "vitest";
import alunoService from "../src/services/alunoService.js";

const { cadastrarAluno } = alunoService;

describe("Cadastro de alunos", () => {
  it("deve cadastrar um aluno com dados válidos", async () => {
    const alunoCriado = {
      id: 1,
      nome: "Ana Silva",
      email: "ana@example.com",
    };

    const prismaMock = {
      aluno: {
        create: vi.fn().mockResolvedValue(alunoCriado),
      },
    };

    const resultado = await cadastrarAluno(
      {
        nome: " Ana Silva ",
        email: " ana@example.com ",
      },
      prismaMock
    );

    expect(prismaMock.aluno.create).toHaveBeenCalledWith({
      data: {
        nome: "Ana Silva",
        email: "ana@example.com",
      },
    });

    expect(resultado).toEqual(alunoCriado);
  });

  it("deve rejeitar o cadastro quando o nome estiver vazio", async () => {
    const prismaMock = {
      aluno: {
        create: vi.fn(),
      },
    };

    await expect(
      cadastrarAluno(
        {
          nome: "",
          email: "ana@example.com",
        },
        prismaMock
      )
    ).rejects.toMatchObject({
      message: "Nome e e-mail são obrigatórios.",
      statusCode: 400,
    });

    expect(prismaMock.aluno.create).not.toHaveBeenCalled();
  });
});