import React from 'react'
import "./Home.styles.css"
import {FaShoppingBag } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <section id="inicio"><h1 className= "font-medium text-8xl bg-gray-400 truncate font-serif ">WELCOME !</h1></section> 
          
            <Link to="/store" className="next"> <FaShoppingBag className="next" size = {70}  style={{ color: 'white', display: 'inline-flex', justifyContent: 'center !import', alignItems: 'center' }}  /></Link>
            <p className="parrafos">¡Haz tus compras sin salir de casa!</p>
            
        </div>
    )
}

export default Home
