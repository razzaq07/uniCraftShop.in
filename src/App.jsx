import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProductCard from './Components/ProductCard/ProductCard'
function App() {
const products = [
{
  name : "school Shirt",
  price : 499,
  category : "shirt",
  imgSrc : "https://imgs.search.brave.com/kMY2fjnJFbh6eYHYat0ctJRsCq-hfC1ma5FHfasFNAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkb1BzWUhBR0wu/anBn"
,
id : 1
},
{
  name : "school pant",
  price : 799,
  category : "pant",
  imgSrc : "https://imgs.search.brave.com/m9WRnhpZdHssAJSGCZyaERdt3aFeFwLoGiGH4-TVaXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFzSmpNODZ6Nkwu/anBn",
  id : 2
},
{
  name : "tie",
  price : 199,
  category : "tie",
  imgSrc : "https://imgs.search.brave.com/Av7k3q_Kf_YZcBXyQxcc3BZbTOQZR3KR_DzfHG1_VvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3cHBmdmlvSUwu/anBn",
  id : 3
},



]

const [cart, setCart] = useState([])

const addProduct = function (product){
const existingProduct = cart.find((item) => item.id === product.id)
existingProduct ? console.log("product exist") : console.log("product doesn't exiist");

const updatedCart = cart.map((item) => {
item.id === product.id ? [...item.quanity +=  1]: item
})

setCart([...cart,product])
}

  return (
<>

 <Navbar 
cartCount={cart.length}

  /> 

{<section className="bg-gray-50 px-6 py-16">
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
    </div>

    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          category={item.category}
          addProduct={addProduct}
          id={item.id}
        />
      ))}
    </div>
   
  </div>
</section>}

</>
  )
}

export default App
