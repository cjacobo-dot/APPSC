import axios from 'axios';

const API_URL = 'http://localhost:3000/sucursales';

export const obtenerSucursales = () => axios.get(API_URL);
export const crearSucursal = (data) => axios.post(API_URL, data);
export const eliminarSucursal = (id) => axios.delete(`${API_URL}/${id}`);
export const actualizarSucursal = (id, data) => axios.put(`${API_URL}/${id}`, data);
