import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Logo />
            <div>
                <h1 className="child">Knorr</h1>
                <p className="child">Knorr is a restaurant review app where you will get online access to restaurants around your local area. <br/> Here, you will get to see reviews by other people and also give your own personal ratings/reviews.</p>
                <div className="child">
                    <Socials />
                </div>
                <p className="child">Copyright © {currentYear}</p>
            </div>
            <Logo /> 
        </footer>
    )
}

export default Footer;