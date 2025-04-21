import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems, resetCart } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5115/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
        {products.map((p) =>
          cartItems?.some((i) => i.id === p.id && i.count > 0) ? (
            <Product key={p.id} data={p} />
          ) : null
        )}
      </div>
      <button className="btn btn-warning m-3" onClick={resetCart}>
        reset
      </button>
    </React.Fragment>
  );
};

export default Cart;


