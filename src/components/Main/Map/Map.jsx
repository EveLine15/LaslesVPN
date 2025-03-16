import "./Map.scss"
import img from "../../../assets/map.png"
import companies from "../../../assets/companies.png"
import Top from "../Top/Top"

export default function Map(){
    return(
        <div className="map-wr">
            <div className="container">
                <Top label="Huge global network of fast VPN" content="Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue."/>
                <div className="map">
                    <img src={img} alt="map"/>
                </div>
                <div className="comp">
                    <img src={companies} alt="companies"/>
                </div>
            </div>
        </div>
        
    )
}