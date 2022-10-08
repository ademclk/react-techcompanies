import React from "react";

const Card = ({ name, img, desc}) => {
    return (
        <div className="tc bg-light-gray dib br3 pa3 ma2 bw2 grow pointer shadow-3">
            <img src= {img}
                 width="200px"
                 height="200px"
                 alt="company-logo"/>
            <div>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Card;