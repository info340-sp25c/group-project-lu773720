import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const pathName = location.pathname;

    let generatePageText = function(text, associatedPath) {
        return pathName === associatedPath ? (<strong>{text}</strong>) : (text);
    }

    return (
        <>
            <div className="navbar">
                <nav>
                    <div className="project-name">
                        <img src="img/snoopy.png" alt="Snoopy logo" />
                        <p>snoopy</p>
                    </div>

                    <div className="nav-list">
                        <Link to="/">{generatePageText("Home", "/")}</Link>
                        <Link to="/mood-rec">{generatePageText("Mood Recommender", "/mood-rec")}</Link>
                        <Link to="/profile"><img className="profile-pic-upper" src="img/profile.png" alt="Profile Picture" /></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}