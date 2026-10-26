const express = require("express");
const alunoService = require("./services/alunoService");

function createApp(service = alunoService) {
  const app = express();

  app.use(express.json());

  app.post("/alunos", async (req, res) => {
    try {
      const aluno = await service.cadastrarAluno(req.body);
      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        error: error.message || "Erro ao cadastrar aluno.",
      });
    }
  });

  app.get("/alunos", async (req, res) => {
    try {
      const alunos = await service.listarAlunos();
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(500).json({
        error: "Erro ao listar alunos.",
      });
    }
  });

  return app;
}

module.exports = { createApp };