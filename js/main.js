/*variables*/


let asistentes = 20000

let pokemonList = [
    {
        id: 1,
        name: "Bulbasaur",
        sprite:"https://picsum.photos/id/236/200",
        stats: {
            str: 50,
            hp: 100,
            spd: 70
        }
    },
    {
        id: 2,
        name: "Squirtle",
        sprite:"https://picsum.photos/id/237/200",
        stats: {
            str: 50,
            hp: 80,
            spd: 100
        }
    },
    {
        id: 3,
        name: "charmander",
        sprite:"https://picsum.photos/id/238/200",
        stats: {
            str: 70,
            hp: 10,
            spd: 70
        }
    }
    ,
    {
        id: 4,
        name: "Ivysaur",
        sprite:"https://picsum.photos/id/239/200",
        stats: {
            str: 70,
            hp: 30,
            spd: 70
        }
    },
]

const printPokemon = (pokemon) => {
    /*extraemos el contenido actual*/
    let currentContent = document.querySelector(".pokemon-wrapper").innerHTML
    
    /*agregar el contenido nuevo junto con el contenido actual*/
    document.querySelector(".pokemon-wrapper").innerHTML = `
        ${currentContent}
        <div class="pokemon-card">
            <img src=${pokemon.sprite} alt="">
            <h2 class="pokemon-name">${pokemon.name}</h2>
            <ul class="pokemon-stats">
                <li>hp ${pokemon.stats.hp}</li>
                <li>str  ${pokemon.stats.str}</li>
                <li>spd  ${pokemon.stats.spd}</li>
            </ul>
        </div>
    `
}

pokemonList.forEach( pokemon => {
    printPokemon(pokemon)
})

/*

*/


/*
    -crear una lista de hobbies (array [])
        -nombre del hobbie
        -cuanto me gusta?
            {
                name:"Chess",
                rating:10
            }
    -recorrer la lista de hobbies, y en el body escribir por cada elemento de la lista:
            "El {hobbie} tiene un rating de {rating}"
            
*/
