import React from 'react'

export const CardCreation = ({producto}) => {
  return (
    <>
   
        <div className="bg-white rounded-2xl max-w-100 shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
        <img src={producto.image} alt={producto.title} className="w-full h-48 object-contain p-2" />
        <div className="p-4 flex flex-col justify-between flex-1">
            <h2 className="text-lg font-semibold mb-2">{producto.title}</h2>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{producto.description}</p>
            <div className="mt-auto">
            <p className="text-emerald-700 font-bold text-lg">${producto.price.toFixed(2)}</p>
            <p className="text-xs text-gray-400 mt-1">{producto.category}</p>
            </div>
        </div>
        </div>
  
   
    </>
    
  )
}


