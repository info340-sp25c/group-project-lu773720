import React from "react";

import snoopy from '../img/snoopy.png';

export function Footer() {
    return (
        <>
            <div>
                <footer className="login_screen">
                    {/* <div className="footer-pic">
                        <img src={snoopy} alt="Snoopy logo" />
                    </div> */}
                    <img className="footer_img" src={snoopy} alt="Snoopy logo" />
                    Snoopy International Incorporated Digital Industires©
                </footer>
            </div>
        </>
        

    )
}