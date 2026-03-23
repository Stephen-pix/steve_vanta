import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const GetProductComponent = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    let navigator = useNavigate()

    //Base url for image path from server 
    const img_url = "https://stevee.alwaysdata.net/static/images/"

    //Create a function to fetch product from server
    const getProducts = async () => {
        setError("")
        setLoading("Fetching products. Please wait...");
        try {
            const response = await axios.get("https://stevee.alwaysdata.net/api/get_products    ");
            console.log(response)
            if (response.status === 200) {
                setLoading("")
                setProducts(response.data)
            }
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <NavbarComponent />
            <div className="row">
                <h3 className="mt-5 text-light">Available Products</h3>
                <h6 className="text-warning">{loading}</h6>
                <h6 className="text-danger">{error}</h6>
                {products.map((product) => (
                    <div className="col-md-3 justify-content-center mb-4">
                        <div className="card shadow-margin">
                            <img src={img_url + product.product_image} alt="" className="product_img mt-4" />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_description}</p>
                                
                                <b className="text-warning">Ksh{product.product_cost}</b>
                                <br />
                                <br />
                                <button className="btn btn-danger" onClick={()=> {navigator("/makepayment",{state:{product}})}}>Purchase now</button>
                            </div>
                        </div>
                    </div>
                ))}

        



                <footer className="bg-dark text-white mt-5 p-4">
                    <div className="container">
                        <div className="row">
                            {/* About Section */}
                            <div className="col-md-4 mb-3">
                                <h5>About Our Meals</h5>
                                <p>
                                    We provide fresh, affordable, and delicious meals and drinks to
                                    keep you satisfied throughout the day. Browse our menu and enjoy
                                    convenient ordering from the comfort of your home.
                                </p>
                            </div>

                            {/* Social Media Section */}
                            <div className="col-md-4 mb-3">
                                <h5>Follow Us</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white text-decoration-none"
                                        >
                                            <i className="bi bi-facebook me-2"></i> Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white text-decoration-none"
                                        >
                                            <i className="bi bi-instagram me-2"></i> Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white text-decoration-none"
                                        >
                                            <i className="bi bi-twitter me-2"></i> Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div className="col-md-4 mb-3">
                                <h5>Contact Us</h5>
                                <p>If you have any questions, feel free to reach out:</p>
                                <p className="mb-1">
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    Daniel: 0722567812
                                </p>
                                <p className="mb-1">
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    Mary: 0709127645
                                </p>
                            </div>
                        </div>

                        <hr className="bg-light" />

                        <div className="text-center">
                            <small>© {new Date().getFullYear()} Vanta Meals. All rights reserved.</small>
                        </div>
                    </div>
                </footer>





            </div>
        </div>
    )
}

export default GetProductComponent;