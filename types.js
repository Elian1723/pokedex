const dictionaryName = {
    steel: "Acero",
    water: "Agua",
    bug: "Bicho",
    dragon: "Dragón",
    electric: "Eléctrico",
    ghost: "Fantasma",
    fire: "Fuego",
    fairy: "Hada",
    ice: "Hielo",
    fighting: "Lucha",
    normal: "Normal",
    grass: "Planta",
    psychic: "Psíquico",
    rock: "Roca",
    dark: "Siniestro",
    ground: "Tierra",
    poison: "Veneno",
    flying: "Volador"
}


const dictionaryType = {
    steel: "#696969", // acero
    water: "#188be0", // agua
    bug: "#a8b820", // bicho
    dragon: "#7038f8", //dragón
    electric: "#f8d030", // eléctrico
    ghost: "#705898", // fantasma
    fire: "#f08030", // fuego
    fairy: "#ee99ac", // hada
    ice: "#98d8d8", // hielo
    fighting: "#c03028", // lucha
    normal: "#a8a878", // normal
    grass: "#78c850", // planta
    psychic: "#f85888", // psíquico
    rock: "#b8a038", // roca
    dark: "#705848", // siniestro
    ground: "#e0c068", // tierra
    poison: "#a040a0", // veneno
    flying: "#a890f0" // volador
}

const colorType = type => dictionaryType[type];
const nameType = type => dictionaryName[type];