import { tabelaLivros } from "./tabela-livros.js"
import { selectionSort } from "./selection-sort.js"
import { insertionSort } from "./insertion-sort.js"

console.table(selectionSort(tabelaLivros))
console.table(insertionSort(tabelaLivros))
