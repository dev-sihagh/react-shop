import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product =(props)=>{
    const {id,productName,productImage,price}=props.data
    
  const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
  const isInCart =cartItems?.some((item)=>item.id===id)
  const productInCart = cartItems?.find((item) => item.id === id);
  const cartCount = productInCart?.count ||0
  console.log(isInCart)
    return (
        <div className="col-3">
            <img src={productImage} className="w-100"/>
           <h5>{productName}</h5>
           <p>Price :{price}$</p>
           <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
      
            <span className="mx-1">{cartItems?.filter((row)=>row.id===id)[0]?.count}</span>
           
           {isInCart && <button className="btn btn-info btn-sm" onClick={()=>removeFromCart(id)}>-</button>} 
        </div>
    );
};
export default Product