import { createServer } from 'http';

const porta = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Entrei na página de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Página de editora',
    '/sobre': 'Info sobre o projeto'
}

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(porta, () => {
    console.log(`Servidor escutando em http://localhost:${porta}`)
})
