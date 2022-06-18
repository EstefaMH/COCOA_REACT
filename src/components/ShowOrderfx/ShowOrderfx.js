import './ShowOrder.css'
import axios from "axios";
import {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';




function ShowOrderfx(){

    const url = 'http://localhost:4000/clients';
     /*2. Generar la fx asincrona para conctar a la API */
     const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UsesState guarda la respuesta de laa peticion  */
    const [order, setOrder] = useState([]);
    console.log(order);

    /*4. Hook */

    useEffect(() => {
        getData().then((response) => {
            setOrder(response.data)

        })
    }, [])

    return (
        <div>
            <main class="container-products">
                <section id="products">
                    {order.map((id) => (
                        <article class="product" key={id}>
                            <p class="product-info" >{order[0][0].orderClient[0].name}</p>
                            <p class="product-info" ><strong>PRECIO : </strong>  {order[0][0].orderClient[0].price}</p>
                            <p class="product-info" ><strong>CANTIDAD : </strong>{order[0][0].orderClient[0].quantity} U</p>
                            <p class="product-info" ><strong>TOTAL : </strong>{order[0][0].orderClient[0].total}</p>
                            <p className="client-data">---- DATOS DEL CLIENTE ----</p>
                            <p class="product-info">Nombre : {order[0][1].name}</p>
                            <p class="product-info">Celular: {order[0][1].phone}</p>
                            <p class="product-info">E-mail : {order[0][1].password}</p>
                        </article>
                    ))}
                </section>
            </main>




        </div>
    );




}

export default ShowOrderfx;