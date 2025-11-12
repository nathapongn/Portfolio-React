import './Tab.css'

import { useLocation } from 'react-router-dom';

export default function Tab({children, onClick, to}) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return(
        <div className="tab-container">
            <button className={`tab text-m text-neutral-primary ${isActive ? 'active' : ''}`} onClick={onClick}>{children}</button>
            <div className='tab-indicator'></div>
        </div>
    )
}