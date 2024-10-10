document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('delete-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const title = document.getElementById('title').value;

        try {
            const response = await fetch('/delete-livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({ booktitle: title }) // Usando URLSearchParams para enviar dados
            });

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
