"use client"

import { useState, useMemo } from "react"
import Link from "next/link"


export default function Products() {
  const products = [
    {
      id: 1,
      name: "Deluxe Oven",
      category: "Oven",
      image: "/placeholder.svg",
      price: 499.99,
    },
    {
      id: 2,
      name: "Gas Hob",
      category: "Hobs",
      image: "/placeholder.svg",
      price: 299.99,
    },
    {
      id: 3,
      name: "Convection Microwave",
      category: "Microwave",
      image: "/placeholder.svg",
      price: 199.99,
    },
    {
      id: 4,
      name: "Oven Mitt Set",
      category: "Accessories",
      image: "/placeholder.svg",
      price: 19.99,
    },
    {
      id: 5,
      name: "Stainless Steel Pots and Pans",
      category: "Accessories",
      image: "/placeholder.svg",
      price: 99.99,
    },
    {
      id: 6,
      name: "Electric Oven",
      category: "Oven",
      image: "/placeholder.svg",
      price: 599.99,
    },
    {
      id: 7,
      name: "Induction Hob",
      category: "Hobs",
      image: "/placeholder.svg",
      price: 399.99,
    },
    {
      id: 8,
      name: "Countertop Microwave",
      category: "Microwave",
      image: "/placeholder.svg",
      price: 149.99,
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState(null)
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products
    }
    if (selectedCategory) {
      return products.filter((product) => product.category === selectedCategory)
    }
    return products
  }, [selectedCategory, products])
  return (
    <div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="bg-black dark:bg-black p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-white">Filters</h2>
          <div className="grid gap-2">
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                selectedCategory === "All"
                  ? "bg-primary text-white hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-black bg-black dark:bg-black text-white"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                selectedCategory === "Oven"
                  ? "bg-primary text-white hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-black bg-black dark:bg-black text-white"
              }`}
              onClick={() => setSelectedCategory("Oven")}
            >
              Oven
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                selectedCategory === "Hobs"
                  ? "bg-primary text-white hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-black bg-black dark:bg-black text-white"
              }`}
              onClick={() => setSelectedCategory("Hobs")}
            >
              Hobs
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                selectedCategory === "Microwave"
                  ? "bg-primary text-white hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-black bg-black dark:bg-black text-white"
              }`}
              onClick={() => setSelectedCategory("Microwave")}
            >
              Microwave
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                selectedCategory === "Accessories"
                  ? "bg-primary text-white hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-black bg-black dark:bg-black text-white"
              }`}
              onClick={() => setSelectedCategory("Accessories")}
            >
              Accessories
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Kitchen Appliances</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{product.category}</p>
                    <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}