import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/banner";
import Products from "../Products/Products";
import SignIn from "../../Login/SignIn";



const Home = () => {
    return (
        <>
            <SignIn />
            <button>Log Out</button>
            <Navbar />
            <Banner />
            <div className="product-card-container">
                <Products />
            </div>

        </>
    );
};

export default Home;