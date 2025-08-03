console.log('🔵 Iniciando backend');

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const rutasSucursales = require('./routes/sucursal.routes');

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

app.use('/sucursales', rutasSucursales);

sequelize.authenticate()
  .then(() => {
    console.log(' Conectado a MySQL');
    app.listen(PUERTO, () => {
      console.log(`🚀 Servidor en http://localhost:${PUERTO}`);
    });
  })
  .catch((err) => {
    console.error(' Error al conectar la base:', err.message);
  });


