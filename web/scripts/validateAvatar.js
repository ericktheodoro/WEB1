document.addEventListener('DOMContentLoaded', function() {
    const images = {
        corPele: {
            clara: 'images/corPele/branco.png',
            media: 'images/corPele/pardo.png',
            escura: 'images/corPele/preta.png'
        },
        formatoOlhos: {
            redondos: 'images/formatoOlhos/redondos.png',
            amendoados: 'images/formatoOlhos/amendoados.png',
            puxados: 'images/formatoOlhos/puxados.png'
        },
        corOlhos: {
            azul: 'images/corOlhos/azul.png',
            verde: 'images/corOlhos/verde.png',
            castanho: 'images/corOlhos/castanho.png'
        },
        boca: {
            sorridente: 'images/boca/sorridente.png',
            seria: 'images/boca/seria.png',
            triste: 'images/boca/triste.png'
        },
        cabelo: {
            curto: 'images/cabelo/curto.png',
            medio: 'images/cabelo/medio.png',
            longo: 'images/cabelo/longo.png'
        },
        roupa: {
            camisa: 'images/roupa/camisa.png',
            vestido: 'images/roupa/vestido.png',
            calca: 'images/roupa/calca.png'
        }
    };

    const elements = {
        corPele: document.getElementById('corPele'),
        formatoOlhos: document.getElementById('formatoOlhos'),
        corOlhos: document.getElementById('corOlhos'),
        boca: document.getElementById('boca'),
        cabelo: document.getElementById('cabelo'),
        roupa: document.getElementById('roupa')
    };

    const imageElements = {
        corPele: document.getElementById('imagemCorPele'),
        formatoOlhos: document.getElementById('imagemFormatoOlhos'),
        corOlhos: document.getElementById('imagemCorOlhos'),
        boca: document.getElementById('imagemBoca'),
        cabelo: document.getElementById('imagemCabelo'),
        roupa: document.getElementById('imagemRoupa')
    };

    function updateImage(selectElement, imageElement, category) {
        imageElement.src = images[category][selectElement.value];
    }

    // Add event listeners for all select elements to update the images
    elements.corPele.addEventListener('change', function() {
        updateImage(this, imageElements.corPele, 'corPele');
    });

    elements.formatoOlhos.addEventListener('change', function() {
        updateImage(this, imageElements.formatoOlhos, 'formatoOlhos');
    });

    elements.corOlhos.addEventListener('change', function() {
        updateImage(this, imageElements.corOlhos, 'corOlhos');
    });

    elements.boca.addEventListener('change', function() {
        updateImage(this, imageElements.boca, 'boca');
    });

    elements.cabelo.addEventListener('change', function() {
        updateImage(this, imageElements.cabelo, 'cabelo');
    });

    elements.roupa.addEventListener('change', function() {
        updateImage(this, imageElements.roupa, 'roupa');
    });

    // Handle form submission
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
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('Avatar salvo com sucesso!');
                // Você pode querer redirecionar ou atualizar a página aqui
                // window.location.href = 'paginaDeSucesso.html';
            } else {
                alert('Erro ao salvar avatar: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao salvar avatar.');
        });
    });
});

