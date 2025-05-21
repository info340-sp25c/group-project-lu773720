import React from "react";
import { LiSUForm } from "../components/LoginSignUpForm";
import { SULILayout } from "../components/LogInSignUpLayout";
import { Footer } from "../components/Footer";

export function SignUpPage() {
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
        
                <SULILayout heading="Sign Up" mainClass="login_screen">
                            <LiSUForm category="email" label="Email" />
                            <LiSUForm category="username" label="Username" />
                            <LiSUForm category="password" type="password" label="Password" />
                            <LiSUForm category="confirm_password" type="password" label="Confirm Password" />
        
                            <div className="submission_links">
                                <a href="profile.html" className="btn-primary">SIGN UP</a>
                                <p className="sign_up">Already a member? <a href="login-screen.html">Sign in!</a></p>
                            </div>
                        </SULILayout>
                        <Footer />
            </div>
    )
}