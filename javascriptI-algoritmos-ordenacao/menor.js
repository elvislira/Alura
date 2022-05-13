const listaNumeros = [50, 15, 25, 35, 6, 45]

let indiceMenor = 0
let indiceAtual

for (let indice = 0; indice < listaNumeros.length; indice++) {
    indiceAtual = indice

    if (listaNumeros[indiceAtual] < listaNumeros[indiceMenor]) {
        indiceMenor = indiceAtual
        indiceAtual = indice
    }
}

console.log(listaNumeros[indiceMenor])
