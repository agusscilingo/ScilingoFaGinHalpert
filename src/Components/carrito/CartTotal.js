import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";


const CartTotal = () => {
    const { Carrito } = useContext(dataContext);

    const total = Carrito.reduce((acc, el) => acc + el.price * el.quanty, 0);
    return (
        <div className="cartTotal">
            <h3>Total: {total} $</h3>
            <Link to={"/Fincompra"}>
                <h1 className="fincompra">COMPRAR</h1>
            </Link>
        </div>
    );
};

export default CartTotal;
