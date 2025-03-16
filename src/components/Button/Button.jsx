import "./Button.scss"

export default function Button(props){
    return(
        <button className={`button-nav ${props.section}`}>{props.content}</button>
    )
}