import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <ListaProductos />
    </div>
  );

}

export default App;
