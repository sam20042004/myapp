import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (<>
        
        <nav>
            Get Ready to complete your daily Goals
        </nav>
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user/sdff">User</Link>
        </div>
        </>
    )
}

export { Header};