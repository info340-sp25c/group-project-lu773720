import React from "react";
import { LiSUForm } from "../components/LoginSignUpForm";
import { SULILayout } from "../components/LogInSignUpLayout";
import { Footer }   from "../components/Footer";
import { Navbar }   from "../components/Navbar";
import { Link, useLocation } from 'react-router-dom';


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
                        <Link to="/home"><btn className="btn-primary">LOGIN</btn></Link>
                        <a href="https://www.youtube.com/watch?v=LoB6mB9qZn4" className="forgotten">Forgot your password?</a>
                        <p className="sign_up">Don't have an account? <Link to="/signup">Sign up!</Link></p>
                    </div>
                </SULILayout>
                {/* <Footer /> */}
    </div>
    )
}