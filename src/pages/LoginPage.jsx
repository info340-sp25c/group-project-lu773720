import React from "react";
import { LiSUForm } from "./LoginSignUpForm";
import { SULILayout } from "./LogInSignUpLayout";
import { Footer } from "./Footer";
import { Navbar } from "../components/Navbar";

export function LoginPage() {
    return(
        //Temp NavBar, will be a component
        <div className="SULI-container">

            {/* <Navbar/> */}
        
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
                {/* <Footer /> */}
    </div>
    )
}