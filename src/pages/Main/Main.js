import './Main.css'
import Header from '../../components/Header/Header';
import img from '../../img/cakeshop/cakes/101001.jpg'
import Bannerfx from '../../components/Banner/Banner'
import Subtitle  from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About';

function Main(){
    return(
        <div>
        <Header/>
        <Bannerfx background={img}/>
        <Subtitle text="NOSOTROS" />
        <About />
        <Footer />
        </div>

    )

}

export default Main;