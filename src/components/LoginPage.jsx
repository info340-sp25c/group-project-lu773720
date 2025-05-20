import React from "react";
import { LiSUForm } from "./LoginSignUpForm";
import { SULILayout } from "./LogInSignUpLayout";
import { Footer } from "./Footer";

export function LoginPage() {
    return(
        //Temp NavBar, will be a component
        <div className="SULI-container">

            <div className="navbar">
            <nav>
                <div className="project-name">
                    <img src="img/snoopy.png" alt="Snoopy logo" />
                    <p>snoopy</p>
                </div>

                <div className="nav-list">
                    <a href="unlogged-1.html">Home</a>
                    <a href="unlogged-mood-rec.html">Mood Recommender</a>
                    <a href="login-screen.html"><img className="profile-pic-upper" src="img/profile.png" alt="Profile Picture"/></a> 
                </div>
            </nav>
            </div>
        
        {/* end nav bar comp */}

        <SULILayout heading="Login" mainClass="login_screen">
                    <LiSUForm category="email" label="Username or Email" />
                    <LiSUForm category="password" type="password" label="Password" />

                    <div className="submission_links">
                        <a href="final-index.html" className="btn-primary">LOGIN</a>
                        <a href="https://www.youtube.com/watch?v=LoB6mB9qZn4" className="forgotten">Forgot your password?</a>
                        <p className="sign_up">Don't have an account? <a href="sign-up-screen.html">Sign up!</a></p>
                    </div>
                </SULILayout>
                <Footer />
    </div>
    )
}