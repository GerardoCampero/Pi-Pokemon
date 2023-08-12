const { getTypesList } = require('../controllers/typeControllers');

const getTypes = async (req, res) => {
    try{
        const types = await getTypesList();
        res.status(201).json(types);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { 
    getTypes
}