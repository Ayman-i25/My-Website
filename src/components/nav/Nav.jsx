import React from 'react';
import { Link } from 'react-scroll';
import { IoMdMenu } from "react-icons/io";

import './Nav.css'
const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg pt-4 ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <IoMdMenu  style={{color:'white'}}/>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style={{ borderBottom: '1px solid #272727' }}>
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link smooth={true} offset={-100} duration={100} className="nav-link  text-light" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-100} duration={100} className="nav-link text-light" to='services'>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={50} duration={100} className="nav-link text-light" to={'projects'}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-100} duration={100} className="nav-link text-light" to={'skills'}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-100} duration={100} className="nav-link text-light" to={'contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav
