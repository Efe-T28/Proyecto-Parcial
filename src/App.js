import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-center">
        <span className="navbar-brand">TIENDA EL MEJOR PRECIO</span>
      </div>
    </nav>
    
    <ListaProductos />
  </div>
);
}

export default App;
