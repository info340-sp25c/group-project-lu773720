import React from "react";
import { LiSUForm } from "../components/LoginSignUpForm";
import { SULILayout } from "../components/LogInSignUpLayout";
import { Footer }   from "../components/Footer";
import { Navbar }   from "../components/Navbar";
import { Link, useLocation } from 'react-router-dom';


export function SignUpPage() {
    return(
        //Temp NavBar, will be a component
                <div className="SULI-container">
        
                    {/* <Navbar/> */}
                
                {/* end nav bar comp */}
        
                <SULILayout heading="Sign Up" mainClass="login_screen">
                            <LiSUForm category="email" label="Email" />
                            <LiSUForm category="username" label="Username" />
                            <LiSUForm category="password" type="password" label="Password" />
                            <LiSUForm category="confirm_password" type="password" label="Confirm Password" />
        
                            <div className="submission_links">
                                <Link to="/home"><btn className="btn-primary">SIGN UP</btn></Link>
                                <p className="sign_up">Already a member? <Link to="/login">Sign in!</Link></p>
                            </div>
                        </SULILayout>
                        {/* <Footer /> */}
            </div>
    )
}