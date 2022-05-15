import chalk from "chalk"
import { readFile, promises } from "fs"

function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultado = []
    let temp

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultado.push({ [temp[1]]: temp[2] })
    }

    return arrayResultado.length === 0 ? 'Não há links' : arrayResultado
}

function tratarErro(erro) {
    throw new Error(chalk.red(`${erro.code} Erro ao tentar ler o arquivo!`))
}

export async function lerArquivoAsyncAwait(caminhoArquivo) {
    const encoding = 'utf-8'

    try {
        const texto = await promises.readFile(caminhoArquivo, encoding)
        return extrairLinks(texto)
    } catch (erro) {
        tratarErro(erro)
    }
}

function lerArquivoComPromise(caminhoArquivo) {
    const encoding = 'utf-8'

    promises.readFile(caminhoArquivo, encoding)
        .then(conteudoArquivo => console.log(chalk.greenBright(conteudoArquivo)))
        .catch(erro => tratarErro(erro))
}

function lerArquivoSemPromise(caminhoArquivo) {
    const encoding = 'utf-8'

    readFile(caminhoArquivo, encoding, (erro, conteudoArquivo) => {
        if (erro) {
            tratarErro(erro)
        }

        console.log(chalk.bgBlackBright(conteudoArquivo))
    })
}
