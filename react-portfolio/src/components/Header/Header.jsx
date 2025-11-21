// CSS
import './Header.css'

// Components
import Wrapper from '../Wrapper/Wrapper.jsx'
import Divider from '../Divider/Divider.jsx'
import Tab from '../Tab/Tab.jsx'
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx'

// React
import { useNavigate, Link} from 'react-router-dom'; 
import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

// MUI
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

// Assets
import siteLogo from '../../assets/index.js'

export default function Header() {
    const navigate = useNavigate();

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const [ menuOpen, setMenuOpen ] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }

    return(
        <nav className="navigation">
            <Wrapper id="header">
                <div className="navigation-content">
                    <div className="site-name">
                        <img className="site-logo" src={!darkMode ? siteLogo.light : siteLogo.dark} alt="Site Logo" />
                        <Link to="/" className="text-l link-plain">Nathapong Nurae</Link>
                    </div>
                    {/* Desktop Menu List */}
                    <div className="desktop-menu">
                        <Tab to="/" onClick={() => navigate("/")}>Portfolio</Tab>
                        <Tab to="/about" onClick={() => navigate("/about")}>About</Tab>
                        <ButtonIcon hoveredIcon={darkMode ? <LightModeIcon /> : <DarkModeIcon />} onClick={() => toggleDarkMode()}>{darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }</ButtonIcon>
                    </div>

                    <ButtonIcon className="hamburger" onClick={() => toggleMenu()}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</ButtonIcon>
                </div>
            </Wrapper>
            <Divider orientation="horizontal"/>
            {menuOpen && <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <Tab to="/" onClick={() => navigate("/")}>Portfolio</Tab>
                <Tab to="/about" onClick={() => navigate("/about")}>About</Tab>
                <ButtonIcon hoveredIcon={darkMode ? <LightModeIcon /> : <DarkModeIcon />} onClick={() => toggleDarkMode()}>{darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }</ButtonIcon>
            </div>}
        </nav>
    )
}