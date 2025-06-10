import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavButtons({user = null, profileImage="img/profile.png"}) {
    const location = useLocation();
    const pathName = location.pathname;
    const pfpLink = user ? "/profile" : "/login"
    const homeLink = user ? "/home" : "/"
    const isHomeActive = user ? pathName === "/home" : pathName === "/"
    let generatePageText = function(text, associatedPath) {
        return pathName === associatedPath ? (<strong>{text}</strong>) : (text);
    }
    return (
        <>
            <Link to={homeLink}>{generatePageText("Home", isHomeActive)}</Link>
            <Link to="/mood-rec">{generatePageText("Mood Recommender", "/mood-rec")}</Link>
            <Link to={pfpLink}><img className="profile-pic-upper" src={profileImage} alt="Profile Picture" /></Link>
        </>
    )
}