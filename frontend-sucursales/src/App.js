import React, { useState } from 'react';
import SucursalForm from './components/SucursalForm';
import SucursalList from './components/SucursalesList';
import './App.css';

function App() {
  const [sucursalEditando, setSucursalEditando] = useState(null);
  const [recargarLista, setRecargarLista] = useState(false);

  const handleEditar = (sucursal) => {
    setSucursalEditando(sucursal);
  };

  const refrescar = () => {
    setRecargarLista(!recargarLista);
    setSucursalEditando(null);
  };

  return (
    <div>
      <SucursalForm
        sucursalEditando={sucursalEditando}
        onSubmitCallback={refrescar}
      />
      <SucursalList
        onEditar={handleEditar}
        triggerUpdate={recargarLista}
      />
    </div>
  );
}

export default App;



