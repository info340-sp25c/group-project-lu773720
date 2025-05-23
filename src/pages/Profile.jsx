import React from "react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function ProfilePage() {
    const [activeSetting, setActiveSetting] = useState(null);
    const [username, setUsername] = useState(() => localStorage.getItem("username") || "default_user")
    const [newUsername, setNewUsername] = useState("")
    const [password, setPassword] = useState("Use Props to get Passkey")
    const [newPassword, setNewPassword] = useState("");
    const[email, setEmail] = useState("Use props")
    const [newEmail, setNewEmail] = useState("use props")
    const [profileImage, setProfileImage] = useState("img/profile.png");
    // const [newProfileImage, setNewProfileImage] = useState<File | null>(null);


    
    // event handlers
    const handleUsername = (e) => {
        e.preventDefault()
        setUsername(newUsername)
        localStorage.setItem("username", newUsername)
        setNewUsername("")
        setActiveSetting(null)
    }

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(newEmail)
        setNewEmail("")
        setActiveSetting(null)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(newEmail)
        setNewPassword("")
        setActiveSetting(null)
    }

    const handlePfp = (e) => {
        e.preventDefault()
        setUsername(newUsername)
        setNewUsername("")
        setActiveSetting(null)
    }

    
    return (
        <>
            
            <header className="search" style={{paddingBottom: 30}}> 
                {/* probably should change name but i like the css.. */}
               <h1 style={{marginBottom:35}}>Manage Your Profile</h1>
                {/* change classNames and css */}
                <div className="border_region_p">
                <p className="welcome-back" style={{marginBottom:35}}>Account Settings</p>
               
                
                <div className="account_settings">
                    
                    <ul className="account_items">
                        <li>
                            <div className="profile=aligner">
                                <p style={{ fontWeight:"bold"}}> 
                                    Current Profile Picture:
                                    
                                </p>
                                <div className="profile-pic-wrapper">
                                    <img src="img/test-pfp.png" alt="profile picture" className="profile-pic"/>
                                </div>
                            </div>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("profilePicture")}
                            className="setting-btn"
                            >
                            Change Profile Picture
                            </button>
                        </li>

                        <li>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Current Username: {username}
                            </p>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("username")}
                            className="setting-btn"
                            >
                            Change Username
                            </button>

                            {/* // modification */}
                            {activeSetting === "username" && (
                                            <form onSubmit={handleUsername}>
                                                <input
                                                    type="text"
                                                    placeholder="New username"
                                                    value={newUsername}
                                                    onChange={(e) => setNewUsername(e.target.value)}
                                                />
                                                <button type="submit">Save</button>
                                                <button type="reset" onClick={() => setActiveSetting(null)}>Cancel</button>
                                            </form>
                            )}
                        </li>
                        
                        <li>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Current Email: {email}
                            </p>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("email")}
                            className="setting-btn"
                            >
                            Change Email
                            </button>
                        </li>

                        <li>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("password")}
                            className="setting-btn"
                            >
                            Change Password
                            </button>
                        </li>

                        <li>
                            <button
                            type="button"
                            onClick={() => alert("Account Deleted")}
                            className="setting-btn"
                            >
                            Delete Account
                            </button>
                        </li>

                    </ul>
                </div>
                </div>
            </header>

            

            <main className="profile_favorites" style={{paddingTop: 10 }}>
                {/* FAVORITES SECTION */}
                <section>
                    <header className="search" style={{ paddingTop: 0, boxShadow: "none" }}>
                        <h2>Your Favorited Songs</h2>
                        <div className="divider"><p>Your top picks…</p></div>
                    </header>

                    <div className="card-container">

                        <div className="card">
                            <img src="img/verbatim.jpg" alt="Verbatim cover art" />
                            <h1>Verbatim</h1>
                            <h2>Mother Mother</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#">
                                <i className="material-icons" style={{ fontSize: "1.5rem", marginRight: "0.5rem", float: "left" }}>
                                    favorite_border
                                </i>
                                <i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play
                            </a>
                        </div>

                        <div className="card">
                            <img src="img/dojacat.png" alt="Paint The Town Red cover art" />
                            <h1>Paint The Town Red</h1>
                            <h2>Doja Cat</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#">
                                <i className="material-icons" style={{ fontSize: "1.5rem", marginRight: "0.5rem", float: "left" }}>
                                    favorite_border
                                </i>
                                <i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play
                            </a>
                        </div>

                        <div className="card">
                            <img src="img/echo.jpg" alt="Echo cover art" />
                            <h1>Echo</h1>
                            <h2>The Marías</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#">
                                <i className="material-icons" style={{ fontSize: "1.5rem", marginRight: "0.5rem", float: "left" }}>
                                    favorite_border
                                </i>
                                <i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play
                            </a>
                        </div>

                    </div>
                </section>

                <section>
                    <header className="search" style={{ paddingTop: 0, boxShadow: "none" }}>
                        <h2>Your History</h2>
                    </header>
                    <div className="card-container">

                        <div className="card">
                            <img src="img/verbatim.jpg" alt="Verbatim cover art" />
                            <h1>Verbatim</h1>
                            <h2>Mother Mother</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#"><i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play</a>
                        </div>

                        <div className="card">
                            <img src="img/dojacat.png" alt="Paint The Town Red cover art" />
                            <h1>Paint The Town Red</h1>
                            <h2>Doja Cat</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#"><i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play</a>
                        </div>

                        <div className="card">
                            <img src="img/echo.jpg" alt="Echo cover art" />
                            <h1>Echo</h1>
                            <h2>The Marías</h2>
                            <p>Your go-to track</p>
                            <div style={{ flexGrow: 1 }}></div>
                            <a href="#"><i className="material-icons" style={{ fontSize: "1.5rem" }}>play_arrow</i> Play</a>
                        </div>

                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    )
}
