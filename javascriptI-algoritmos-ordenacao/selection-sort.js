import { tabelaLivros } from "./lista-livros.js";
import { menorNumero } from "./menor-valor.js";

function selectionSort(array) {
    let arrayOrdenado = array

    for (let indice = 0; indice < arrayOrdenado.length; indice++) {
        let menorNum = menorNumero(arrayOrdenado, indice)

        let itemAtual = arrayOrdenado[indice]
        let itemMenor = arrayOrdenado[menorNum]

        let livroAtual = arrayOrdenado[menorNum]
        arrayOrdenado[menorNum] = arrayOrdenado[indice]
        arrayOrdenado[indice] = livroAtual
    }

    return arrayOrdenado
}

console.log(selectionSort(tabelaLivros))
