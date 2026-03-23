import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import NavbarComponent from "./NavbarComponent"

const SignUpComponent = () => {
    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    //Loading state variables
    let [loading, updateLoading] = useState("")
    let [success, updateSuccess] = useState("")
    let [error, updateError] = useState("")

    let handleSubmit = async (e) => {
        //prevent form from reloading
        e.preventDefault();

        // Alert user loading
        updateLoading("Submitting data.Please wait...");
        //Confirm user data
        updateError("");
        updateSuccess("");
        console.log(username, email, phone, password);

        //Try send data to the server
        try {
            const user_data = new FormData();
            user_data.append("username", username);
            user_data.append("email", email)
            user_data.append("phone", phone)
            user_data.append("password", password)


            //Use axios to send data to server
            const response = await axios.post(
                "https://stevee.alwaysdata.net/api/signup",
                user_data);
            console.log(response)
            if (response.status === 200) {
                updateSuccess(response.data.message);
                updateLoading("")
                updateUsername("")
                updateEmail("")
                updatePhone("")
                updatePassword("")
            }
        } catch (error) {
            console.log(error)
            updateLoading("");
            updateError(error.message)
        }


    }
    return (
        <div className="row justify-content-center mt-4">
            <NavbarComponent />
            <div className="col-md-6 card shadow p-4">
                <h2>Create Account</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                {/* <p>Current username: {username}</p> */}
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter Username"
                        className="form-control my-3"
                        onChange={(e) => { updateUsername(e.target.value) }}
                        required
                        value={username}
                    />
                    <input type="email"
                        placeholder="Enter your Email"
                        className="form-control my-3"
                        onChange={(e) => { updateEmail(e.target.value) }}
                        required
                        value={email}
                    />
                    <input type="tel"
                        placeholder="Enter phone number"
                        className="form-control my-3"
                        onChange={(e) => { updatePhone(e.target.value) }}
                        required value={phone}
                    />
                    <input type="password"
                        placeholder="Enter your password"
                        className="form-control my-3"
                        onChange={(e) => { updatePassword(e.target.value) }}
                        required value={password}
                    />
                    <br />
                    <button className="btn btn-primary my-3">
                        Sign Up
                    </button>
                    <br />
                    <Link to="/signin">Already have an account? Signin</Link>
                </form>
            </div>
        </div>
    )
}
export default SignUpComponent