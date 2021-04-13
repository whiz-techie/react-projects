import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <NavLink className="logo" to="/">
            Brand-Logo
            </NavLink>
        
        <div className="nav-links">
            <NavLink activeClassName="selectedPage" className="link" to="/about">
            About
            </NavLink>
            <NavLink activeClassName="selectedPage" className="link" to="/contact">
            Contact
            </NavLink>
            <NavLink activeClassName="selectedPage" className="link" to="/blog">
            Blog
            </NavLink>
        </div>
        </nav>
        // <ul>
        //     <li>
        //         <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //         <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //         <Link to="/blog">Blog</Link>
        //         </li>
        //         <li>
        //         <Link to="/contact">Contact</Link>
        //     </li>
        // </ul>

    )
}

export default Navbar
