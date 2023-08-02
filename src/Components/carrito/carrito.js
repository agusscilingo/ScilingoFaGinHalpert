import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


import CartElements from "./CartElements";
import CartTotal from "./CartTotal";


const Carrito = () => {

  const { Carrito } = useContext(dataContext);


  return Carrito.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
    </>) : (
    <h2 className="cart-message-center">Tu carrito está vacío</h2>
  )
};

export default Carrito;
