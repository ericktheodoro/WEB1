// Criança
document.getElementById('cadastroCriancaForm').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let genero = document.getElementById('genero').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (!nome || !dataNascimento || !genero || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }

    // Mais validações podem ser adicionadas aqui, se necessário.
});

// Avatar

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('avatarForm');
    const avatarVisualizacao = document.getElementById('avatarVisualizacao');

    const elementosAvatar = {
        corPele: '',
        formatoOlhos: '',
        corOlhos: '',
        boca: '',
        cabelo: '',
        roupa: ''
    };

    form.addEventListener('change', function(event) {
        const { name, value } = event.target;
        elementosAvatar[name] = value;
        atualizarAvatarVisualizacao();
    });

    function atualizarAvatarVisualizacao() {
        avatarVisualizacao.innerHTML = `
            <div class="avatar-part" style="background: url('images/pele-${elementosAvatar.corPele}.png')"></div>
            <div class="avatar-part" style="background: url('images/olhos-${elementosAvatar.formatoOlhos}-${elementosAvatar.corOlhos}.png')"></div>
            <div class="avatar-part" style="background: url('images/boca-${elementosAvatar.boca}.png')"></div>
            <div class="avatar-part" style="background: url('images/cabelo-${elementosAvatar.cabelo}.png')"></div>
            <div class="avatar-part" style="background: url('images/roupa-${elementosAvatar.roupa}.png')"></div>
        `;
    }
});
