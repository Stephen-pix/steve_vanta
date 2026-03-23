import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/vanta.jpg";

const NavbarComponent = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let navigator = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigator("/signin");
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand text-light" to="/">
             <div className="navbar-brand d-flex align-items-center">
               <img src={logo} alt="Vanta Logo" className="logo-img me-2" />
             </div>
            </Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link className="nav-link text-light" to="/">Home</Link>
                    <Link className="nav-link text-light" to="/addproduct">Add Product</Link>
                </div>

                {user ?
                    <div className="navbar-nav ms-auto">
                        <p className="nav-link" >{user.username}</p>
                        <button className="nav-link text-light" onClick={logout}>Log out</button>
                    </div>

                    :

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-light"  to="/signin">Sign In</Link>
                        <Link className="nav-link text-light" to="/signup">Sign Up</Link>
                    </div>

                }
            </div>
        </nav>
    );
}

export default NavbarComponent