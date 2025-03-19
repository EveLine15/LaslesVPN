import "./Plan.scss"
import Top from "../Top/Top"
import Card from "./Card/Card"
import cardInfo from "../../../data/card.json"

export default function Plan(){
    return(
        <div className="plan-wr">
            <div className="container">
                <Top label="Choose your plan" content="Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue."/>

                <div className="card-holder">
                    {cardInfo.map(item => {
                        return <Card key={item.id} title={item.title} price={item.price} punkts={item.punkts}/>
                    })}
                </div>            
            </div>
        </div>
    )
}