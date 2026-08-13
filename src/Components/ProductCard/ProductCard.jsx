import React from 'react'
import { useState } from 'react';
function ProductCard({imgSrc, name, price, category, addProduct, id}) {
const addToCart = function(){
addProduct({name,price,imgSrc,category,id})

}

    return (
<>
    <div className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
  <img
    src={imgSrc}
    alt={name}
    className="h-64 w-full object-cover"
  />

  <div className="p-5">
    <p className="mb-1 text-sm font-medium text-gray-500">
      {category}
    </p>

    <h2 className="mb-3 text-xl font-semibold text-gray-900">
      {name}
    </h2>

    <p className="mb-4 text-lg font-bold text-gray-900">
      ₹{price}
    </p>
  

    <button className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
    onClick={() => {
      
    addToCart()
    }
    }
     
    >
      Add to Cart
      
    </button>
    <div className="flex items-center gap-3">
    <button 
    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-semibold transition hover:bg-gray-100 mt-3"
    
    onClick={() => {
         addToCart()}} 
    > +</button>
       <span className="w-6 text-center font-semibold text-gray-900 mt-3">
     
    </span>

    <button 
     onClick={() => {
       

 } }
    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-semibold transition hover:bg-gray-100 mt-3"
    
    >-</button>
    </div>
  </div>
</div>


</>
  )
}

export default ProductCard
