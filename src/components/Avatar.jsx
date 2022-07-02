import React from "react";

function Avatar(props) {
    return (
        <div>
            <img className="restaurant-img"
                src={props.img}
                alt="restaurant_img"
            />
        </div>
    )
}

export default Avatar;