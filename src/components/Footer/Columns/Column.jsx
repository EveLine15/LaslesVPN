import "./Column.scss"

export default function BigColumn({title, punkts}){
    return(
        <div className="column">
            <h1>{title}</h1>
            {
                punkts.map((item, index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
        </div>
    )
}