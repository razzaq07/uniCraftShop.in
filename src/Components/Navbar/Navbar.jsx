import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect } from 'react'
function Navbar({cartCount, logoSrc}) {
  
   const shopName = "uniCraftShop"
 
  return (

    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    <div className="flex items-center gap-3">
      <img
        src= {logoSrc}
        alt="logo"
        className="h-10 w-15 rounded-lg object-cover"
      />

      <h1 className="text-2xl font-bold text-gray-900 ">
        {shopName}
      </h1>
    </div>

    <div className="hidden items-center gap-2 md:flex">
      <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        Home
      </button>

      <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        Products
      </button>

      <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        Categories
      </button>

      {cartCount == 0 ? (
        <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        Cart 🛒 
      </button>
      ) : (
        <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        Cart 🛒 {cartCount}
      </button>
      )}

      <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
        About
      </button>

    </div>

  </div>
</nav>
  )
}

export default Navbar
