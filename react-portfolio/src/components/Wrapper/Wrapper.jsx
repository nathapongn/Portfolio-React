import './Wrapper.css'

export default function Wrapper({ children, id }) {
    return(
        <div id={id} className="wrapper">
            { children }
        </div>
    )
}