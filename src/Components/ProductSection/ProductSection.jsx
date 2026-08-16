import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
function ProductSection({products, name, setName, filteredProducts, addProduct, removeProduct}) {
  return (
    <div>
        <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Products
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Quality school uniforms and accessories for every student.
            </p>

            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            
              className="mt-6 w-full max-w-md rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
            />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.length > 0 ? ( filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                imgSrc={item.imgSrc}
                name={item.name}
                price={item.price}
                category={item.category}
                id={item.id}
                addProduct={addProduct}
                removeProduct={removeProduct}
                
              />
            ))) : <p className="col-span-full py-12 text-center text-lg font-medium text-gray-500">No product found!!</p> }
           
          </div>

        </div>
      </section>
    </div>
  )
}

export default ProductSection
