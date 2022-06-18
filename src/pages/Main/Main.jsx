import './Main.css'
import Header from '../../components/Header/Header';
import Bannerfx from '../../components/Banner/Banner'
import Subtitle  from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About';
import Banner from '../../img/home/BANNER-MAIN.jpg'
import Expanding from '../../components/Expanding/Expanding'
import { Outlet } from 'react-router-dom';


function Main(){
    return(
        <div>
        <Header/>
        <Bannerfx background = {Banner} />
        <Subtitle  text = "BIENVENIDO"/>
        <Expanding />
        <Subtitle  text = "NOSOTROS"/>
        <About />
        <Footer />
        <Outlet></Outlet>
        </div>
    );

}

export default Main;