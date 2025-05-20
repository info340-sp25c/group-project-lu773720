import React, { useState } from 'react'; //import React Component
import { SearchBarModule } from './SearchBar';
import { Footer } from './Footer';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
function App() {
    return (
        <>
        {/* THIS IS BASICALLY A TESTING GROUND FOR FEATURES */}
            <SearchBarModule title={"test"} barText={"sample"} label={"gangnum style"} dividerText={"I am divider"} />
            {/* <Footer/> */}
            {/* <LoginPage /> */}
            {/* <SignUpPage /> */}
        </>
    )
}

export default App;