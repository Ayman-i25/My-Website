import { Link } from 'react-router-dom';
import './Nav.css'
import React from 'react';
import { IoMdMenu } from "react-icons/io";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand pt-4 ">
            <div className="container">

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style={{ borderBottom: '1px solid #272727' }}>
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link  text-light" to={'/'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav
