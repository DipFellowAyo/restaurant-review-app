import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faGooglePlusG, faAmazon} from '@fortawesome/free-brands-svg-icons';

function Socials() {
    return (
        <div className="socials">
            <a href="www.twitter.com">
                <FontAwesomeIcon icon= {faTwitter} size="2x" color= "#49a1eb" />
            </a>
           <a href="www.facebook.com">
                <FontAwesomeIcon icon= {faFacebook} size="2x" color= "#4968ad" />
            </a>
            <a href="www.instagram.com">
                <FontAwesomeIcon icon= {faInstagram} size="2x" />
            </a>
            <a href="www.googleplus.com">
                <FontAwesomeIcon icon= {faGooglePlusG} size="2x" color= "#eb3223" />
            </a>
            <a href="www.amazon.com">
                <FontAwesomeIcon icon= {faAmazon} size="2x" color = "#000000" />
            </a>
        </div>
    )
}

export default Socials;