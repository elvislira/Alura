import { listaPrecos } from "./tabela-livros.js"
import { indiceMenorNumero } from "./menor-valor.js"
 
export const selectionSort = (tabelaLivros) => {
    let tabela = tabelaLivros
 
    for (let indiceAtual = 0; indiceAtual < tabela.length; indiceAtual++) {
        let indiceMenorValor = indiceMenorNumero(listaPrecos(), indiceAtual)
        let livroAtual = tabela[indiceAtual]
        tabela[indiceAtual] = tabela[indiceMenorValor]
        tabela[indiceMenorValor] = livroAtual
    }
 
    return tabela
}
