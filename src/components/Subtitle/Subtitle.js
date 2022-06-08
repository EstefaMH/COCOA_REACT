import './Subtitle.css'
import VectorArrow from '../../img/Vector arrow.svg'
import { Subtitle } from '../../elements/Elements';

function Subtitlefx(props){
    return(
        <section className='container-subtitle'>
            <h2 className='subtitle'>{props.text}</h2>
            <img src={VectorArrow}/>
        </section>
    );
}

export default Subtitlefx;