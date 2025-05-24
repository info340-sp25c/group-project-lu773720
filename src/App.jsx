import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/Profile';
import MoodRecommender from './pages/MoodRecommender';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';


// import { LoginPage } from './pages/LoginPage';
// import { SignUpPage } from '../pages/SignUpPage';
function App() {
    const [profileImage, setProfileImage] = useState(() => localStorage.getItem("profileImage") || "img/profile.png")
    const [favorites, setFavorites] = useState([]);
    
    console.log('Favorites now is:', favorites);

    const addFavorite = song => {
        setFavorites(favs => {
        if (favs.some(s => s.title === song.title && s.artist === song.artist)) {
            return favs;
        }
        return [...favs, song];
        });
    };

    const removeFavorite = song => {
        setFavorites(favs =>
        favs.filter(s => !(s.title === song.title && s.artist === song.artist))
        );
    };

    return (
        <>
            <Navbar profileImage={profileImage} />

            <main>
            <Routes>
                {/* this should eventually be the home page if the user isn't logged in */}
                <Route path="/welcome" element={ <WelcomePage /> }/>

                <Route path="/" element={ <HomePage /> }/>
                <Route path='/mood-rec' element={<MoodRecommender favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />}/>
                {/* <Route path="/mood-rec" element={ }/> */}
                {/* <Route path="/profile" element={ }/> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={ <ProfilePage favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} profileImage={profileImage} setProfileImage={setProfileImage}/> }/>
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
