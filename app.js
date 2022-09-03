const conteiner = document.querySelector("#poke-conteiner-all");

const fetchPokemon = id =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>response.json())
    .then(data=>{
        createNode(data);
    });
}

// obtener los pokémon por intervalo
const fetchPokemons = (init, limit) => {
    for(i=init; i<=limit; i++){
        // obtener los pokémon uno por uno
        fetchPokemon(i);
    }
}

const createNode = pokemon =>{
    const card = document.createElement('div');
    card.classList.add("poke-conteiner");

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.classList.add("poke-image");

    const numb = document.createElement('p');
    numb.classList.add("poke-numb");
    numb.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.textContent = pokemon.name;

    const elements = document.createElement('div');
    elements.classList.add("poke-types");
    
    const pokeType = document.createElement('span');
    pokeType.textContent = pokemon.types[0].type.name;

    elements.appendChild(pokeType);
    
    if(pokemon.types.length == 2 ){
        const pokeType = document.createElement('span');
        pokeType.textContent = pokemon.types[1].type.name;
        card.appendChild(pokeType);
        elements.appendChild(pokeType);
    }

    card.appendChild(img);
    card.appendChild(numb);
    card.appendChild(name);
    card.appendChild(elements);

    conteiner.appendChild(card);
}


fetchPokemons(1, 9);