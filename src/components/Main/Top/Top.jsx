import "./Top.scss"

export default function Top(props){
    return(
        <div className="top-block">
            <h1>{props.label}</h1>
            <p>{props.content}</p>
        </div>
    )
}