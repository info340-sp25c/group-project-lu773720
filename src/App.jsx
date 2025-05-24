import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/Profile';
// import { LoginPage } from '../pages/LoginPage';
// import { SignUpPage } from '../pages/SignUpPage';
function App() {
    const [profileImage, setProfileImage] = useState(() => localStorage.getItem("profileImage") || "img/profile.png")
    return (
        <>
            <Navbar profileImage={profileImage} />

            <main>
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                {/* <Route path="/mood-rec" element={ }/> */}
                {/* <Route path="/profile" element={ }/> */}
                <Route path="/profile" element={ <ProfilePage profileImage={profileImage} setProfileImage={setProfileImage}/> }/>
            </Routes>
            </main>

            <Footer />
        </>

        // {/* THIS IS BASICALLY A TESTING GROUND FOR FEATURES */}
        // <SearchBarModule title={"test"} barText={"sample"} label={"gangnum style"} dividerText={"I am divider"} />
        // {/* <Footer/> */}
        // {/* <LoginPage /> */}
        // {/* <SignUpPage /> */}
    )
}

export default App;
