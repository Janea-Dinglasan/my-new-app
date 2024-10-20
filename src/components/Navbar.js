import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Logo.png";
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#182E35' }}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="logo img-fluid" src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faEllipsis} style={{ color: '#F4E0CA' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home" style={{ color: '#F4E0CA' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={{ color: '#F4E0CA' }}>
                                    About 
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/skills" style={{ color: '#F4E0CA' }}>
                                    Skills 
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact" style={{ color: '#F4E0CA' }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
