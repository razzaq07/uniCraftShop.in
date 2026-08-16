import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProductCard from './Components/ProductCard/ProductCard'
import ProductSection from './Components/ProductSection/ProductSection'
import my_logo from './assets/my_logo.png'
function App() {
  const products = [
    {
      name: "school Shirt",
      price: 499,
      category: "shirt",
      imgSrc:
        "https://imgs.search.brave.com/kMY2fjnJFbh6eYHYat0ctJRsCq-hfC1ma5FHfasFNAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkb1BzWUhBR0wu/anBn",
      id: 1
    },
    {
      name: "school pant",
      price: 799,
      category: "pant",
      imgSrc:
        "https://imgs.search.brave.com/m9WRnhpZdHssAJSGCZyaERdt3aFeFwLoGiGH4-TVaXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFzSmpNODZ6Nkwu/anBn",
      id: 2
    },
    {
      name: "tie",
      price: 199,
      category: "tie",
      imgSrc:
        "https://imgs.search.brave.com/Av7k3q_Kf_YZcBXyQxcc3BZbTOQZR3KR_DzfHG1_VvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3cHBmdmlvSUwu/anBn",
      id: 3
    }
  ]

  const [cartCount, setShowCount] = useState(0)

  function addProduct() {
    setShowCount(cartCount + 1)
  }

  function removeProduct() {
    setShowCount(cartCount - 1)
  }

  useEffect(() => {
    console.log("cart Changes")
  }, [cartCount])

  // Controlled input state
  const [name, setName] = useState("")

  // Derived products
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  )

  return (
    <>
      <Navbar cartCount={cartCount}
      logoSrc={my_logo} />
              
    <ProductSection
  products={products}
  name={name}
  setName={setName}
  filteredProducts={filteredProducts}
  addProduct={addProduct}
  removeProduct={removeProduct}
  
/>
    
    </>
  )
}

export default App