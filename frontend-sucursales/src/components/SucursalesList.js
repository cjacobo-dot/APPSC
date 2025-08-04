import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SucursalList = ({ onEditar, triggerUpdate }) => {
  const [sucursales, setSucursales] = useState([]);

  const cargarSucursales = async () => {
    try {
      const res = await axios.get('http://localhost:3000/sucursales');
      setSucursales(res.data);
    } catch (error) {
      console.error('Error al cargar lista:', error);
    }
  };

  const eliminarSucursal = async (id) => {
    if (!window.confirm('¿Eliminar esta sucursal?')) return;
    try {
      await axios.delete(`http://localhost:3000/sucursales/${id}`);
      cargarSucursales();
    } catch (error) {
      alert('Error al eliminar');
    }
  };

  useEffect(() => {
    cargarSucursales();
  }, [triggerUpdate]);

  return (
    <div>
      <h2>Lista de sucursales</h2>
      {sucursales.length === 0 ? (
        <p>No hay registros</p>
      ) : (
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Activa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sucursales.map((s) => (
              <tr key={s.id}>
                <td>{s.nombre}</td>
                <td>{s.direccion}</td>
                <td>{s.telefono}</td>
                <td>{s.activa ? 'Sí' : 'No'}</td>
                <td>
                  <button onClick={() => onEditar(s)}>Editar</button>
                  <button onClick={() => eliminarSucursal(s.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SucursalList;

