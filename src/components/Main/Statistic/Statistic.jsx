import users from "../../../assets/stats/users.png"
import location from "../../../assets/stats/location.png"
import servers from "../../../assets/stats/servers.png"

import Stat from "./Stat/Stat"

import "./Statistic.scss"

export default function Statistic(){
    return(
        <div className="stat-wr">
            <div className="container">
                <Stat img={users} number="90" label="Users"/>
                <Stat img={location} number="30" label="Locations"/>
                <Stat img={servers} number="50" label="Servers"/>
            </div>
        </div>
    )
}