import './Card.css'

// MUI Icons
import Icon from '@mui/material/Icon';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Card({ children = "Title", description = "Description", modeSupport = false, thumbnailType = "image", thumbnailSrc, alt }) {
    return(
        <>
            <div className="card">
                <div className="card-thumbnail">
                    {thumbnailType === "video" ? (<video src={thumbnailSrc} autoPlay loop muted playsInline></video>) : (<img src={thumbnailSrc} alt={alt} />) }
                </div>
                <div className="card-footer">
                    <div className="card-footer-label">
                        <div className="card-title">
                            <h2 className="text-xl text-neutral-primary">{children}</h2>
                            {modeSupport && (
                                <Icon>
                                    <Brightness4Icon className="icon-subtle" />
                                </Icon>
                            )}
                        </div>
                        <p className="card-description text-m text-neutral-secondary">{description}</p>
                    </div>
                    <div className="card-footer-link">
                        <p className="read-more text-s strong accent">Read More</p>
                            <Icon className="read-more-icon">
                                <ArrowForwardIcon className="icon-accent"/>
                            </Icon>
                    </div>
                </div> 
            </div>
        </>
    )
}