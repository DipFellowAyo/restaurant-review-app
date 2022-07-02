import React from "react";
import Logo from "./Logo";

function Header() {
    return (
        <header>
            <div className="logo-container">
                <h1>Knorr</h1>
                <Logo />
            </div>
            <div className="account">
                <button className="btn0">Write a Review</button>
                <button className="btn1">Log In</button>
                <button className="btn2">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;