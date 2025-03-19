import "./Footer.scss"
import Contacts from "./Contacts/Contacts"
import BigColumn from "./Columns/BigColumn"
import SmallColumn from "./Columns/SmallColumn"
import Column from "./Columns/Column"
import footerColumn from "../../data/footerColumn.json"

export default function Footer(){
    return(
        <div className="footer-wr">
            <div className="container">
                <Contacts/>
                <div className="text-block">
                    {
                        footerColumn.map(item => {
                            return(
                                <Column key={item.id} title={item.title} punkts={item.punkts}/>
                            )
                            
                        })
                    }
                    {/* <BigColumn label="Product" text1="Download" text2="Pricing" text3="Locations" text4="Server" text5="Countries" text6="Blog"/>
                    <BigColumn label="Engage" text1="LaslesVPN?" text2="FAQ" text3="Tutorials" text4="About us" text5="Privacy policy" text6="Terms of service"/>
                    <SmallColumn label="Earn money" text1="Become partner" text2="Affilite"/> */}
                </div>
            </div>
        </div>
    )
}