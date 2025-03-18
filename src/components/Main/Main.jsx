import Start from "./Start/Start"
import Statistic from "./Statistic/Statistic"
import Features from "./Features/Features"
import Plan from "./Plan/Plan"
import Map from "./Map/Map"
import Feedback from "./Feedback/Feedback"
import Subscribe from "./Subscribe/Subscribe"

import "./Main.scss"

export default function Main(){
    return (
        <div className="main-wr">
            <Start/>
            <Statistic/>
            <Features/>
            <Plan/>
            <Map/>
            <Feedback/>
            <Subscribe/>
        </div>
    )
}