const containerListaPersonagens = document.querySelector('.lista-personagens');

async function listarPersonagens() {
    const api = await fetch(`http://localhost:3000/personagens`);

    const listaPersonagens = await api.json();
    
    listaPersonagens.forEach(personagem => {
        const li = document.createElement('li');
        li.classList.add('lista__personagens-item');

        const img = document.createElement('img');
        img.src = `./imagens/chars/${personagem.nome}.webp`;
        img.alt = `icone ${personagem.nome}`;

        li.append(img);

        li.addEventListener('click', () => {
            containerListaPersonagens.querySelectorAll('li')
                .forEach(icone => {
                    icone.classList.remove('active');
                })
            li.classList.add('active');
        })

        containerListaPersonagens.append(li);
    })
}

listarPersonagens();