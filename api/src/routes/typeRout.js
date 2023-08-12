const { Router } = require('express');
const { getTypes } = require('../handlers/typeHandler')
const typesHandler =  Router();

typesHandler.get('/', getTypes);

module.exports = typesHandler;