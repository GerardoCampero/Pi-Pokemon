const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png",
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Velocidad: {
      type: DataTypes.INTEGER,
    },
    Altura: {
      type: DataTypes.INTEGER,
    },
    Peso: {
      type: DataTypes.INTEGER,
    },
    Created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  },
  );
};
