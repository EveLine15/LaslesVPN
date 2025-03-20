import "./Footer.scss"
import Contacts from "./Contacts/Contacts"
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
                </div>
            </div>
        </div>
    )
}