import React from "react";
import "./Cakes.css";
import Header from '../../../components/Header/Header' 
import cakesBanner from '../../../img/cakeshop/cakes/BANNER-CAKES.jpg'
import Bannerfx from "../../../components/Banner/Banner";
import Cards from '../../../components/Cards/Cards'
import Footer from '../../../components/Footer/Footer'
import Subtitle  from '../../../components/Subtitle/Subtitle';


function Cakes() {
    return(
        <div>
            <Header />
            <Bannerfx background={cakesBanner}/>
            <Subtitle text="PASTELES"/>
            <Cards url='http://localhost:4000/cakes' urlId='/cakes/' />
            <Footer/>
           
        </div>
    );
}
export default Cakes;