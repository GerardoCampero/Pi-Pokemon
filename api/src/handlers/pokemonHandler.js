const { createPoke, getPokemonById, getAllPokemons, getPokemonByName } = require('../controllers/pokeControllers')
const { getType, interList, pokeType, creatTypesList } = require('../controllers/typeControllers');


const getPokemons = async (req, res) => {
    const { name } = req.query;
    // console.log(name);
    try{
        const results = name ? await getPokemonByName(name) : await getAllPokemons();
        // console.log(results)
        res.status(201).json(results);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
    };


const getPokemon = async (req, res) => {
    const { id }= req.params;
    const source = isNaN(id) ? 'bbdd' : 'api';
    try{
        const pokemon = await getPokemonById(id, source);
        res.status(201).json(...pokemon);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
    };

const postPokemon = async (req, res) => {
    const { Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo } =  req.body;
     try {
        const name = Nombre.toLowerCase()
        const newPokemon = await createPoke(name, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso);
        const pokemonType = await getType(Tipo);
        await interList(newPokemon.ID, pokemonType)
        const fullPokemon = await pokeType(newPokemon.ID, pokemonType)
        res.status(201).json(fullPokemon);
     } catch(error) { 
        res.status(400).json({ error: error.message });
     }
    };


module.exports = {
    getPokemon,
    getPokemons,
    postPokemon
};


