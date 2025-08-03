const express = require('express');
const router = express.Router();
const controlador = require('../controllers/sucursal.controller');

// Crear
router.post('/', controlador.createSucursal);

// Leer todas
router.get('/', controlador.getSucursales);

// Leer una
router.get('/:id', controlador.getSucursalById);

// Actualizar
router.put('/:id', controlador.updateSucursal);

// Eliminar
router.delete('/:id', controlador.deleteSucursal);

module.exports = router;
