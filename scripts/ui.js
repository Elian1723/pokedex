import { nameType } from "./types.js";
import { fetchPokemons } from "./app.js"

let init = 1, limit = 9;

export const conteiner = document.querySelector("#poke-conteiner-all");
const nav = document.querySelector("#nav");
const spinner = document.querySelector("#spinner");

export class UI{
    addPoke(pokemon){
        const pokeConteiner = document.createElement("div");
        pokeConteiner.classList.add("poke-conteiner");
        
        const pokeInner = document.createElement("div");
        pokeInner.classList.add("poke-inner");

        const pokeFront = document.createElement("div");
        pokeFront.classList.add("poke-front");

        const pokeBack = document.createElement("div");
        pokeBack.classList.add("poke-back");

        // front card
        pokeFront.innerHTML += 
        `<img class="poke-image" src="${pokemon.image.front_default}">
            <p class="poke-numb">#${pokemon.id.toString().padStart(3, 0)}</p>
            <p>${pokemon.name}</p>`;
            
        const pokeTypes = document.createElement("div");
        pokeTypes.classList.add("poke-types");

        if(pokemon.types.length == 2){
            const pokeType1 = pokemon.types[0].type.name;
            const pokeType2 = pokemon.types[1].type.name;
            pokeTypes.innerHTML = `<span class="${pokeType1}">${nameType(pokeType1)}</span>
            <span class="${pokeType2}">${nameType(pokeType2)}</span>`;
        } else{
            const pokeType = pokemon.types[0].type.name;
            pokeTypes.innerHTML = `<span class="${pokeType}">${nameType(pokeType)}</span>`;
        }

        pokeFront.appendChild(pokeTypes)
        pokeInner.appendChild(pokeFront);

        // back card
        const statsConteiner = document.createElement("div");
        statsConteiner.classList.add("stats");
        statsConteiner.innerHTML +=
            `<p class="poke-numb">#${pokemon.id.toString().padStart(3, 0)}</p>
            <p class="hp">Hp: ${pokemon.stats[0].base_stat}</p>
            <p class="attack">Ataque: ${pokemon.stats[1].base_stat}</p>
            <p class="defense">Defensa: ${pokemon.stats[2].base_stat}</p>`;

        pokeBack.appendChild(statsConteiner);
        pokeInner.appendChild(pokeBack);

        pokeConteiner.appendChild(pokeInner);
        conteiner.appendChild(pokeConteiner);

        this.flip(pokeConteiner);
    }
    previous(){
        if(init!=1){
            init -= 9;
            this.removeChildNodes(conteiner);
            fetchPokemons(init, limit + init -1);
        }
    }
    next(){
        init += 9;
        this.removeChildNodes(conteiner);
        fetchPokemons(init, limit + init -1);
    }
    home(){
        init = 1;
        limit = 9;
        this.removeChildNodes(conteiner);
        fetchPokemons(init, limit);
    }
    removeChildNodes(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }
    flip(block){
        block.addEventListener("click", () =>{
            block.firstElementChild.classList.toggle("poke-flip");
        })
    }
    loading(){
        conteiner.style.display = "none";
        nav.style.display = "none";
        spinner.style.display = "block";
    }
    loaded(){
        conteiner.style.display = "grid";
        nav.style.display = "flex";
        spinner.style.display = "none";
    }
}