import { UI } from "./ui.js";

let init = 1, limit = 9;


const ui = new UI();
const previous = document.querySelector("#btn-previous");
const next = document.querySelector("#btn-next");
const home = document.querySelector("#home");

previous.addEventListener("click", () =>{
    ui.previous();
});

next.addEventListener("click", () =>{
    ui.next();
});

home.addEventListener("click", () =>{
    ui.home();
})

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
        ui.addPoke(newPokemon);
    } catch (error){
        console.log(error);
    }
}

export const fetchPokemons = async (init, limit) =>{
    ui.loading();

    for(let i=init; i<=limit; i++){
        await fetchPokemon(i);
    }

    ui.loaded();
}

fetchPokemons(init, limit);
