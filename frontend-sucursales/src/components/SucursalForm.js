import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SucursalForm = ({ sucursalEditando, onSubmitCallback }) => {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    activa: true
  });

  useEffect(() => {
    if (sucursalEditando) {
      setForm({
        nombre: sucursalEditando.nombre,
        direccion: sucursalEditando.direccion,
        telefono: sucursalEditando.telefono,
        activa: sucursalEditando.activa
      });
    } else {
      setForm({ nombre: '', direccion: '', telefono: '', activa: true });
    }
  }, [sucursalEditando]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (sucursalEditando) {
        await axios.put(`http://localhost:3000/sucursales/${sucursalEditando.id}`, form);
        alert('Sucursal actualizada');
      } else {
        await axios.post('http://localhost:3000/sucursales', form);
        alert('Sucursal creada');
      }
      if (onSubmitCallback) onSubmitCallback();
      setForm({ nombre: '', direccion: '', telefono: '', activa: true });
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al conectar con el servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{sucursalEditando ? 'Editar Sucursal' : 'Nueva Sucursal'}</h2>
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
      <button type="submit">{sucursalEditando ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default SucursalForm;




