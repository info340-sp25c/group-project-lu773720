import React, { useState, useEffect } from 'react'; //import React Component
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../index";
import { musicData } from '../index';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/Profile';
import MoodRecommender from './pages/MoodRecommender';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { Test } from './pages/Test';


// import { LoginPage } from './pages/LoginPage';
// import { SignUpPage } from '../pages/SignUpPage';
function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [profileImage, setProfileImage] = useState("img/profile.png")
    const [favorites, setFavorites] = useState([]);
    const [thumbnails, setThumbnails] = useState({});
    
    
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user)
            if (user) {
                const snapshot = await getDoc(doc(musicData, "users", user.uid))
                
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setFavorites(data.favorites || [])


                    if (data.profileImageString) {
                        setProfileImage(data.profileImageString)
                    } else {
                        setProfileImage("img/profile.png")
                    }
                } else {

                    setFavorites([]);
                    setProfileImage("img/profile.png")
                }

               
            } else {
                setFavorites([]);
                setProfileImage("img/profile.png")
            }


        })
        return unsubscribe;
        
    }, [])

    const addFavorite = async song => {
        setFavorites(favs => {
        if (favs.some(s => s.title === song.title && s.artist === song.artist)) {
            return favs;
        }

        const newFavs = [...favs, song]

        if(auth.currentUser) {
            const reference = doc(musicData, "users", auth.currentUser.uid)
            updateDoc(reference, {favorites: newFavs})
        }
        return newFavs;
        });

        
    };

    const removeFavorite = async song => {
    setFavorites(favs => {
        const newFavs = favs.filter(s => !(s.title === song.title && s.artist === song.artist));
        if (auth.currentUser) {
        const userRef = doc(musicData, "users", auth.currentUser.uid)
        updateDoc(userRef, { favorites: newFavs })
        }
        return newFavs
    })
    }

    return (
        <>
            <Navbar user={currentUser} profileImage={profileImage}/>

            <main>
            <Routes>
                {/* this should eventually be the home page if the user isn't logged in */}
                <Route path="/" element={ <WelcomePage /> }/>

                <Route path="/test" element={ <Test favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} thumbnails={thumbnails} setThumbnails={setThumbnails} /> }/>

                <Route path="/home" element={ <HomePage user={currentUser} profileImage={profileImage}/> }/>
                <Route path='/mood-rec' element={<MoodRecommender favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} thumbnails={thumbnails} setThumbnails={setThumbnails} />}/>
                {/* <Route path="/mood-rec" element={ }/> */}
                {/* <Route path="/profile" element={ }/> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={ <ProfilePage user={currentUser} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} setProfileImage={setProfileImage}/> }/>
                <Route path="*" element={currentUser ? <Navigate replace to="/home" /> : <Navigate replace to="/" />} /> 
            </Routes>
            </main>

            <Footer/>
        </>

        // {/* THIS IS BASICALLY A TESTING GROUND FOR FEATURES */}
        // <SearchBarModule title={"test"} barText={"sample"} label={"gangnum style"} dividerText={"I am divider"} />
        // {/* <Footer/> */}
        // {/* <LoginPage /> */}
        // {/* <SignUpPage /> */}
    )
}

export default App;
