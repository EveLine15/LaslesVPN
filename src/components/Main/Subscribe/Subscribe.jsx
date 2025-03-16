import Button from "../../Button/Button"
import "./Subscribe.scss"

export default function Subscribe(){
    return(
        <div className="sub-wr">
            <div className="container">
                <div className="left-part">
                    <h1>Subscribe now for get special features!</h1>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                <Button content="Subscribe now" section="sub"/>
            </div>
        </div>
    )
}