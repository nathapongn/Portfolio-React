import './ButtonIcon.css';

export default function ButtonIcon({className, children, onClick}) {
    return(
        <button className={`button-icon icon-enabled ${className}`}onClick={onClick}>{children}</button>
    )
}