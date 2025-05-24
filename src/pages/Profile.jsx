import React from "react";
import { useState } from "react";
import Card  from "../components/Card";
import songs from '../song.json';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function ProfilePage({ favorites, addFavorite, removeFavorite }) {
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
                    {favorites.length > 0 ? (
                        favorites.map((song, i) => (
                        <Card
                            key={i}
                            img={song.img}
                            title={song.title}
                            artist={song.artist}
                            description={song.description}
                            favorites={favorites}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />
                        ))
                    ) : ( <p>You haven’t favorited anything yet.</p>)}
                    </div>
                </section>

                <section>
                    <header className="search" style={{ paddingTop: 0, boxShadow: "none" }}>
                        <h2>Your History</h2>
                    </header>
                    <div className="card-container">
                        <Card
                            img="../project-draft/img/summer.jpg"
                            title="Feels Like Summer"
                            artist="Childish Gambino"
                            description="Lorem ipsum dolor sit amet"
                            favorites={favorites}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />
                        <Card
                            img="../project-draft/img/echo.jpg"
                            title="Echo"
                            artist="The Marías"
                            description="Lorem ipsum dolor sit amet"
                            favorites={favorites}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />

                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    )
}
