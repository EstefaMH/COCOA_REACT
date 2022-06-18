import './Comprehensive.css'
import Bannerfx from '../../../components/Banner/Banner';
import Comprehensivebanner from "../../../img/bakery/Comprehensive/comprehensive-banner.jpg";
import Subtitle  from '../../../components/Subtitle/Subtitle';
import Cards from '../../../components/Cards/Cards';
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header';


function Comprehensive(){
    return(
        <div className='main'>
        <Header />
        <Bannerfx background={Comprehensivebanner}/>
        <Subtitle text="PAN INTEGRAL"/>
        <Cards url='http://localhost:4000/comprehensive' />
        <Footer />
        </div>
    );
}

export default Comprehensive;