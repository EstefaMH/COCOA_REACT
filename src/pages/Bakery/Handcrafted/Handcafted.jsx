import Bannerfx from '../../../components/Banner/Banner';
import Handcraftedbanner from "../../../img/bakery/Handcraft/handcraft-banner.jpg";
import Subtitle  from '../../../components/Subtitle/Subtitle';
import Cards from '../../../components/Cards/Cards';
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header';


function Handcrafted(){
    return(
        <div className='main'>
        <Header />
        <Bannerfx background={Handcraftedbanner}/>
        <Subtitle text="PAN ARTESANAL"/>
        <Cards url='http://localhost:4000/handcraft' />
        <Footer />
        </div>
    );
}

export default Handcrafted;