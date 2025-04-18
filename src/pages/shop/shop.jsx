import React, { useEffect, useState } from "react";
import Product from "./product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5115/api/products")
    
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
