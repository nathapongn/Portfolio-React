import './ButtonIcon.css';

export default function ButtonIcon({className, children, onClick}) {
    return(
        <button className={`button-icon icon-neutral ${className}`}onClick={onClick}>{children}</button>
    )
}