import "./Stat.scss"

export default function Stat(props){
    return(
        <div className="stat-card">
            <div className="img-part">
                <img src={props.img} alt="icon"/>
            </div>

            <div className="info-part">
                <h1>{props.number}+</h1>
                <p>{props.label}</p>
            </div>
        </div>
    )
}