import './Expanding.css';
//import {Banner}from'../../elements/Elements'
import imgp from '../../img/cakeshop/biscuits/COOKIES-BANNER.png'

function Expanding() {
    const panels = document.querySelectorAll('.panel')

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    })

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }
    return (
        <div>
            <div class="container">
                <div className='panel panel-active' >
                    <h3>Pasteles y tortas</h3>
                </div>
                <div className="panel panel-one">
                    <h3>Galletas</h3>
                </div>
                <div className="panel panel-two">
                    <h3>Cupcakes</h3>
                </div>
                <div className="panel panel-three">
                    <h3>Hojaldres</h3>
                </div>
                <div className="panel panel-four">
                    <h3>Postres</h3>
                </div>

            </div>
        </div>
    )
}

export default Expanding;