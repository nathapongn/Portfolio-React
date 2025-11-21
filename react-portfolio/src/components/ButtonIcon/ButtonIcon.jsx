import './ButtonIcon.css';
import { useState } from 'react';

export default function ButtonIcon({className, onClick, children, hoveredIcon}) {
    const [ hovered, setHovered ] = useState(false)

    // Show hoveredIcon when hovered or fallback to children; otherwise show children
    const Icon = hovered ? ( hoveredIcon || children ) : children;

    return(
        <button 
            className={`button-icon icon-enabled ${className}`} 
            onClick={onClick} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            >
            {Icon}
            </button>
    )
}