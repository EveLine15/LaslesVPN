import img from "../../../../assets/box.png"
import tick from "../../../../assets/tick.png"

import Button from "../../../Button/Button"

import "./Card.scss"

export default function Card({title, price, punkts}){
    return(
        <div className="card-wr">
            <div className="box-holder">
                <img src={img} alt="box"/>
            </div>
            <h1>{title}</h1>
            <div className="abilities">
                {punkts.map((item,index) => {
                    return (
                        <div className="ability" key={index}>
                            <img src={tick} alt="tick"/>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <h2>{price}</h2>

            <Button  content="Select" section="plan"/>
        </div>
    )
}