import Bannerfx from '../../../components/Banner/Banner';
import Puffpastriesbanner from "../../../img/bakery/Puffpastries/puffpastries-banner.jpg";
import Subtitle  from '../../../components/Subtitle/Subtitle';
// import Cards from '../../../components/Cards/Cards';
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header';


function Puffpastries(){
    return(
        <div className='main'>
        <Header />
        <Bannerfx background={Puffpastriesbanner}/>
        <Subtitle text="HOJALDRES"/>
        {/* <Cards url='http://localhost:4000/hancraft' /> */}
        <Footer />
        </div>
    );
}

export default Puffpastries;