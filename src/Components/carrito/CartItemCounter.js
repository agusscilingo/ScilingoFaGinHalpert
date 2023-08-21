import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const CartItemCounter = ({ product }) => {
    const { Carrito, setCarrito, buyProducts } = useContext(dataContext);

    const decrese = () => {

        const productrepeat = Carrito.find((item) => item.id === product.id);

        productrepeat.quanty !== 1 &&  setCarrito(Carrito.map((item) => (item.id === product.id ? {
            ...product, quanty:
                productrepeat.quanty - 1
        } : item)));

    }
    return (
        <>
            <p className='counter-button'onClick={decrese}>-</p>
            <p>{product.quanty}</p>
            <p className='counter-button' onClick={() => buyProducts(product)} >+</p>
        </>
    );
};

export default CartItemCounter;
