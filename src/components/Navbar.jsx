import React from 'react';

import { useState } from "react";

import { NavButtons } from './NavButtons';

import snoopy from '../img/snoopy.png';

export function Navbar({profileImage = "img/profile.png"}) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <div className="navbar">
                <nav>
                    <div className="project-name">
                        <img src={snoopy} alt="Snoopy logo" />
                        <p>snoopy</p>
                    </div>

                    <div className="nav-list">
                        <NavButtons profileImage={profileImage}/>
                    </div>
                    <button
                    type="button"
                    onClick={() => {setMobileNavOpen(!mobileNavOpen)}}
                    className="nav-menu-button">
                        <i
                            className="material-icons"
                            style={{ fontSize: '1.5rem', margin: '0.5rem 0.75rem 0.75rem 0.75rem' }}>
                            menu
                        </i>
                    </button>
                </nav>
                {mobileNavOpen && <div className="mobile-nav-list"><NavButtons profileImage={profileImage}/></div>}
            </div>
        </>
    )
}