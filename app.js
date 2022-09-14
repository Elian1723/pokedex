const conteiner = document.querySelector("#poke-conteiner-all");
const previous = document.querySelector("#btn-previous");
const next = document.querySelector("#btn-next");

let init = 1;
let limit = 9;

previous.addEventListener("click", () =>{
    if(init!=1){
        init -= 9;
        removeChildNodes(conteiner);
        fetchPokemons(init, limit + init -1);
    }
});

next.addEventListener("click", () =>{
    init += 9;
    removeChildNodes(conteiner);
    fetchPokemons(init, limit + init -1);
});


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
    let color = pokemon.types[0].type.name;
    pokeType.textContent = nameType(color);
    pokeType.style.background = colorType(color);

    elements.appendChild(pokeType);
    
    if(pokemon.types.length == 2 ){
        const pokeType = document.createElement('span');
        let color = pokemon.types[1].type.name;
        pokeType.textContent = nameType(color);
        pokeType.style.background = colorType(color);
        card.appendChild(pokeType);
        elements.appendChild(pokeType);
    }

    card.appendChild(img);
    card.appendChild(numb);
    card.appendChild(name);
    card.appendChild(elements);

    conteiner.appendChild(card);
}

const removeChildNodes = (parent) =>{
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

fetchPokemons(init, limit);
