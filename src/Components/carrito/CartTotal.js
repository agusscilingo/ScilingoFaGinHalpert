import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const CartTotal = () => {
    const { Carrito } = useContext(dataContext);

    const total = Carrito.reduce((acc,el) => acc + el.price * el.quanty, 0);
    return (
        <div className="cartTotal">
            <h3>Total: {total} $</h3>
        </div>
    );
};

export default CartTotal;
