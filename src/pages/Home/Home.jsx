import './Home.css'
import { Link } from 'react-router-dom';
import logo from '../../img/Logo- COCOA.png'
function Home() {
    return (
        <div className='main-container-home'>
            <div className='container-right-home'>
                <div className='container-btn-home'>
                    <Link to='/main'><button className='btn-home hvr-push hvr-ripple-out'> TIENDA ONLINE</button></Link>
                </div>
                <div className='container-logo-home'>
                    <img src={logo} />
                </div>
            </div>
        </div>
    );
}

export default Home;
