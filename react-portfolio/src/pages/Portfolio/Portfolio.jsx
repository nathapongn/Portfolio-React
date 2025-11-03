import './Portfolio.css';

import Wrapper from "../../components/Wrapper/Wrapper";
import Card from '../../components/Card/Card.jsx';

export default function Portfolio() {
    return(
        <main>
            <Wrapper>
                <div className="portfolio">
                    <div className="hero-banner">
                        <div className="hero-banner-label">
                            <h1 className="hero-banner-title text-xxxl text-neutral-primary">Hello</h1>
                            <p className="hero-banner-description text-m text-neutral-secondary">I'm Nat, a <span className="strong accent">UX Designer</span> based in Bangkok. Currently designing at SCB - Siam Commercial Bank, here to make banking easier, one pixel at a time.</p>
                            <p className="hero-banner-description text-m text-neutral-secondary">Psst... this site works in both light and dark mode.</p>
                        </div>
                    </div>
                    <div className="projects">
                        <Card description="Streamlining personal finance management." darkMode={true}>Nimbus</Card>
                        <Card description="Making investing less intimidating by design." darkMode={true}>Flint</Card>
                        <Card description="Unifying public EV chargers." darkMode={true}>Amper</Card>
                        <Card description="UX Design Internship " darkMode={false}>LINE MAN Wongnai</Card>
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}