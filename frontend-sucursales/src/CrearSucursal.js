// src/CrearSucursal.js
import React, { useState } from 'react';
import axios from 'axios';

const CrearSucursal = ({ onCreated }) => {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    activa: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/sucursales', form);
      alert('Sucursal creada correctamente');
      setForm({ nombre: '', direccion: '', telefono: '', activa: true });
      if (onCreated) onCreated();
    } catch (err) {
      alert('Error al crear sucursal');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Nueva Sucursal</h2>
      <div>
        <label>Nombre:</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Dirección:</label>
        <input name="direccion" value={form.direccion} onChange={handleChange} required />
      </div>
      <div>
        <label>Teléfono:</label>
        <input name="telefono" value={form.telefono} onChange={handleChange} />
      </div>
      <div>
        <label>Activa:</label>
        <input type="checkbox" name="activa" checked={form.activa} onChange={handleChange} />
      </div>
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearSucursal;
