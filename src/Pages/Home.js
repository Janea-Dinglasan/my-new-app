// src/Pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Header
 from '../components/Header';
const Home = () => {
    return (
        <div className="content">
            <Header />
            <h1>Home Page</h1>
            <p>Welcome to my profile website!</p>
        </div>
    );
}

export default Home;
