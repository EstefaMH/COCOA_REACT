import './About.css'
import Subtitle from '../../components/Subtitle/Subtitle'


function About() {
    return (


        <main id="container_main_home">
        <p class="paragraph-home">
            Empresa familiar dedicada a la elaboración de alimentos con altos estándares de calidad y sabores auténticos ,
            Nos dedicamos a la fabricación de productos de panadería con sabores auténticos. tenemos varias lineas
            de producción entre las que se destacan galleteria, reposteria y bizcocheria.
        </p>
        <Subtitle text="Contacto" />
        
        <div class="container_contact">
            <p class="text_contact-white"><b class="text_contact-yellow">Número:</b> 300-000-0000</p>
            <p class="text_contact-white"><b class="text_contact-yellow">Teléfono:</b> (1) 6000000</p>
            <p class="text_contact-white"><b class="text_contact-yellow">Correo:</b> Cocoapyp@gmail.com</p>
            <p class="text_contact-white"><b class="text_contact-yellow">Dirección:</b> P. Sherman, calle Wallaby, 42 </p>
        </div>
        
    </main>

    );
}

export default About;