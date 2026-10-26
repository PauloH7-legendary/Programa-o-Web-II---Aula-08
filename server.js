require("dotenv/config");

const { createApp } = require("./src/app");
const { prisma } = require("./src/lib/prisma");

const app = createApp();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

async function encerrarServidor() {
  server.close(async () => {
    await prisma.$disconnect();
    console.log("Servidor encerrado.");
  });
}

process.on("SIGINT", encerrarServidor);
process.on("SIGTERM", encerrarServidor);