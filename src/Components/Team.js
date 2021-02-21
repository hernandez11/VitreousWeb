import React from 'react';
import './Team.css';

function Team({image, name, title}) {
    return (
        <div className="team">
            <img className="image"
            src={image}
            alt="" />
            <h1 className="name">{name}</h1>
            <h3 className="teamTitle"> {title}</h3>
        </div>
    )
}

export default Team
