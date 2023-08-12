const { Pokemon, pokemonsTypes, Type  } = require('../db');
const { cleanArray, cleanArrayAPI, cleanArrayList,  cleanPokeDB } = require('../utils/cleanArray');
const axios = require('axios');
const { Op } = require('sequelize');
const { pokeTypeDB } = require('./typeControllers') ;
const POKEAPIURL = 'https://pokeapi.co/api/v2/pokemon'

const createPoke = async (Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => 
    await Pokemon.create({ 
        Nombre, 
        Imagen, 
        Vida, 
        Ataque, 
        Defensa, 
        Velocidad, 
        Altura, 
        Peso
    });



const getPokemonById = async (id, source) => {
    let pokemonster = source === 'api'
        ? [(await axios.get(`${POKEAPIURL}/${id}`))] 
        : await Pokemon.findByPk(id);
        if(source === 'api') {
            return pokemonster = cleanArrayAPI(pokemonster);
        } else {
            let pokeBox = [];
            pokeBox.push(await pokeTypeDB(pokemonster));
            console.log(pokeBox)
            return pokeBox;
        }
        
    
}

const getAllPokemons = async () => {
    const pokemonsDB = await Pokemon.findAll();
    let pokeIndex = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25';
    let cleanPokemonsAPI = []
    while(pokeIndex !== 'https://pokeapi.co/api/v2/pokemon?offset=150&limit=25') {
    const pokemonsAPI = (await axios.get(pokeIndex)).data
    pokeIndex = pokemonsAPI.next;
    const pokeDataApiProm = pokemonsAPI.results.map((pokemon) =>  axios.get(pokemon.url))
    const pokeDataApi =  await Promise.all(pokeDataApiProm);
    cleanPokemonsAPI = [...cleanPokemonsAPI, (cleanArrayAPI(pokeDataApi))];
    // console.log(...cleanPokemonsAPI)
    }
    
    const pokeList = cleanArrayList(cleanPokemonsAPI)

    const pokeListDb = await Promise.all(pokemonsDB.map( async (poke) => {
        return  await pokeTypeDB(poke);
    }))

    console.log(...pokeListDb)

    
    return [ ...pokeList, pokeListDb];
}

const getPokemonByName = async (name) => {
    const nameMin =  name.toLowerCase()
    const pokemonDB = await Pokemon.findOne({ where: { Nombre: {
       [Op.like]: `%${nameMin}%`}} }); 
    if(pokemonDB) {
        return pokemonDB.dataValues;
    } else {
       try{ const pokemonAPI = [(await axios.get(`${POKEAPIURL}/${nameMin}`))];
        const cleanPokemonAPI = cleanArray(pokemonAPI);
        let pokeBox = [];
        pokeBox.push(cleanPokemonAPI)
        return pokeBox;
    } catch(error){
        throw new Error('No existe Pokémon con ese nombre');
    }
    }
    
    
    

    
}

module.exports = {
    createPoke,
    getPokemonById,
    getAllPokemons,
    getPokemonByName
}