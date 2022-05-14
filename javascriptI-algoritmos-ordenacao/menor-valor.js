export const indiceMenorNumero = (array, posicaoInicial) => {
    let indiceMenor = posicaoInicial
 
    for (let indiceAtual = posicaoInicial; indiceAtual < array.length; indiceAtual++) {
        if (array[indiceAtual] < array[indiceMenor]) {
            indiceMenor = indiceAtual
        }
    }
 
    return indiceMenor
}
