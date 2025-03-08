import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraBusqueda from "./BarraBusqueda";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        const listaProductos = localStorage.getItem("productos");
        if (listaProductos) {
            const datos = JSON.parse(listaProductos);
            setProductos(datos);
            setProductosFiltrados(datos);
        } else {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then(data => {
                    setProductos(data);
                    setProductosFiltrados(data);
                    localStorage.setItem("productos", JSON.stringify(data));
                })
                .catch((error) => console.error("Error consultando:", error));
        }
    }, []);

    const buscarProductos = (searchTerm) => {
        const filtered = productos.filter(producto =>
            producto.title.toLowerCase().includes(searchTerm.toLowerCase())|| producto.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProductosFiltrados(filtered);
    };

    return (
        <div className="container mt-4">
            <BarraBusqueda onSearch={buscarProductos} />
            <div className="row">
                {productosFiltrados.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src={product.image} 
                                className="card-img-top p-3" 
                                alt={product.title}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body">
                                <h5 className="titulo-producto">{product.title}</h5>
                                <p className="descripción-prodcuto">{product.description}</p>
                                <div className="d-flex justify-content-center">
                                <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;
