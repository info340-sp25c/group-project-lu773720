import React from 'react';

export function WelcomePage() {
    return (
        <>
            <div className="landing">
                <h1 className="landing-header">
                <i
                    className="material-icons"
                    style={{ fontSize: '5rem', margin: '0.5rem 0.75rem 0.75rem 0.75rem', position: 'relative', top: '0.2em' }}>
                    music_note
                </i>
                    Find your beat.</h1>
                <p><strong>Need song recs?</strong> Tell us what you like, and we'll snoop around our song database to find you some great new music.</p>
                <div>
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </>
    )
}