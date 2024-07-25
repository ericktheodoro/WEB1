document.getElementById('avatarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Validação básica
    if (!formData.get('corPele') || !formData.get('formatoOlhos') || !formData.get('corOlhos') || !formData.get('boca') || !formData.get('cabelo') || !formData.get('roupa')) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Envio dos dados para o servidor
    fetch('processarAvatar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Avatar salvo com sucesso!');
        } else {
            alert('Erro ao salvar avatar: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao salvar avatar.');
    });
});
