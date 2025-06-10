import React, {useState} from "react";
import { LiSUForm } from "../components/LoginSignUpForm";
import { SULILayout } from "../components/LogInSignUpLayout";
import { Footer }   from "../components/Footer";
import { Navbar }   from "../components/Navbar";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../index";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth"


export function LoginPage() {
    const [email, setEmail]     = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]     = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        try {
            await signInWithEmailAndPassword(auth, email, password)

            navigate("/home")
        } catch (err) {
            setError(err.message)
        }
    }
    return(
        <div className="SULI-container">

        <SULILayout heading="Login" mainClass="login_screen">
                <form onSubmit={handleSubmit} className="profile-form">
                    <LiSUForm category="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <LiSUForm category="password" type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {error && <p className="error">{error}</p>}
                    <div className="submission_links">
                        <button className="btn-primary" type="subtmit">LOGIN</button>
                        <a href="https://www.youtube.com/watch?v=LoB6mB9qZn4" className="forgotten">Forgot your password?</a>
                        <p className="sign_up">Don't have an account? <Link to="/signup">Sign up!</Link></p>
                    </div>
                </form>
        </SULILayout>
    </div>
    )
}