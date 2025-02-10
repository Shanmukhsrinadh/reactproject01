import React, { useState } from "react";
import products from "./products"; // Import the product data

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Function to filter products based on selected category
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h1>Product List</h1>

      {/* Buttons for category selection */}
      <button onClick={() => setSelectedCategory("all")}>All</button>
      <button onClick={() => setSelectedCategory("men")}>Men</button>
      <button onClick={() => setSelectedCategory("women")}>Women</button>
      <button onClick={() => setSelectedCategory("kids")}>Kids</button>

      {/* Display filtered products */}
      <div>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Subcategory: {product.subcategory}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
