import chalk from "chalk"
import { lerArquivoAsyncAwait } from "./script.js"

const caminho = process.argv

async function processaTexto(caminhoArquivo) {
    const resultado = await lerArquivoAsyncAwait(caminhoArquivo[2])
    
    console.log(chalk.yellow('Lista de links:'), resultado)
}

processaTexto(caminho)
