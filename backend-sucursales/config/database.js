// Configuración de Sequelize para conectar a MySQL

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sucursales_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
