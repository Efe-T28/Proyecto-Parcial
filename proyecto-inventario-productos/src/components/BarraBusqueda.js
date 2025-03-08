import React, { useState } from 'react';

const BarraBusqueda = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="container mt-5 mb-4">
            <form onSubmit={handleSubmit} className="d-flex">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Búsqueda"
                />
                <button className="btn btn-primary" type="submit">
                    Buscar
                </button>
            </form>
            <h2>Productos</h2>
        </div>
    );
};

export default BarraBusqueda;