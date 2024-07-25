document.getElementById('cadastroOdontopediatraForm').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value;
    let crm = document.getElementById('crm').value;
    let especialidade = document.getElementById('especialidade').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (!nome || !crm || !especialidade || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }

    // Mais validações podem ser adicionadas aqui, se necessário.
});
