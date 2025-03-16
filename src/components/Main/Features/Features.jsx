import img from "../../../assets/person1.png"
import tick from "../../../assets/tick.png"
import "./Features.scss"

export default function Features(){
    return(
        <div className="features-wr">
            <div className="container">
                <div className="left-part">
                    <img src={img} alt=""/>
                </div>

                <div className="right-part">
                    <h1>We provide many features you can use</h1>
                    <p className="discr">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>

                    <div className="features">
                        <div className="point">
                            <img src={tick} alt="tick"/>
                            <p>Powerfull online protection</p>
                        </div>

                        <div className="point">
                            <img src={tick} alt="tick"/>
                            <p>Internet with borders</p>
                        </div>

                        <div className="point">
                            <img src={tick} alt="tick"/>
                            <p>Supercharged VPN</p>
                        </div>

                        <div className="point">
                            <img src={tick} alt="tick"/>
                            <p>No specific time limits</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}