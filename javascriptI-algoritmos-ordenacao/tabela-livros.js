export const tabelaLivros = [
    {titulo: 'Node.js', preco: 100},
    {titulo: 'JavaScript', preco: 25},
    {titulo: 'PHP', preco: 15},
    {titulo: 'Java', preco: 30},
    {titulo: 'Elixir', preco: 50},
    {titulo: 'Go', preco: 45},
    {titulo: 'Python', preco: 20}
]
 
export const listaPrecos = () => {
    let precosLivros = []
    
    tabelaLivros.forEach((livro) => precosLivros.push(livro.preco))
    
    return precosLivros
}
