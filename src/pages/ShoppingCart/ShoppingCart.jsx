import './ShoppingCart.css'
import TableSC from '../../components/TableSC/TableSC';
import Header from '../../components/Header/Header';
import Subtitle from '../../components/Subtitle/Subtitle'


function ShoppingCart() {

    return (
       <div>
            <Header />
            <Subtitle text="Carrito de compras"></Subtitle>
            <TableSC />
       </div>
    );
}


export default ShoppingCart;
