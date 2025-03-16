import "./Plan.scss"
import Top from "../Top/Top"
import Card from "./Card/Card"
import CardSmall from "./Card/CardSmall"
import CardNormal from "./Card/CardNormal"

export default function Plan(){
    return(
        <div className="plan-wr">
            <div className="container">
                <Top label="Choose your plan" content="Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue."/>

                <div className="card-holder">
                    <CardSmall status="Free" text1="Unlimited bandwitch" text2="Encrypted connection" text3="Yes trafic logs"/>
                    <CardNormal status="Standard plan" text1="Unlimited bandwitch" text2="Encrypted connection" text3="Yes trafic logs" text4="Works on all devices" text5="Connect anyware"/>
                    <Card status="Premium plan" text1="Unlimited bandwitch" text2="Encrypted connection" text3="Yes trafic logs" text4="Works on all devices" text5="Connect anyware" text6="Get new features"/>
                </div>            
            </div>
        </div>
    )
}