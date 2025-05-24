import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/Profile';
// import { LoginPage } from '../pages/LoginPage';
// import { SignUpPage } from '../pages/SignUpPage';
function App() {
    return (
        <>
            <Navbar />

            <main>
            <Routes>
                {/* this should eventually be the home page if the user isn't logged in */}
                <Route path="/welcome" element={ <WelcomePage /> }/>

                <Route path="/" element={ <HomePage /> }/>
                {/* <Route path="/mood-rec" element={ }/> */}
                {/* <Route path="/profile" element={ }/> */}
                <Route path="/profile" element={ <ProfilePage /> }/>
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
