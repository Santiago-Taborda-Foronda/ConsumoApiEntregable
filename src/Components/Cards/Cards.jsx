import React, { useEffect, useState } from 'react';
import { CardCreation } from '../CardCreation/CardCreation';

export const Cards = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar productos:', error);
          setLoading(false);
        });
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };
    
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
  
    if (loading) {
      return <p className="text-center mt-10">Cargando productos...</p>;
    }
  
  return (
    <>
    <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
    </div>
    {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No se encontraron productos.</p>
        ) : ( 
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((producto) => (
                <CardCreation key={producto.id} producto={producto} />
            ))}
        </div>
      )}
    </>
  )
}


