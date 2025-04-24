import React from 'react'
import { Cards } from '../Cards/Cards'

export const MainContainer = () => {
    
  return (
    <>
    <div className="max-w-7xl mx-auto p-4  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     <Cards />
    </div>
    </>
  )
}


