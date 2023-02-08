import React from "react";
import VIÑEDOS from "../../imagenes/VIÑEDOS.png";
import CartWidget from "../CartWidget";
import ItemListContainer from "../ItemListContainer";

 const NavBar =()=>{
   
    return(
        <header>
          <a href="/" >
            <div className="logo">
                <img src={VIÑEDOS} width="150"/>
            
            </div>
          </a> 
          <ul>
            <li>
                <a href="/">Sobre Nosotros</a>
            </li>
            <li>
                <a href="#">Productos</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
          </ul>
          <CartWidget className="cart"/>
          <ItemListContainer greeting="Carolina"/>
          
        </header>
    )
}

export default NavBar;