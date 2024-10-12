const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
// Simulação de um "banco de dados" (uma lista de livros para deletar)
let livros = [
    { title: 'Livro A' },
    { title: 'Livro B' },
    { title: 'Livro C' }
];

// Configura o Express para servir arquivos estáticos (como HTML, CSS, etc.)
app.use(express.static(__dirname)); 

// Configura o body-parser para processar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para deletar o livro
app.delete('/api/livros', async (req, res) => {
    const { title } = req.body;

    try {
        // Altere a URL aqui para corresponder ao seu banco de dados
        const response = await fetch(`http://localhost:4000/api/livros/${title}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`Livro "${title}" foi deletado do banco de dados.`);
            res.send(`Livro "${title}" foi deletado.`);
        } else {
            console.error('Erro ao deletar livro do banco de dados.');
            res.status(response.status).send('Erro ao deletar livro do banco de dados.');
        }
    } catch (error) {
        console.error('Erro na requisição ao banco de dados:', error);
        res.status(500).send('Erro ao conectar ao banco de dados.');
    }
});

// Servidor rodando na porta 5500
app.listen(5500, () => {
    console.log('Servidor rodando em http://localhost:5500');
});