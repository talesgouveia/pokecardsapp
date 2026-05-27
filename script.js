'use strict';

const container = document.querySelector('.pokemons');
const select = document.getElementById('pokemonSelect');
const btnMostrar = document.getElementById('btnMostrar');
const searchInput = document.getElementById('searchInput');

let listaPokemons = [];// todos os pokemons carregados
let selecionadosFixos = new Set();// conjunto persistente dos selecionados

// carrega lista completa de pokemons
async function carregarPokemons() {
    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
        const dados = await resposta.json();
        listaPokemons = dados.results;
        atualizarDropdown(listaPokemons);
    } catch (erro) {
        console.error(erro);
        select.insertAdjacentHTML('beforeend', `<option disabled>Erro ao carregar pokemons</option>`);
    }
}

// atualiza dropdown com base na lista filtrada
function atualizarDropdown(lista) {
    select.innerHTML = '';
    lista.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;

        // mantem selecionados persistentes
        if (selecionadosFixos.has(pokemon.name)) {
            option.selected = true;
        }

        select.appendChild(option);
    });
}

// capturar mudancas de selecao e atualizar lista persistente
select.addEventListener('change', () => {
    Array.from(select.options).forEach(opt => {
        if (opt.selected) {
            selecionadosFixos.add(opt.value);
        } else {
            selecionadosFixos.delete(opt.value);
        }
    });
});

// filtrar conforme digita
searchInput.addEventListener('input', () => {
    const termo = searchInput.value.toLowerCase();
    const filtrados = listaPokemons.filter(p => p.name.toLowerCase().includes(termo));
    atualizarDropdown(filtrados);
});

// busca dados de um pokemon especifico
async function getPokemon(nome) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        if (!resposta.ok) 
            throw new Error(`Pokemon ${nome} não encontrado. Codigo erro: ${resposta.status}`);
        const dados = await resposta.json();

        const tipos = dados.types.map(t => t.type.name).join(', ');

        const html = `
            <article class="pokemon">
            <img class="pokemon__img" src="${dados.sprites.front_default}" alt="Imagem do ${dados.name}" />
            <div class="pokemon__data">
                <h3 class="pokemon__name">${dados.name}</h3>
                <p class="pokemon__row"><span>⚖️</span> Peso: ${(dados.weight / 10).toFixed(1)} kg</p>
                <p class="pokemon__row"><span>🔧</span> Tipo(s): ${tipos}</p>
            </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', html);
        container.style.opacity = 1;
    } catch (erro) {
        console.error(erro);
        container.insertAdjacentHTML('beforeend', `<p class="error">Algo deu errado: ${erro.message}</p>`);
        container.style.opacity = 1;
    }
}

// mostra pokemons selecionados
btnMostrar.addEventListener('click', () => {
    container.innerHTML = '';
    selecionadosFixos.forEach(nome => getPokemon(nome));
});

carregarPokemons();
