// import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss'

function Navbar(props) {
    return (
        <div className='nav-menu'>
            <div className="nav-link">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
                <Link to="/about">About</Link>
            </div>
            <div className="nav-link">
                <Link to="/editor">Editor</Link>
            </div>
        </div>
    );
}

export default Navbar;