

import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'

//login button
import { BiSolidUser } from 'react-icons/bi';
//cross button
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ensure the correct import
import './style.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    // Function to open the side menu
    const openMenu = () => {
        setShowMenu(true);
    };

    // Function to close the side menu
    const closeMenu = () => {
        setShowMenu(false);
    };

    const closeMenuOnItemClick = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    };

    return (
        <>

            {/* <div id="header">
                <div className="container">
                    <nav>
                        <h2 className="logo">Santosh Sweets</h2>
                        <ul id="sidemenu" style={{ right: showMenu ? '0' : '-200px' }}>
                            <i className="fas" onClick={closeMenu}><AiOutlineClose style={{ fontSize: '32px' }} /> </i>

                            <li><Link to="/" onClick={closeMenuOnItemClick}>Home</Link></li>
                            <li><Link to="/room" onClick={closeMenuOnItemClick}>Rooms</Link></li>
                            <li><Link to="/contact" onClick={closeMenuOnItemClick}>Contact</Link></li>
                            <li><Link to="/about" onClick={closeMenuOnItemClick}>About Us</Link></li>
                            <li><Link to="/login" onClick={closeMenuOnItemClick}><BiSolidUser style={{ fontSize: '32px' }} /></Link></li>
                        </ul>
                        <i className="fas" onClick={openMenu}><GiHamburgerMenu style={{ fontSize: '32px' }} /></i>
                    </nav>
                </div>
            </div> */}

            <div className="shadow-sm">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top mx-2">
                    <div className="container-fluid">
                        <div className="col-md-1 d-none d-md-block"></div>
                        <a className="navbar-brand" href="#" onclick="display('section1')">
                            <img src={require("../images/logo.png")} alt="logo" className="logo img-fluid" style={{height: "50px", width:"130px"}}/>
                        </a>

                        <div >
                        <button id="hamburger-menu" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end ms-2" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link me-3" to="/">Home</Link>
                                <Link className="nav-link me-3" to="/foods">Food</Link>
                                <Link className="nav-link me-3" to="/gallery">Gallery</Link>
                                <Link className="nav-link me-3" to="/contacts">Contact</Link>
                                <Link to="/login" onClick={closeMenuOnItemClick}>
                                    <BiSolidUser style={{ fontSize: '32px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-1 d-none d-md-block"></div>
                    </div>
                </nav>
            <hr className="divider"/>
            </div>



        </>
    );
}

export default Navbar;
