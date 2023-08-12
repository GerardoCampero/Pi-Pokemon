const { Type, pokemonsTypes, Pokemon } = require('../db');
const axios = require('axios');
const { cleanTypes } = require('../utils/typesUtils');
const { Op } = require('sequelize');
const { cleanArrayDB, cleanPokeDB } = require('../utils/cleanArray')
const TYPEAPIURL = 'https://pokeapi.co/api/v2/type'

const creatTypesList = async () => {
    const typesAPI = (await axios.get(TYPEAPIURL)).data.results
    const cleanTypesArr = cleanTypes(typesAPI)
    await Promise.all(cleanTypesArr.map((type) => {
        Type.create({ID: type.ID, Nombre: type.Nombre})
        })
    );
}

const getTypesList = async () => {
    let typesDB = await Type.findAll();
    if(typesDB.length === 0) {
        await creatTypesList();
        typesDB = await Type.findAll();
        return [...typesDB];
    } else {
        return [...typesDB];
    }
}

const getType =  async (names) => {
    let types = [];
    let index = 0;
    while(types.length !== names.length) {
        let type =  await Type.findOne({ where: { Nombre: names[index] }})
        types.push(type.dataValues);
        index = index + 1;       
    }


    // const types = await Promise.all(names.map((name) => {
    //     console.log(name)
    //     Type.findOne({ where: { Nombre: name }})
    // }))
    
    // await Promise.all(types)
    // console.log(types)
    return types;
}

const interList = async (pokeID, typeID) => {
    await typeID.map(type => {
        pokemonsTypes.create({pokemonID: pokeID, typeID: type.ID})
    })
    
}

const pokeType = async (pokeID, typeID) => {

    const newID = typeID.map(type => {
        return type.ID;
    })
    
    let fullPokemon =[] 
    
    while(fullPokemon.length === 0) {
        fullPokemon = await Pokemon.findAll({
            where: {
                ID: pokeID
            },
            include: [{
                model: Type,
                where: {
                    ID: {
                        [Op.in]: newID
                    }
                }
            }]
        })
    
    }
    
    
    
    fullPokemon = cleanArrayDB(fullPokemon);
    return fullPokemon;
}

const pokeTypeDB = async (pokemon) => {
    const typeID = await pokemonsTypes.findAll({
        attributes: ['typeID'],
        where: {
            pokemonID: pokemon.dataValues.ID,
        }
    })

    const type = [];

    for(const index of typeID){
        const types = await Type.findAll({
            attributes: ['Nombre'],
            where: {
                ID: index.dataValues.typeID
            }
        })
        
        type.push(types[0])
    } 

    return cleanPokeDB(pokemon, type)
}

module.exports = {
    getTypesList,
    getType,
    interList,
    pokeType,
    creatTypesList,
    pokeTypeDB
}