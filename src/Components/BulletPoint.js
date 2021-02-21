import React from 'react';
import './BulletPoint.css';

function BulletPoint({caption, description}) {
    return (
        <div className="bulletPoint">
            <h1 className="caption__style">{caption}</h1>
            <h5 className="description__style">{description}</h5>
        </div>
    )
}

export default BulletPoint
