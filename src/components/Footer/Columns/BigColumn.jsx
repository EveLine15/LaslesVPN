import "./Column.scss"

export default function BigColumn(props){
    return(
        <div className="big-column">
            <h1>{props.label}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
        </div>
    )
}