import './Modal.css'
import { useParams } from 'react-router-dom';
import { Form, Container, Modal, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


let pos = -1;


function Modalfx({ products, show, handleClose, dataModal, handleChangeModal, reload, getData }) {

    let { id } = useParams();
    console.log(id)

    const modalProducts = products;
    console.log(modalProducts);

   
   
    const [input, setInput] = useState(0);

    
    
    const handleChangeQuantity = ({ target } ) => {

       setInput(0+target.value);
    }
    
    let total = parseInt(input) * parseInt(modalProducts[parseInt(id)].price);

   
    console.log(pos)

    
    
    const order={id , ref: modalProducts[parseInt(id)].id, name: modalProducts[parseInt(id)].name, price: modalProducts[parseInt(id)].price, photo :  modalProducts[parseInt(id)].photo ,quantity: input, total : total}
    

    console.log(total)
    console.log(input)
    console.log(order)
   

    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const  url= 'http://localhost:4000/orders';
        const response = await axios.post(url, order);

        console.log(response.status)

        if (response.status === 201) {
            Swal.fire(
                'Agregado al carrito de compras!',
                `<strong> Producto : <br/> </strong>
                    ${response.data.name} 
                    
                <br/> <br/><strong> Cantidad : <br/></strong>
                    ${response.data.quantity} unidades <br/><br/>

                    <strong> fue añadido exitosamente! </strong>`,
                'success'
            )
            navigate.push("/shop");

            

        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al añadir el producto!`,
                'error'
            )
        }
    }




    return (


        <Container >
            <Modal show={show} onHide={handleClose} key={parseInt(id)} className=' col-12 main-con-modal ' >

                <Modal.Header closeButton className=' col-12 container-modal header-modal img-fluid '>
                    <Modal.Title>
                        {modalProducts[parseInt(id)].name}
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit} className='w-70 container-modal  img-fluid align-items-center'>
                    <Modal.Body className='container-modal  img-fluid d-flex '>
                        <Row>
                            <Col md={4}>
                                <img className='img-fluid' src={require(`../../img/${modalProducts[parseInt(id)].photo}`)} />
                            </Col>
                            <Col md={8} className='d-flex flex-column text-white'>
                                Descripcion:<br /> {modalProducts[parseInt(id)].description}
                                <Row className='d-flex align-items-center text-justify my-3' >
                                    <input type={'number'} min='0' className='col-2 m-2 p-0' name='quantity'  onChange={handleChangeQuantity} ></input>
                                    <p className='col-6'> unidades </p>
                                </Row>

                                <Row>
                                    <p className='price'>Precio unitario : {modalProducts[parseInt(id)].price}</p>
                                    <p className='price' >Precio total : {total} </p>
                                </Row>

                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>

                        <button className="btn btn-warning" type='submit' onClick={handleSubmit}>Añadir</button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    )

}

export default Modalfx;