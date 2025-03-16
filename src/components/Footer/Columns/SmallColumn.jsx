import "./Column.scss"

export default function BigColumn(props){
    return(
        <div className="big-column">
            <h1>{props.label}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    )
}