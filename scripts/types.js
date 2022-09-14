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

const nameType = type => dictionaryName[type];

export {nameType};