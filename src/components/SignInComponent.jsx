import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent"

const SignInComponent = () => {
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    // Hook called use navigate
    let navigator = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setSuccess("")
        setLoading("Please wait...")

        try {
            //Create form data
            const user_data = new FormData();

            //Add the email and password
            user_data.append("email", email);
            user_data.append("password", password);

            //Use axios to send data to server / backend & get response
            const response = await axios.post("https://stevee.alwaysdata.net/api/signin", user_data)
            console.log(response);
            if (response.data.user) {
                setLoading("")
                setSuccess(response.data.message)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigator("/")
            } else {
                setLoading("")
                setError(response.data.message)
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }

    }
    return (
        <div className="row justify-content-center mt-4">
              <NavbarComponent />
            <div className="col-md-6 card shadow p-4" >
                <h2>Sign in</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email adress"
                        className="form-control my-3"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value);

                        }}
                        value={email}
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="form-control my-3"
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value);
                        }}
                        value={password}
                    />
                    <br />
                    <button className="btn btn-primary">Sign in</button>
                    <br />
                    <Link to="/signup" >Don't have an account? Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default SignInComponent;