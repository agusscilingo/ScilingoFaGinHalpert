import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/banner";
import Products from "../Products/Products";


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <div className="product-card-container">
                <Products />
            </div>

        </>
    );
};

export default Home;