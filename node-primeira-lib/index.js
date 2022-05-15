import chalk from "chalk"
import { readFile, promises } from "fs"

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extrairLinks(texto) {
    const regex = /\[[^\]]*\]\((https?:\/\/[^$#\s]*)\)/gm
    const linksExtraidos = texto.match(regex)

    console.log(linksExtraidos)
}

extrairLinks(texto)

function tratarErro(erro) {
    throw new Error(chalk.red(`${erro.code} Erro ao tentar ler o arquivo!`))
}

async function lerArquivoAsyncAwait(caminhoArquivo) {
    const encoding = 'utf-8'

    try {
        const texto = await promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(texto))
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

// console.log(lerArquivoAsyncAwait('./arquivos/texto1.md'))

//  \[[^\]]*\]\((https?:\/\/[^$#\s]*)\)