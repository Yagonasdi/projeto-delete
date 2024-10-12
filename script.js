document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('delete-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const title = document.getElementById('title').value;

        /*try {
            const response = await fetch('/delete-livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({ booktitle: title }) // Usando URLSearchParams para enviar dados
            });*/

            try {
                // Envia os dados para o backend usando fetch
                const response = await fetch('http://localhost:4000/api/livros', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded' // Ajustado para o tipo correto
                    },
                    body: new URLSearchParams({ title: title }) // Enviando como URLSearchParams
                });
    
                console.log("response:: ", response)

            if (response.ok) {
                const message = await response.text();
                alert(message); // Exibe mensagem de sucesso
                form.reset(); // Limpa o formulário
            } else {
                alert('Erro ao deletar livro.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados. Tente novamente.');
        }
    });
});
