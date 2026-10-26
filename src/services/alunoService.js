const { prisma } = require("../lib/prisma");

async function cadastrarAluno({ nome, email }, prismaClient = prisma) {
  if (
    typeof nome !== "string" ||
    !nome.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    const error = new Error("Nome e e-mail são obrigatórios.");
    error.statusCode = 400;
    throw error;
  }

  return prismaClient.aluno.create({
    data: {
      nome: nome.trim(),
      email: email.trim(),
    },
  });
}

async function listarAlunos(prismaClient = prisma) {
  return prismaClient.aluno.findMany({
    orderBy: {
      nome: "asc",
    },
  });
}

module.exports = {
  cadastrarAluno,
  listarAlunos,
};