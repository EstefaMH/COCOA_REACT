import './TableSC.css';
import Swal from "sweetalert2";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react'
import Modalfx from '../Modal/Modal';
import line from '../../img/LINE.svg'
import { Link, useParams } from 'react-router-dom';

function TableSC() {

    let { id } = useParams();
    console.log(id)

    const urlOrders = " http://localhost:4000/orders";

    const getData = async () => {
        const response = axios.get(urlOrders);
        return response;
    }

    const [orders, setorders] = useState([]);
    console.log(orders);

    const [upOrders, setUpOrders] = useState([false]);
    console.log(orders);

    /*const [input, setInput] = useState(0);
    console.log(input);*/



   
    console.log(id)
    console.log()

    function handleChangeQuantity({target}){
        setorders({...orders,['quantity']: target.value });
        const totalp = parseInt(orders[id].quantity) * orders[id].price;
        setorders({...id,['total']: totalp});

    }

    console.log(orders.quantity)
    

    /* Agregar una constante para actualizar el estado del modal */
    const [show, setShow] =useState(false);
    const handleClose=()=>{setShow(false);}
    const handleOpen=()=>{setShow(true);}
    
    const [dataModal, setDataModal] = useState({ });

    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    



    /*const handleSubmit = async (e) => {
        
        e.preventDefault();

        const response = await axios.put(`${url}/${orders.id}`, orders);

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
    }



    if(show==true){
        return(
        <Modalfx
                products={products}
                show ={show}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                dataModal={dataModal}
                handleChangeModal={handleChangeModal}
                reload={reload}
                getData={getData}
            />);
    }*/


    /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

    



    useEffect(() => {
        getData().then((response) => {
            setorders(response.data)
        })
    }, [upOrders])

    //Funcion asincrona paara borrar a partir del lsitener del boton eliminar 

    const handleDelete = async () => {
        Swal.fire({
            title: 'Esta seguro de eliminar este registro?',
            text: "No puede revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                axios.delete(`${urlOrders}/${id}`).then((response) => {
                    console.log(response);

                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'Este registro fue eliminado exitosamente.',
                            'success'
                        )

                        setUpOrders(!upOrders);

                    } else {
                        Swal.fire(
                            'Error!',
                            'Este registro no se pudo eliminar',
                            'error'
                        )
                    }
                })

            }
        })
    }
   let invoice = 0;
   for(let i=0 ; i<orders.length ; i++){
        invoice = invoice + orders[i].total;
        console.log(invoice);
   }


   const handleEdit = () => {
    handleOpen();
    setDataModal(order);
   }

    return (
        <div>
            <section className="container_shopping-product">

                {orders.map((order, id) => (
                    <div>
                        <img class="line" src={line} />
                        <article class="shopping-product" key={id}>

                            <div class="shopping-img">
                                <img src={require(`../../img/${order.photo}`)} />
                            </div>

                            <div class="shopping-info">
                                <p className='order-name'>{order.name}</p>

                                <div class="container-shopping-price">
                                    <div className='shopping-price'>
                                        <h4 className='shopping-quantity'>Precio Unidad : ${order.price}</h4>
                                        <h4 className='shopping-quantity'>Cantidad : {order.quantity}</h4>
                                        <h2 className='shopping-total'>Total : ${order.total}</h2>
                                    </div>
                                   {/* <Link to={`/shop/` + `${order.id}`}><input type={'number'} min='0' className='col-2 m-2 p-0 inputt' name='quantity'   onChange={handleChangeQuantity} ></input></Link>*/}

                                    <td><Link to={`/shop/` + `${order.id}`}><button className="btn btn-danger btn-delete" onDoubleClick={handleDelete}>X</button></Link></td>
                                    <td><Link to={`/shop/` + `${order.id}`}><button className="success btn-edit" onDoubleClick={handleEdit}>Editar</button></Link></td>
                                </div>
                            </div>

                        </article>
                    </div>
                ))}

            <img class="final-line" src={line} />
                <div className='container-shopping-invoice'>
                    <p className='order-name'>TOTAL : {invoice}</p>
                    <Link to='/form'><button className='btn-buy'>Comprar</button></Link>

                </div>

            </section>
            

        </div>
    );
}

export default TableSC;

