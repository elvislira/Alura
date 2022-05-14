import { edFolha, edGalho } from "./listas.js"

export const juntarListas = (lista1, lista2) => {
    let listaUnica = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let posicaoAtualListaUnica = 0

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let itemAtualLista1 = lista1[posicaoAtualLista1]
        let itemAtualLista2 = lista2[posicaoAtualLista2]

        if (itemAtualLista1.preco < itemAtualLista2.preco) {
            listaUnica.push(itemAtualLista1)
            posicaoAtualLista1++
        } else {
            listaUnica.push(itemAtualLista2)
            posicaoAtualLista2++
        }

        posicaoAtualListaUnica++
    }

    while (posicaoAtualLista1 < lista1.length) {
        listaUnica.push(lista1[posicaoAtualLista1])
        posicaoAtualLista1++
        posicaoAtualListaUnica++
    }

    while (posicaoAtualLista2 < lista2.length) {
        listaUnica.push(lista2[posicaoAtualLista2])
        posicaoAtualLista2++
        posicaoAtualListaUnica++
    }

    return listaUnica
}
