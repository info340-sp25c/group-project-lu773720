import React, {useState} from "react";
import { LiSUForm } from "../components/LoginSignUpForm";
import { SULILayout } from "../components/LogInSignUpLayout";
import { Footer }   from "../components/Footer";
import { Navbar }   from "../components/Navbar";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { musicData } from "../../index";
import {doc, setDoc} from "firebase/firestore"

export function SignUpPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if (password != confirmPassword) {
            setError("Passwords must match!")
            return
        }

        const cred = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(cred.user, {
            displayName: username,
            photoURL: "img/profile.png"
        })

        await setDoc(doc(musicData, "users", cred.user.uid), {
            favorites: []
        })

        navigate("/home")
    }
    
    return(
            <div className="SULI-container">

                <SULILayout heading="Sign Up" mainClass="login_screen">
                    <form onSubmit={handleSubmit} className="profile=form">
                        <LiSUForm category="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <LiSUForm category="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <LiSUForm category="password" type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <LiSUForm category="confirm_password" type="password" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {error && <p className="error">{error}</p>}
                        <div className="submission_links">
                            <button className="btn-primary" type="submit" >SIGN UP</button>
                            <p className="sign_up">Already a snoop? <Link to="/login">Sign in!</Link></p>
                        </div>
                    </form>
                </SULILayout>
            </div>
            
    )
}