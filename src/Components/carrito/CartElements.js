import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

import React from 'react';

const CartElements = () => {
    const { Carrito } = useContext(dataContext);

    return Carrito.map((product) => {
        return(
        <div className="cartContent" key={product.id}>
            <img src={product.img} alt="product-card" />
            <h3 className="name">{product.name}</h3>
            <h4 className="price">{product.price}</h4>
        </div>
        );
    });

;}

export default CartElements;
