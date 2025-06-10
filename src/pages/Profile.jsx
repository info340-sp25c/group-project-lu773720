import React from "react";
import { useState, useEffect } from "react";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {doc, updateDoc, getDoc} from "firebase/firestore";
import {auth, musicData} from "../../index";
import Card  from "../components/Card";
import songs from '../song';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link, useLocation } from 'react-router-dom';

export function ProfilePage({ user, favorites, addFavorite, removeFavorite}) {

    if (!user) return <p>Please <Link to="/login">log in</Link> first!</p>
    const [activeSetting, setActiveSetting] = useState(null);
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordUpdateCounter, setPasswordUpdateCounter] = useState(() => localStorage.getItem("passwordUpdateCounter") || 0)
    const [newEmail, setNewEmail] = useState("")
    const [newProfileImage, setNewProfileImage] = useState(null);
    const [photoPreview, setPhotoPreview] = useState("img/profile.png")

    
    // event handlers
    const handleUsername = async (e) => {
        e.preventDefault()
        await updateProfile(user, {displayName: newUsername})
        setActiveSetting(null)
    }

    const handleEmail = async (e) => {
        e.preventDefault()
        await updateEmail(user, newEmail)
        setActiveSetting(null)
    }

    const handlePassword = async (e) => {
        e.preventDefault()
        if(newPassword === confirmPassword) {
            await updatePassword(user, confirmPassword)
            setActiveSetting(null)
        }
    }
  
   const passwordPlusOne = () => {
    localStorage.setItem("passwordUpdateCounter", passwordUpdateCounter+1)
    setPasswordUpdateCounter(passwordUpdateCounter+1)
   }

    const handleProfileImage = (e) => {
        e.preventDefault()
        
        if(!newProfileImage) return;
        
        const reader = new FileReader()
        reader.readAsDataURL(newProfileImage)

        reader.onloadend = async () => {
            const imgString = reader.result

            try {
                await updateDoc(doc(musicData, "users", user.uid), {profileImageString: imgString})
                await updateProfile(user, { photoURL: imgString})
                setPhotoPreview(imgString);
                setActiveSetting(null)
                setNewProfileImage(null)
            } catch (error) {
                console.error("Failed to update pfp:", error)
                alert("Error: Failed to Upload Profile Image")
            }
        }

    };


    useEffect(() => {
    async function fetchProfileImage() {
      try {
        const userDocRef = doc(musicData, "users", user.uid)
        const userDocSnap = await getDoc(userDocRef)

        if (userDocSnap.exists()) {
          const data = userDocSnap.data()
          if (data.profileImageString) {
            setPhotoPreview(data.profileImageString)
          } else if (user.photoURL) {
            setPhotoPreview(user.photoURL)
          }
        } else if (user.photoURL) {
            setPhotoPreview(user.photoURL)
        }
      } catch (error) {
        console.error("Error fetching profile image from Firestore:", error)
      }
    }

    fetchProfileImage()
  }, [user.uid, user.photoURL])

    
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
                                    <img src={photoPreview} alt="profile picture" className="profile-pic"/>
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
                                                <button type="submit" disabled={!newProfileImage}>Save</button>
                                                <button type="reset" onClick={() => {setActiveSetting(null); setNewProfileImage(null)}}>Cancel</button>
                                            </form>
                                        </label>
                            )}
                        
                        </li>

                        <li>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>
                                Current Username: {user.displayName}
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
                                Current Email: {user.email}
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
                                Log out of your profile
                            </p>
                            <Link to="/login">
                            <button
                            type="button"
                            onClick={() => auth.signOut()}
                            className="setting-btn"
                            >
                            Sign Out
                            </button></Link>
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
            </main>

            {/* <Footer /> */}
        </>
    )
}
