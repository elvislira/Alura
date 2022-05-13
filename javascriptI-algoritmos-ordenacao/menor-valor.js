import { tabelaLivros } from "./lista-livros.js"

// const listaNumeros = [50, 15, 25, 35, 6, 45]


export function menorNumero(arrayNumeros, posicaoInicial) {
    let indiceMenor = posicaoInicial
    let indiceAtual = posicaoInicial

    for (let indice = posicaoInicial; indice < arrayNumeros.length; indice++) {
        indiceAtual = indice

        if (arrayNumeros[indiceAtual].preco < arrayNumeros[indiceMenor].preco) {
            indiceMenor = indiceAtual
            indiceAtual = indice
        }
    }

    return indiceMenor
}


// console.log(menorNumero(tabelaLivros, 0))
