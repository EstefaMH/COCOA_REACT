import React from "react";
import "./Cakes.css";
import Header from '../../../components/Header/Header' 
import cakesBanner from '../../../img/cakeshop/cakes/101019.jpg'
import Bannerfx from "../../../components/Banner/Banner";
import Cards from '../../../components/Cards/Cards'
import Footer from '../../../components/Footer/Footer'

function Cakes() {
    return(
        <div>
            <Header />
            <Bannerfx background={cakesBanner}/>
            <Cards />
            <Footer/>
           
        </div>
    );
}
export default Cakes;