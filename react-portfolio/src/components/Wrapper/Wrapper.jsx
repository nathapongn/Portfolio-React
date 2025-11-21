import './Wrapper.css'

export default function Wrapper({ children, id, flexDirection="row"}) {
    return(
        <div id={id} className={`wrapper ${flexDirection==="column" ? "column" : "row"}`}>
            { children }
        </div>
    )
}