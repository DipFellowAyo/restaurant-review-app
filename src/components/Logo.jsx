import React from "react";

function Logo() {
    return (
        <div className="logo">
            <img 
                src={process.env.PUBLIC_URL+"1328859_flower_k_kickstarter_media_round_icon-removebg-preview.png"} alt="Knorr_logo"
            />
        </div>
    )
}

export default Logo;