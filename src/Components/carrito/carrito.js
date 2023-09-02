import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";


import CartElements from "./CartElements";
import CartTotal from "./CartTotal";


const Carrito = () => {

  const { Carrito } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {Carrito.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">TU CARRITO ESTÁ VACÍO</h2>
      )}
    </>
  );
};

export default Carrito;