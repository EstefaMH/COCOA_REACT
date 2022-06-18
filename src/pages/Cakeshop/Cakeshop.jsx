import { Outlet } from "react-router-dom";
import './Cakeshop.css'
import Header from '../../components/Header/Header';
import Subtitlefx from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About'

function Cakeshop() {
    return (
        <div > 
        
            <Header />
            <Subtitlefx text="Pasteleria"/>
            <About />
            <Footer />
            <Outlet></Outlet>
        </div>
    );
}

export default Cakeshop;