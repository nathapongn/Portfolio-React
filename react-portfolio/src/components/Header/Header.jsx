import logo from '../../assets/site-logo.svg'
import Wrapper from '../Wrapper/Wrapper.jsx'
import { Link } from 'react-router-dom'; 
import './Header.css'
import Divider from '../Divider/Divider.jsx'
import { useState } from 'react';

// MUI
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    // Use state to manage mobile menu open/close
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    // Function to set mobile menu from the previous state to the opposite state
    function toggleMenu() {
        setMobileMenuOpen(prev => !prev);
    }

    return(
        <nav className="navigation">
            <Wrapper>
                <div className="navigation-content">
                    <div className="site-name">
                        <img src={logo} alt="Go to Home" />
                        <a href="/" className="text-l link-plain">Nathapong Nurae</a>
                    </div>

                    {/* Desktop Menu List */}
                    <div className="desktop-menu">
                        <Link to="/" className="text-m link-plain" >Portfolio</Link>
                        <Link to="/about" className="text-m link-plain" >About</Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="button-mobile-menu">
                        {/* On click icon button, toggle menu */}
                        <IconButton onClick={toggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
            </Wrapper>
            <Divider orientation="horizontal"/>

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="text-m link-plain" onClick={toggleMenu}>Portfolio</Link>
                    <Link to="/about" className="text-m link-plain" onClick={toggleMenu}>About</Link>
                    <IconButton onClick={toggleMenu}>
                        <CloseIcon />
                    </IconButton>
                </div>
            )}
        </nav>
    )
}