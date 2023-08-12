const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRouter = require('./pokemonRout');
const typesRouter = require('./typeRout')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokeRouter),
router.use('/types', typesRouter),


module.exports = router;
