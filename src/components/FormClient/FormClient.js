import './FormClient.css'
import { useState, useEffect } from 'react';
import { Form, Label, ContainerTerms, ContainerBtnCenter, MsjError, MsjSuccess, Btn } from '../../elements/Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Inputfx from '../../components/InputForm/InputForm';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function FormClient() {
    const [user, setUser] = useState({ campo: '', valido: null });
    const [name, setName] = useState({ campo: '', valido: null });
    const [password, setPassword] = useState({ campo: '', valido: null });
    const [password2, setPassword2] = useState({ campo: '', valido: null });
    const [mail, setMail] = useState({ campo: '', valido: null });
    const [adress, setAdress] = useState({ campo: '', valido: null });
    const [phone, setPhone] = useState({ campo: '', valido: null });
    const [conditions, setConditions] = useState(false);
    const [terminos, changeTerms] = useState(false);
    const [formvalidate, setFormvalidate] = useState(null);

    const expressions = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        direccion: /^[a-zA-Z0-9_-_\s]{1,16}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,10}$/ // 7 a 10 numeros.
    }

    const onChangeTerms = (e) => {
        changeTerms(e.target.checked);

    }

    const urlOrders = 'http://localhost:4000/orders';

    /*2. Generar la fx asincrona para conctar a la API */
    const getData = async () => {
        const response = axios.get(urlOrders);
        return response;
    }

    /*3. UsesState guarda la respuesta de laa peticion  */
    const [orders, setOrders] = useState([]);
    console.log(orders);

    let orderClient = orders;

    /*4. Hook */

    useEffect(() => {
        getData().then((response) => {
            setOrders(response.data)

        })
    }, [])


    const url = ' http://localhost:4000/clients';

    const sendData = async (e) => {
        e.preventDefault();

        if (user.valido === 'true' && password.valido === 'true' && phone.valido && adress.valido == 'true' && terminos) {

            const response = await axios.post(`${url}`,  [orderClient, { "name": user.campo, "password": password.campo, "adress": adress.campo, "phone": phone.campo }]);


            if (response.status === 201) {
                Swal.fire(
                    'Guardado!',
                    `El pedido fue recibido con exito <strong>
                    
                    </strong>
                    ha sido guardado exitosamente!`,
                    'success'
                )

                setFormvalidate(true);
                setUser({ campo: '', valido: null });
                setName({ campo: '', valido: null });
                setPassword({ campo: '', valido: null });
                setPhone({ campo: '', valido: null });
                setAdress({ campo: '', valido: null });
                changeTerms(false);

                

                
                

            } else {
                Swal.fire(
                    'Error!',
                    `Hubo un problema al registrar el estudiante!`,
                    'error'
                )
            }
        }
        else {
            setFormvalidate(false);

        }

    }

    return (
        
        <div className='container-formclient'>
            <section className='background-formclient'>
            <Header />
            </section>

            <section className='form'>

                <Form action='' onSubmit={sendData}>
                    <Inputfx
                        state={user}
                        setState={setUser}
                        id="User"
                        placeholder='Ingrese su nombre...'
                        label='Nombre'
                        type='text'
                        name='user'
                        emsj='El nombre solo puede contener letras.'
                        regex={expressions.nombre}
                    />

                    <Inputfx
                        state={password}
                        setState={setPassword}
                        id=''
                        placeholder='Ingrese su correo electrónico...'
                        label='Correo'
                        type='email'
                        name='email'
                        emsj='El correo debe contener un dominio válido.'
                        regex={expressions.correo}
                    />

                    <Inputfx
                        state={phone}
                        setState={setPhone}
                        id="Celular"
                        placeholder='Ingrese su número de contacto...'
                        label='Número de contacto'
                        type='tel'
                        name='tel'
                        emsj='Este campo debe contener 10 numeros.'
                        regex={expressions.telefono}
                    />

                    <Inputfx
                        state={adress}
                        setState={setAdress}
                        id="adress"
                        placeholder='Ingrese su dirección...'
                        label='Dirección'
                        type='text'
                        name='adress'
                        emsj='Este campo solo puede contener numeros, letras y guión bajo.'
                        regex={expressions.direccion}
                    />

                    <ContainerTerms>
                        <Label>
                            <input type="checkbox"
                                name='conditions'
                                id='conditions'
                                checked={terminos}
                                onChange={onChangeTerms}


                            /> Acepto los términos y condiciones
                        </Label>
                    </ContainerTerms>

                    <MsjError send={formvalidate}>
                        <p><FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error : </b> Por favor diligenciar el formulario correctamente</p>
                    </MsjError>

                    <ContainerBtnCenter >
                        <Btn type='submit' className="b-form"> Enviar </Btn>
                        <MsjSuccess send={formvalidate}>Formulario enviado con éxito</MsjSuccess>
                    </ContainerBtnCenter>

                </Form>

            </section>
            {/*<Link to="/showorder" ><button>Ver pedido</button></Link>*/}
        </div>
    );
}
export default FormClient;