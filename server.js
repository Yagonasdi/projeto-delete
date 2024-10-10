const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
app.post('/delete-livro', (req, res) => {
    const title = req.body.booktitle;

    // Filtra o livro a ser deletado
    livros = livros.filter(livro => livro.title !== title);

    console.log(`Livro "${title}" foi deletado.`);
    res.send(`Livro "${title}" foi deletado.`);
});

// Servidor rodando na porta 3000
app.listen(5500, () => {
    console.log('Servidor rodando em http://localhost:5500');
});
