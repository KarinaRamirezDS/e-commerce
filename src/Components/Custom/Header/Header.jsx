import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Styles
import "./Header.styles.css";
import {FaStore, FaShoppingCart } from 'react-icons/fa';
//Context
import DarkModeContext from "../../../Context/DarkModeContext";
import StoreContext from "../../../Context/StoreContext";
import "./Header.styles.css"
const Header = () => {
  const { darkMode, handleDarkMode } = useContext(DarkModeContext);
  const { state } = useContext(StoreContext);

  return (
    <header
      className="h-20 sticky flex justify-between items-center"
    >
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/store"><FaStore size={50}/></Link>
      </h2>
      <p></p>
      <p></p>
      <p></p>
    

      <Link to={"/store/cart"} > <FaShoppingCart size = {50}  style={{ color: 'white' }}/>
      <span className="carrito">
      {" "}
              {state?.cart?.length === 0
                ? 0
                : state?.cart?.reduce(function (a, b) {
                    return { count: a.count + b.count };
                  }).count}

                  </span>
                   </Link>

      <p></p>

     
     
    </header>
  );
};

export default Header;
