export const insertionSort = (tabelaLivros) => {
    let tabela = tabelaLivros
    
    for (let indiceAtual = 1; indiceAtual < tabela.length; indiceAtual++) {
        let indiceAnalise = indiceAtual
 
        while (tabela[indiceAnalise].preco < tabela[indiceAnalise - 1].preco) {
            let livroAnalise = tabela[indiceAnalise]
            tabela[indiceAnalise] = tabela[indiceAnalise - 1]
            tabela[indiceAnalise - 1] = livroAnalise
 
            indiceAnalise--;
        }
    }
 
    return tabela
}
