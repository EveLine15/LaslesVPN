import logo from '../../assets/logo.png';
import burger from "../../assets/burger.png"
import './Header.scss'

export default function Header(){
    return (
        <div className="wr-header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <p>Lasles<span>VPN</span></p>
                </div>

                <div className='nav'>
                    <a href="#">features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Help</a>
                </div>

                <div className='burger'>
                    <img src={burger} alt="menu"/>
                </div>

                <div className='buttons'>
                    <button className='sign-in-btn'>Sign in</button>
                    <button className='sign-up-btn'>Sign up</button>
                </div>
            </div>
        </div>
    );
}