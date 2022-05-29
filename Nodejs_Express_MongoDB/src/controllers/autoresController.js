import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if (!err) {
                res.status(200).json(autores);
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (!err) {
                res.status(200).send(autores);
            } else {
                res.status(400).send({message: err.message});
            }
        });
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (!err) {
                res.status(201).send(autor.toJSON());
            } else {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o autor`})
            }
        })
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send('O autor foi atulizado com sucesso.');
            } else {
                res.status(500).send({message: err.message});
            }
        })
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'O autor foi excluido com sucesso.'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    };
};

export default AutorController;
