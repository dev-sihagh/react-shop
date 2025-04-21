import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState();
  useEffect(() => {
    const data = localStorage.getItem("SinaCodding_cart");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItems !== undefined){
      localStorage.setItem("SinaCodding_cart", JSON.stringify(cartItems));
    } 
  }, [cartItems]);
  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId)){
      const updated = [...cartItems, { id: itemId, count: 1 }];
      setCartItems(updated);
    
  }
    else
      {
        const updated = cartItems.map((item) =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item
        );
        setCartItems(updated);
      }
  };
  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };
  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("SinaCodding_cart");
    
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};
