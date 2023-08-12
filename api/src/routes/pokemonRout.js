const { Router } = require('express');

const { getPokemon, getPokemons, postPokemon } = require('../handlers/pokemonHandler')

const pokeHandler = Router();

pokeHandler.get('/', getPokemons);

pokeHandler.get('/:id', getPokemon);

pokeHandler.post('/',postPokemon);


module.exports = pokeHandler;