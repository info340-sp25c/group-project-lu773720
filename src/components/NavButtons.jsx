import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavButtons({profileImage="img/profile.png"}) {
    const location = useLocation();
    const pathName = location.pathname;

    let generatePageText = function(text, associatedPath) {
        return pathName === associatedPath ? (<strong>{text}</strong>) : (text);
    }
    console.log("NavButtons received profileImage:", profileImage);
    return (
        <>
            <Link to="/home">{generatePageText("Home", "/home")}</Link>
            <Link to="/mood-rec">{generatePageText("Mood Recommender", "/mood-rec")}</Link>
            <Link to="/profile"><img className="profile-pic-upper" src={profileImage} alt="Profile Picture" /></Link>
        </>
    )
}