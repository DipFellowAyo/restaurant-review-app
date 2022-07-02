import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
    return (
        <div className="card">
            <dt className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <Avatar 
                            img = {props.img}
                        />
                    </div>
                </div>
            </dt>
            <dd className="text-container">
                <h3>{props.name}</h3>
                <div>
                    <Info 
                        detailInfo = {props.rating}
                    />
                    <Info 
                        detailInfo = {props.location}
                    />
                </div>
            </dd>
        </div>
    )
}

export default Card;