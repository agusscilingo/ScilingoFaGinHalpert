import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [Carrito, setCarrito] = useState([]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    return <dataContext.Provider value={{ data, Carrito, setCarrito }}>{children}</dataContext.Provider>;
};


export default DataProvider;