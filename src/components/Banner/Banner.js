import './Banner.css'
import {Banner}from'../../elements/Elements'
import Border from '../../img/BORDER .svg'


function Bannerfx(props) {
    return (
            <Banner background={props.background} >
                <img className='banner-img' src={Border}/>
            </Banner>
    );
}

export default Bannerfx;