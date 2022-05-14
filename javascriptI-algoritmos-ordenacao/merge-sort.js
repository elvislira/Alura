const ordena = (array1, array2) => {
    let posicaoAtualArray1 = 0
    let posicaoAtualArray2 = 0
    const arrayResultante = []

    while (posicaoAtualArray1 < array1.length && posicaoAtualArray2 < array2.length) {
        let produtoAtualArra1 = array1[posicaoAtualArray1]
        let produtoAtualArra2 = array2[posicaoAtualArray2]

        if (produtoAtualArra1.preco < produtoAtualArra2.preco) {
            arrayResultante.push(produtoAtualArra1)
            posicaoAtualArray1++
        } else {
            arrayResultante.push(produtoAtualArra2)
            posicaoAtualArray2++
        }
    }

    return arrayResultante.concat(
        posicaoAtualArray1 < array1.length ? array1.slice(posicaoAtualArray1) : array2.slice(posicaoAtualArray2)
    )
}

export const mergeSort = (arrayLivros) => {
    if (arrayLivros.length > 1) {
        let meioArray = Math.floor(arrayLivros.length / 2)

        const tabelaParte1 = mergeSort(arrayLivros.slice(0, meioArray))
        const tabelaParte2 = mergeSort(arrayLivros.slice(meioArray, arrayLivros.length))

        arrayLivros = ordena(tabelaParte1, tabelaParte2)
    }

    return arrayLivros
}

