import React from "react"
import navbarLogo from "../Images/earth.png"

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img 
                src={navbarLogo} 
                alt="Earth Logo" 
                className="navbar-logo"
            />
            <h1 className="navbar-title">my travel journal</h1>
        </nav>
    )
}