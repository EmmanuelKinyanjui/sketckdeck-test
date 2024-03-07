// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    console.log('LandingPage hit');
    return (
        <div>
            <h1>Welcome to the Pixabay Image Search</h1>
            <p>Find beautiful images and photos from Pixabay.</p>
            <Link to="/search">Start Searching</Link>
        </div>
    );
};

export default LandingPage;
