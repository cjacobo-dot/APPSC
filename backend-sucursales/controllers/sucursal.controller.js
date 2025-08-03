const Sucursal = require('../models/sucursal.model');

// Crear sucursal
exports.createSucursal = async (req, res) => {
  try {
    const nueva = await Sucursal.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    console.log('Error creando:', error);
    res.status(500).json({ mensaje: 'No se pudo crear la sucursal' });
  }
};

// Listar todas
exports.getSucursales = async (req, res) => {
  try {
    const todas = await Sucursal.findAll();
    res.json(todas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al traer sucursales' });
  }
};

// Buscar por ID
exports.getSucursalById = async (req, res) => {
  try {
    const una = await Sucursal.findByPk(req.params.id);
    if (!una) return res.status(404).json({ mensaje: 'No encontrada' });
    res.json(una);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar' });
  }
};

// Actualizar
exports.updateSucursal = async (req, res) => {
  try {
    const id = req.params.id;
    const [cambios] = await Sucursal.update(req.body, {
      where: { id }
    });
    if (cambios === 0) return res.status(404).json({ mensaje: 'No encontrada' });
    res.json({ mensaje: 'Sucursal actualizada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar' });
  }
};

// Eliminar
exports.deleteSucursal = async (req, res) => {
  try {
    const borrada = await Sucursal.destroy({ where: { id: req.params.id } });
    if (borrada === 0) return res.status(404).json({ mensaje: 'No encontrada' });
    res.json({ mensaje: 'Sucursal eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar' });
  }
};

