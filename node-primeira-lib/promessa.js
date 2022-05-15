import chalk from "chalk"

function promessa(booleano) {
    const parametro = booleano

    return new Promise((resolve, reject) => {
        if (!parametro) {
            reject(new Error(chalk.red('Erro na promessa!')))
        }

        resolve('Sucesso na promessa')
    })
}

function exibeResposta(texto) {
    console.log(chalk.green(texto))
}

promessa(true)
    .then(texto => exibeResposta(texto))
