import Admin from './Admin.js'
import Docente from './Docente.js'
 
const novoAdmin = new Admin('Joana', 'j@j.com', '1980-10-25')
console.log(novoAdmin.toString())
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 9))
 
const novoDocente = new Docente('Ana Maria', 'ana@email.com', '1970-05-29')
console.log(novoDocente.toString())
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Carlos', 'JavaScript'))
 
novoDocente.nome = 'Fulano de Tal'
console.log(novoDocente.nome)
