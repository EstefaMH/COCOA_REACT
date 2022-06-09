import React from "react";
import "./Header.css";
import Logo from '../../img/Logo- COCOA.png'
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap";


function Header() {
    return (

        <div className="container-nav">
            <div className="container-logo-nav">
               <Link to='/main' className="logo"><img className="AA" src={Logo} /></Link>
            </div>

            <nav className="navbar">



                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler" className="i-nav"><FaBars /></label>
                <div className="menu">
                    <ul className="list" id="list">
                        <h1 className="t-logo">Cocoa</h1>
                        <li><img src={require('../../img/Logo- COCOA.png')} alt="" className="img-bottom" /></li>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/main'>Acerca de</Link></li>
                        <li>
                            <Link to='bakery/'>Panadería</Link>
                            <ul className="list-subitem">
                                <li><Link to='bakery/gallery'>Galería </Link></li>
                                <li><Link to='bakery/comprenhensive'>Integral</Link></li>
                                <li><Link to='bakery/handcraft'>Artesanal</Link></li>
                                <li><Link to='bakery/puffpastries'>Hojaldres</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='cakeshop/'>Pastelería</Link>
                            <ul className="list-subitem">
                                <li><Link to='/gallery'>Galería </Link></li>
                                <li><Link to='/biscuits'>Galletas</Link></li>
                                <li><Link to='/cakes'>Pasteles</Link></li>
                                <li><Link to='/desserts'>Postres</Link></li>
                            </ul>
                        </li>
                        <li className="i-cart"><Link to='/shop'><FaShoppingCart /></Link></li>
                    </ul>
                </div>
            </nav>
            {/* className="subitems */}

            {/* <nav className="navbar">
                <Nav collapseOnSelect>



                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler" className="i-nav"><FaBars /></label>
                <div className="menu">
                    <ul className="list">
                        <h1 className="t-logo">Cocoa</h1>
                        <li><img src={require('../../img/Logo- COCOA.png')} alt="" className="img-bottom" /></li>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/main'>Acerca de</Link></li>
                        <li >
                            <NavDropdown title="Panaderia" id="collasible-nav-dropdown"  > 
                                <div className="as"> 
                                    <Link to='gallery' className="subitems">Galería </Link>
                                    <Link to='comprenhensive' className="subitems">Integral</Link>
                                    <Link to='handcraft' className="subitems">Artesanal</Link>
                                    <Link to='puffpastries' className="subitems">Hojaldres</Link>
                                </div> 
                            </NavDropdown>
                            
                        </li>

                        <li>
                        <NavDropdown title="Pasteleria" id="collasible-nav-dropdown" className="aaa"  >
                            <div className="as">
                               <Link to='gallery' className="subitems">Galería </Link>
                                <Link to='biscuits' className="subitems">Galletas</Link>
                                <Link to='cakes' className="subitems">Pasteles</Link>
                               <Link to='desserts' className="subitems">Postres</Link>
                            </div>
                        </NavDropdown>
                        </li>
                        <li className="i-cart"><Link to='/shop'><FaShoppingCart /></Link></li>
                    </ul>
                </div>
                </Nav>
            </nav> */}



            {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <div className="container-nav">
            <div className="container-logo">
                <Link to='/main' className="logo"><img className="AA" src={Logo} /></Link>
            </div>
  
  <nav className="navbar">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"><FaBars /></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </nav>
  </div>
  </Container>
</Navbar>
*/}




        </div >
    )
};

export default Header;