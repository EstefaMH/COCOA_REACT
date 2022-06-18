import { Outlet } from "react-router-dom";
import './Bakery.css'
import Header from '../../components/Header/Header';
import Subtitlefx from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';


function Bakery(){
    return(
        <div>
            <Header />
            <Subtitlefx text="Panaderia"/>
            <Footer />
            <Outlet></Outlet>
        </div>
    );
}

export default Bakery;