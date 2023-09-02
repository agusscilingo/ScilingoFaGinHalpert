import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    
    const [Carrito, setCarrito] = useState([]);

    

    const buyProducts = (product) => {
        const productrepeat = Carrito.find((item) => item.id === product.id);

        if (productrepeat) {
            setCarrito(Carrito.map((item) => (item.id === product.id ? { ...product, quanty: productrepeat.quanty + 1 } : item)));
        } else {
            setCarrito([...Carrito, product]);
        }

    };

    return <dataContext.Provider value={{ Carrito, setCarrito, buyProducts }}>{children}</dataContext.Provider>;
};


export default DataProvider;