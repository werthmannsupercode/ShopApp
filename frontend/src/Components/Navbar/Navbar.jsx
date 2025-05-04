import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/peterleLogoSchwarz.png';
import cart from '../Assets/shopping-cart-371980_640.png';

const Navbar = () => {

const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Zeichnung Schafkopf  schwarz-weiß" className='navbarlogo'/>
            <p>MorgenLandHof</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"?<hr />:<></>} </li>
            <li onClick={()=> {setMenu("briefkaesten")}}><Link to='/briefkaesten'>Briefkasten</Link> {menu==="briefkaesten"?<hr />:<></>}</li>
            <li onClick={()=> {setMenu("tabletts")}}><Link to='/tabletts'>Tablett</Link> {menu==="tabletts"?<hr />:<></>}</li>
            <li onClick={()=> {setMenu("blumenkaesten")}}><Link to='/blumenkaesten'>Blumenkasten</Link> {menu==="blumenkaesten"?<hr />:<></>}</li>
        </ul>
        <nav className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt="Icon eines Einkaufswagens" className='carticon' /></Link>
            <div className="nav-cart-count">0</div>
        </nav>
    </div>
  )
}

export default Navbar