import './Footer.css'
import fb_icon from '../../img/icons/bxl-facebook-circle.svg'
import ig_icon from '../../img/icons/bxl-instagram.svg'
import wa_icon from '../../img/icons/WhatsApp.svg'

function Footer() {
    return (
        <footer>
            <div class="footer_social-media">
                <img src={fb_icon}/>
                <img src={ig_icon}/>
                <img src={wa_icon}/>
            </div>
        </footer>
    );
}

export default Footer;