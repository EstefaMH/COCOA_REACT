import './Cards.css'
import axios from 'axios';
import { useState, useEffect } from 'react'


function Cards() {

    /*1. Definir url del api a la que me voy a conectar*/
    const url = "http://localhost:4000/cakes";

    /*2. Generar la fx asincrona para conctar a la API */
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UsesState guarda la respuesta de laa peticion  */
    const [products, setProducts] = useState([]);

    /*5. UseState refresh list state */
    const [upProducts, setUpProducts] = useState([false]);

    /*4. Hook */

    useEffect(() => {
        getData().then((response) => {
            setProducts(response.data)
        })
    }, [])
    console.log(products);
    

    return (
        <main class="container-products">
            <section id="products">
                {products.map((product, id) => (
                    <article class="product" key={id}>
                        <p class="product-info" >{product.name}</p>
                        <p class="product-info"> {product.description} </p>
                        <img class="product-img" src={require(`../../img/cakeshop/cakes/${product.photo}`)} />
                        <button class="btn-view">Ver mas</button>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Cards;