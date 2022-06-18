import './Home.css'
import { Link } from 'react-router-dom';
import logo from '../../img/Logo- COCOA.png'
import { FaArrowRight } from 'react-icons/fa';

function Home() {
    return (
        <div className='main-container-home'>
            <div className='container-right-home'>
                <div className='container-btn-home'>
                <Link to='/main' className='l-button'><button className='{/btn-home hvr-push hvr-ripple-out/} cta'>TIENDA ONLINE <FaArrowRight className='i-button' /></button></Link>
                </div>
                <div className='container-logo-home'>
                    <img src={logo} />
                </div>
            </div>
        </div>
    );
}

export default Home;
