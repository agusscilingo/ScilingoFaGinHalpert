import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
            <h1 className="navbar-logo">GinHalpert</h1>
            <Link className="seeCarrito" to={"/Cart"}>🛒</Link>
            </nav>
        </div>
    );
};

export default Navbar;
