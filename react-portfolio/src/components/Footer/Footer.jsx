// CSS
import './Footer.css';

// Components
import Divider from '../Divider/Divider.jsx'

// MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer-body'>
                <div className="footer-body-content">
                    <div className="footer-body-text">
                        <h1 className="text-l text-neutral-primary">Liking what you're seeing?</h1>
                        <p className="text-m text-neutral-secondary">Let's work together!</p>
                    </div>
                    <img className="icon-subtle" src={LinkedInIcon} alt="Go to my Linkedin" />
                </div>
                <Divider />
                <p className="text-s text-neutral-placeholder">Designed in Figma, made with ReactJS.</p>
            </div>
            <div className='footer-copyright'>
                <p className="text-xxs text-neutral-placeholder">{currentYear} Nathapong Nurae. All rights reserved.</p>
            </div>
        </footer>
    )
}