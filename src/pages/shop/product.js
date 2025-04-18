import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, name, imageUrl, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const productInCart = cartItems?.find((item) => item.id === id);
  const count = productInCart?.count || 0;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
      <img src={require(`../../assets/${imageUrl.split("/").pop()}`)} className="card-img-top p-3" alt={name} />
        <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">Price: <strong>${price}</strong></p>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <button className="btn btn-outline-info btn-sm" onClick={() => addToCart(id)}>
              +
            </button>

            {count > 0 && <span className="fw-bold">{count}</span>}

            {count > 0 && (
              <button className="btn btn-outline-info btn-sm" onClick={() => removeFromCart(id)}>
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
