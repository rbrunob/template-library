#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

async function main() {
    const templateDir = path.join(__dirname, "template");
    const targetDir = process.cwd();

    console.log("🚀 Criando seu projeto com o template...");

    try {
        await fs.copy(templateDir, targetDir, {
            overwrite: true,
            errorOnExist: false,
        });

        console.log("✅ Projeto criado com sucesso!");
        console.log("👉 Agora rode 'npm install' ou 'pnpm install' para instalar as dependências.");
    } catch (err) {
        console.error("❌ Erro ao criar o projeto:", err);
    }
}

main();
