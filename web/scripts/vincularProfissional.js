document.addEventListener('DOMContentLoaded', function() {
    fetch('obterProfissionais.php')
        .then(response => response.json())
        .then(data => {
            const selectProfissional = document.getElementById('profissional');
            data.forEach(profissional => {
                const option = document.createElement('option');
                option.value = profissional.id;
                option.textContent = `${profissional.nome} - ${profissional.especialidade}`;
                selectProfissional.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar a lista de profissionais:', error));
});
