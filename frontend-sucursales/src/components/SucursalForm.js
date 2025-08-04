import React, { useState } from 'react';
import axios from 'axios';

const SucursalForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    activa: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/sucursales', form);

      if (response.status === 201 || response.status === 200) {
        alert(' Sucursal creada');
        setForm({ nombre: '', direccion: '', telefono: '', activa: true });
        if (onAdd) onAdd(); 
      } else {
        alert('Algo salió mal al crear la sucursal.');
      }

    } catch (error) {
      console.error('Error creando sucursal:', error);
      alert(' Error al conectar con el servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nueva sucursal</h2>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      <label>
        Activa
        <input
          type="checkbox"
          name="activa"
          checked={form.activa}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default SucursalForm;



