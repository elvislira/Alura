import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {id: 1, 'titulo': 'Senhor dos Aneis'},
    {id: 2, 'titulo': 'O Hobbit'}
];

// Consulta
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    let indice = buscaLivro(req.params.id);

    res.json(livros[indice]);
});

// Inserção
app.post('/livros', (req, res) => {
    livros.push(req.body);

    res.status(201).send('Livro foi cadastrado com sucesso.')
});

// Alteração
app.put('/livros/:id', (req, res) => {
    let indice = buscaLivro(req.params.id);

    livros[indice].titulo = req.body.titulo;

    res.json(livros);
});

// Exclusão
app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let indice = buscaLivro(id);

    livros.splice(indice, 1);

    res.send(`Livro ${id} removido com sucesso.`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;

