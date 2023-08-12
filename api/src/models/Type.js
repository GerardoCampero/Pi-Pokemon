const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('type', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
      },
)}