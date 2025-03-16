import facebook from "../../../assets/footer/facebook.png"
import whatsup from "../../../assets/footer/whatsup.png"
import youtube from "../../../assets/footer/youtube.png"
import logo from "../../../assets/logo.png"

import "./Contacts.scss"

export default function Contacts(){
    return(
        <div className="company-contacts">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <p>Lasles<span>VPN</span></p>
            </div>
            <p className="disc">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            <div className="networks">
                <img src={facebook} alt="facebook"/>
                <img src={whatsup} alt="whatsup"/>
                <img src={youtube} alt="youtube"/>
            </div>
        </div>
    )
}