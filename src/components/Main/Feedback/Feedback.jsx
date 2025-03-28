import Top from "../Top/Top"
import "./Feedback.scss"
import Comment from "./Comment/Comment"
import icon1 from "../../../assets/icons/person1.png"
import icon2 from "../../../assets/icons/person2.png"
import icon3 from "../../../assets/icons/person3.png"
import scroll from "../../../assets/buttons/scroll.png"
import arrow from "../../../assets/buttons/arrow.png"

export default function Feedback(){
    return(
        <div className="feed-wr">
            <div className="container">
                <Top label="Trusted by thousands of happy customer" content="Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue."/>
                <div className="comments">
                    <Comment img={icon1} name="Brooklyn Simmons" location="Warsaw, Poland" content="“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”."/>
                    <Comment img={icon2} name="Darlene Robertson" location="Warsaw, Poland" content="“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”."/>
                    <Comment img={icon3} name="Darrell Steward" location="Warsaw, Poland" content="“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”."/>
                </div>

                <div className="buttons">
                        <div className="scroll">
                            <div className="current"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>

                        <div className="arrows">
                            <button className="left-arrow"><img src={arrow} alt="arrow"/></button>
                            <button className="right-arrow"><img src={arrow} alt="arrow"/></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}