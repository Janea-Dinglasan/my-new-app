import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const About = () => {
    return (
        <div className="content">
            <h1>About Me</h1>
            <div className="about-section">
                <p>
                    Hello! I'm <span className="introName">Janea Janel Dinglasan</span>, a passionate Computer Science student with a love for technology and coding. I enjoy building applications that solve real-world problems and make people's lives easier.
                </p>
                <div className="spacing"></div>
                <h2>My Interests</h2>
                <ul>
                    <li>Editing</li>
                    <li>Web Development</li>
                    <li>Web Designing</li>
                    <li>Mobile App Development</li>
                </ul>
                <div className="spacing"></div>
                <h2>Fun Facts</h2>
                <ul>
                    <li>I love watching movies and TV shows.</li>
                    <li>I love Taylor Swift's music.</li>
                    <li>I have a pet cat named Bonbon!</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
