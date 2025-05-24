import React from "react";
import { useState } from "react";
import Card  from "../components/Card";
import songs from '../song.json';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import  {SongCard }from "../components/Card";

export function ProfilePage({ favorites, addFavorite, removeFavorite, profileImage, setProfileImage}) {
    const [activeSetting, setActiveSetting] = useState(null);
    const [username, setUsername] = useState(() => localStorage.getItem("username") || "default_user")
    const [newUsername, setNewUsername] = useState("")
    const [password, setPassword] = useState(() => localStorage.getItem("password") || "default_passkey")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordUpdateCounter, setPasswordUpdateCounter] = useState(() => localStorage.getItem("passwordUpdateCounter") || 0)
    const[email, setEmail] = useState(() => localStorage.getItem("email") || "default_email@email.com")
    const [newEmail, setNewEmail] = useState("")
    const [newProfileImage, setNewProfileImage] = useState(null);


    
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
        localStorage.setItem("email", newEmail)
        setNewEmail("")
        setActiveSetting(null)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(newPassword)
        localStorage.setItem("password", newPassword)
        setNewPassword("")
        setActiveSetting(null)
    }
  
   const passwordPlusOne = () => {
    localStorage.setItem("passwordUpdateCounter", passwordUpdateCounter+1)
    setPasswordUpdateCounter(passwordUpdateCounter+1)
   }

    const handleProfileImage = (e) => {
   e.preventDefault();
   if (!newProfileImage) return;

   const reader = new FileReader();
   reader.onload = () => {
     const dataUrl = reader.result;             // this is "data:image/…;base64,…"

     setProfileImage(dataUrl);
     localStorage.setItem("profileImage", dataUrl);

     setNewProfileImage(null);
     setActiveSetting(null);
   };
   reader.readAsDataURL(newProfileImage);
 };

    
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
                                    <img src={profileImage} alt="profile picture" className="profile-pic"/>
                                </div>
                            </div>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("profilePicture")}
                            className="setting-btn"
                            >
                            Change Profile Picture
                            </button>

                            {/* // modification */}
                            {activeSetting === "profilePicture" && (
                                        <label for="profile-image-upload">
                                            <form onSubmit={handleProfileImage}>
                                                <input
                                                    type="file"
                                                    accept="image/*"

                                                    
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) setNewProfileImage(file);
                                                    }}
                                                />
                                                <button type="submit" disalbed={!newProfileImage}>Save</button>
                                                <button type="reset" onClick={() => {setActiveSetting(null); setNewProfileImage(null)}}>Cancel</button>
                                            </form>
                                        </label>
                            )}
                        
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
                                        <label for="modify-username">
                                            <form onSubmit={handleUsername}>
                                                <input
                                                    type="text"
                                                    placeholder="New username"
                                                    value={newUsername}
                                                    onChange={(e) => setNewUsername(e.target.value)}
                                                />
                                                <button type="submit">Save</button>
                                                <button type="reset" onClick={() => {setActiveSetting(null); setNewUsername("")}}>Cancel</button>
                                            </form>
                                        </label>
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

                            {/* // modification */}
                            {activeSetting === "email" && (
                                        <label for="email-modifacation">
                                            <form onSubmit={handleEmail}>
                                                <input
                                                    type="email"
                                                    placeholder="New email"
                                                    value={newEmail}
                                                    onChange={(e) => setNewEmail(e.target.value)}
                                                />
                                                <button type="submit">Save</button>
                                                <button type="reset" onClick={() => {setActiveSetting(null); setNewEmail("")}}>Cancel</button>
                                            </form>
                                        </label>
                            )}
                        </li>

                        <li>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Times Password Has Been Changed: {passwordUpdateCounter}
                            </p>
                            <button
                            type="button"
                            onClick={() => setActiveSetting("password")}
                            className="setting-btn"
                            >
                            Change Password
                            </button>

                            {/* // modification */}
                            {activeSetting === "password" && (
                                            <form onSubmit={handlePassword}>
                                                <label>New Password
                                                <input
                                                    type="password"
                                                    placeholder="New Password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                                </label>
                                        <label> Confirm Password
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                /> 
                                        </label>
                                                <button type="submit" disabled={!newPassword || newPassword !== confirmPassword} onClick={() => {passwordPlusOne()}}>Save</button>
                                                <button type="reset" onClick={() => {setActiveSetting(null); setNewPassword(""); setConfirmPassword("")}}>Cancel</button>

                                            </form>

                                            
                            )}
                        </li>

                        <li>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Sign Out
                            </p>
                            <button
                            type="button"
                            onClick={() => {alert("Limited Functionality due to no backend, but Profile Settings have been cleared"); setUsername("default_user"); setEmail("default_email@email.com"); setPassword("default_passkey"); setProfileImage("img/profile.png"); setActiveSetting(null); setPasswordUpdateCounter(0)}}
                            className="setting-btn"
                            >
                            Sign Out
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
                        <h2 style={{paddingBottom:20}}>Your Favorited Songs</h2>
                        {/* <div className="divider"><p>Your top picks…</p></div> */}
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
                {/* I'm not sure we need the following section tbh */}
                {/* <section>
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
                </section> */}
            </main>

            {/* <Footer /> */}
        </>
    )
}
