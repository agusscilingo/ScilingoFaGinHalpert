import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import TotalItems from "../carrito/totalItems";

import "./Navbar.css";

const Navbar = () => {
    const { Carrito } = useContext(dataContext);
    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link to={"/"}>
                    <h1 className="navbar-logo">GIN HALPERT</h1>
                </Link>
                <Link className="seeCarrito" to={"/Cart"}>
                    🛒
                    {Carrito.length > 0 ? <TotalItems /> : null}
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
