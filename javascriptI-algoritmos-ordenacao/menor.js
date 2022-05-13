import { tabelaLivros } from "./lista-livros.js"

// const listaNumeros = [50, 15, 25, 35, 6, 45]

let indiceMenor = 0
let indiceAtual

for (let indice = 0; indice < tabelaLivros.length; indice++) {
    indiceAtual = indice

    if (tabelaLivros[indiceAtual].preco < tabelaLivros[indiceMenor].preco) {
        indiceMenor = indiceAtual
        indiceAtual = indice
    }
}

console.log(tabelaLivros[indiceMenor].preco)
