import img from "../../../../assets/box.png"
import tick from "../../../../assets/tick.png"

import Button from "../../../Button/Button"

import "./Card.scss"

export default function Card(props){
    return(
        <div className="card-wr">
            <div className="box-holder">
                <img src={img} alt="box"/>
            </div>
            <h1>{props.status}</h1>
            <div className="abilities">
                <div className="ability">
                    <img src={tick} alt="tick"/>
                    <p>{props.text1}</p>
                </div>

                <div className="ability">
                    <img src={tick} alt="tick"/>
                    <p>{props.text2}</p>
                </div>

                <div className="ability">
                    <img src={tick} alt="tick"/>
                    <p>{props.text3}</p>
                </div>
            </div>
            <h2><span>Free</span></h2>

            <Button  content="Select" section="plan"/>
        </div>
    )
}