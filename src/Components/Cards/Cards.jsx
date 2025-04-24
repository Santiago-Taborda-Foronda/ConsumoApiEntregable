import React, { useEffect, useState } from 'react';
import { CardCreation } from '../CardCreation/CardCreation';

export const Cards = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
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
  
    if (loading) {
      return <p className="text-center mt-10">Cargando productos...</p>;
    }
  
  return (
    <>
     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((producto) => (
        <CardCreation key={producto.id} producto={producto} />
      ))}
    </div>
    </>
  )
}


