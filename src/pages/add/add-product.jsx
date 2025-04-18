import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5115/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    alert("Product added!");
    setProduct({ name: "", price: "", imageUrl: "" });
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} className="form-control my-2" placeholder="Product Name" />
        <input name="price" value={product.price} onChange={handleChange} type="number" className="form-control my-2" placeholder="Price" />
        <input name="imageUrl" value={product.imageUrl} onChange={handleChange} className="form-control my-2" placeholder="Image Path (e.g. assets/shoes.jpg)" />
        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
