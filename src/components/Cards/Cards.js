import './Cards.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, Container, Modal } from 'react-bootstrap';
import Swal from 'styled-components';
import Modalfx from '../Modal/Modal';

function Cards({ url, urlId }) {



    /*2. Generar la fx asincrona para conctar a la API */
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UsesState guarda la respuesta de laa peticion  */
    const [products, setProducts] = useState([]);

    /*5. UseState refresh list state */
    const [upProducts, setUpProducts] = useState([false]);


    console.log(products);
    /*6. actualizar esstaddo del modaal */
    const [show, setShow] = useState(false);

    const handleOpen = () => { setShow(true); }
    const handleClose = () => { setShow(false); }

    /*7. Estado para obtener los datos de cada registro a editar*/

    const [dataModal, setDataModal] = useState({});

    const handleChangeModal = ({ target }) => {
        setDataModal({ ...dataModal, [target.name]: target.value })
    }

    const [upModal, setUpModal] = useState([false]);

    /*const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`${url}/${dataModal.id}`, dataModal);

        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El estudiante <strong>
                    ${response.data.nombre} ${response.dataModal.apellido}
                    </strong>
                    ha sido guardado exitosamente!`,
                'success'
            )
            handleClose();
            setUpProducts(!upProducts);

        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el estudiante!`,
                'error'
            )
        }
    }*/



    /*4. Hook */

    useEffect(() => {
        getData().then((response) => {
            setProducts(response.data)

        })
    }, [upProducts])



    useEffect(() => {
        getData().then((response) => {
            setProducts(response.data)
        })
    }, [upModal])

    function reload(e) {
        setUpModal(!upModal);

    }



    if (show == true) {
        return (
            <Modalfx
                products={products}
                show={show}
                handleClose={handleClose}
                dataModal={dataModal}
                handleChangeModal={handleChangeModal}
                reload={reload}
                getData={getData}
            />);
    }


    return (
        <div>
            <main class="container-products">
                <section id="products">
                    {products.map((product, id) => (
                        <article class="product" key={id}>
                            <div className='card'>
                                <p class="product-info" >{product.name}</p>
                                <img class="product-img" src={require(`../../img/${product.photo}`)} />
                            </div>
                            <Link class="container-btn-card" to={urlId + `${id}`} ><button className="btn-view" onClick={handleOpen} >Ver mas</button></Link>

                        </article>
                    ))}
                </section>
            </main>




        </div>
    );


}

export default Cards;