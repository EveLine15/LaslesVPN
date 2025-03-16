import Button from "../../Button/Button"
import "./Start.scss"
import img from "../../../assets/person.png"

export default function Start(){
    return(
        <div className="start-wr">
            <div className="container">
                <div className="left-part">
                    <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
                    <Button content="Get started" section="start"/>
                </div>

                <div className="right-part">
                    <img src={img} alt="person"/>
                </div>
            </div>
        </div>
    )
}