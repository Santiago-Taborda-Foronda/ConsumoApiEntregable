import React from 'react'

export const Cards = () => {
  return (
    <>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
    <img src={""} alt={""} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg font-semibold mb-2">HOla</h2>
        <p className="text-sm text-gray-600 mb-4">descripcion</p>
        <div className="mt-auto">
        <p className="text-blue-600 font-bold text-lg">$1000000</p>
        <p className="text-xs text-gray-400 mt-1">Categoria</p>
        </div>
    </div>
    </div>
    </>
  )
}


