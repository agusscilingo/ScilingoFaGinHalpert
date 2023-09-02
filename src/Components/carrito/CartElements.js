import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
    const { Carrito, setCarrito } = useContext(dataContext);


    const deleteProduct = (id) => {
        const foundId = Carrito.find((element) => element.id === id);

        const newCarrito = Carrito.filter((element) => {
            return element !== foundId;
        });

        setCarrito(newCarrito);
    };
    return Carrito.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card" />
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product} />
                <h4 className="price">{product.price * product.quanty}$</h4>
                <h3 class="cart-delete-button" onClick={() => deleteProduct(product.id)}>X
                </h3>
            </div>
        );
    });

    ;
}

export default CartElements;
