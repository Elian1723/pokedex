import { UI } from "./ui.js";

let init = 1, limit = 9;

const previous = document.querySelector("#btn-previous");
const next = document.querySelector("#btn-next");


previous.addEventListener("click", () =>{
    const newUI = new UI();
    newUI.previous();
});

next.addEventListener("click", () =>{
    const newUI = new UI();
    newUI.next();
});

class Pokemon{
    constructor(name, id, types, image, stats){
        this.name = name;
        this.id = id;
        this.types = types;
        this.image = image;
        this.stats = stats;
    }
}

const fetchPokemon = async id =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await res.json();

        const newPokemon = new Pokemon(data.name, data.id, data.types, data.sprites, data.stats);
        const newUI = new UI();
        newUI.addPoke(newPokemon);
    } catch (error){
        console.log(error);
    }
}

const fetchPokemons = async (init, limit) =>{
    for(let i=init; i<=limit; i++){
        await fetchPokemon(i);
    }
}

fetchPokemons(init, limit);

export {fetchPokemons};