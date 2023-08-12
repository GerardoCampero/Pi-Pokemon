

const cleanArray = (arr) => {
    
    const pokeArr = arr.map(pokemon => {
        return {
            ID: pokemon.data.id,
            Nombre: pokemon.data.name,
            Imagen: pokemon.data.sprites.other['official-artwork'].front_default,
            Vida: pokemon.data.stats[0].base_stat,
            Ataque: pokemon.data.stats[1].base_stat,
            Defensa: pokemon.data.stats[2].base_stat,
            Velocidad: pokemon.data.stats[5].base_stat,
            Altura: pokemon.data.height,
            Peso: pokemon.data.weight,
            Created:  false
        }
    })
    // console.log(...pokeArr);
    return pokeArr;
}; 

const cleanArrayList = (arr) => {
    
    const pokeArr = arr.map(pokemon => {
        // console.log(...pokemon)
        return [...pokemon]
        
    })
    // console.log(...pokeArr);
    return [...pokeArr];
}; 

const cleanArrayAPI = (arr) => {
    
    const pokeArr = arr.map(pokemon => {
        const type = pokemon.data.types.map(poke => {
            return poke.type.name;
        })
        return {
            ID: pokemon.data.id,
            Nombre: pokemon.data.name,
            Imagen: pokemon.data.sprites.other['official-artwork'].front_default,
            Vida: pokemon.data.stats[0].base_stat,
            Ataque: pokemon.data.stats[1].base_stat,
            Defensa: pokemon.data.stats[2].base_stat,
            Velocidad: pokemon.data.stats[5].base_stat,
            Altura: pokemon.data.height,
            Peso: pokemon.data.weight,
            Tipo: type,
            Created:  false
        }
    })
    // console.log(pokeArr);
    return pokeArr;
}; 

const cleanArrayDB = (arr) => {
    // console.log(arr)
    const pokeArr = arr.map(pokemon => {
        const type = pokemon.dataValues.types.map(poke => {
            return poke.Nombre;
        })
        return {
            ID: pokemon.dataValues.ID,
            Nombre: pokemon.dataValues.Nombre,
            Imagen: pokemon.dataValues.Imagen,
            Vida: pokemon.dataValues.Vida,
            Ataque: pokemon.dataValues.Ataque,
            Defensa: pokemon.dataValues.Defensa,
            Velocidad: pokemon.dataValues.Velocidad,
            Altura: pokemon.dataValues.Altura,
            Peso: pokemon.dataValues.Peso,
            Tipo: type,
            Created:  true
        }
    })
    // console.log(pokeArr);
    return pokeArr;
}; 


const cleanPokeDB = (pokemon, typeID) => {
   

    const type = typeID.map(poke => {
            return poke.dataValues.Nombre;
        })
        return {
            ID: pokemon.dataValues.ID,
            Nombre: pokemon.dataValues.Nombre,
            Imagen: pokemon.dataValues.Imagen,
            Vida: pokemon.dataValues.Vida,
            Ataque: pokemon.dataValues.Ataque,
            Defensa: pokemon.dataValues.Defensa,
            Velocidad: pokemon.dataValues.Velocidad,
            Altura: pokemon.dataValues.Altura,
            Peso: pokemon.dataValues.Peso,
            Tipo: type,
            Created:  true
        }
}; 



module.exports = {
    cleanArray,
    cleanArrayAPI,
    cleanArrayDB,
    cleanArrayList,
    cleanPokeDB
}