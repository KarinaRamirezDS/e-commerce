import React, { useContext } from "react";
import {FaRegTrashAlt, FaCashRegister} from 'react-icons/fa';
//Context
import StoreContext from "../../Context/StoreContext";
import { Link } from "react-router-dom";
import "./Cart.styles.css";
import Total from "../Total/Total"
const Cart = () => {
  const { state, dispatch} = useContext(StoreContext);
  
  

  
  return (
    <>
    <div className="main" >
    <h2 className="mt-10">Carrito de compras</h2><hr/><br/><br/>
    <div className="barra">
    
      <p className="textobarra">Total: {state.total}</p>

      <p className="textobarra"> Total de productos:
      {" "}
              {state?.cart?.length === 0
                ? 0
                : state?.cart?.reduce(function (a, b) {
                    return { count: a.count + b.count };
                  }).count}

                  </p>

                  <Link to={"/total"} className="textobarra">  <FaCashRegister size = {50}  style={{ color: 'black' }}/> Pagar </Link>

                  <button className="bg-red textobarra"
            onClick={() =>
              dispatch({ type: "CLEAR_CART" })
            }
          > <FaRegTrashAlt size={50} style={{ color: 'red' }}/>Limpiar carrito</button>

    </div>
    
    
      
      

      

      <div className="lista-productos">
      {state?.cart?.map(item => (
        <div key={item.id} className="producto-card">
         <img src={item.image} alt="" />
          <div class="producto-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p className="precio">${item.price}°°</p>
          <h1>${item.price}.00 x {item.count} = ${item.price * item.count}.00</h1>


          <button className="bg-red"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: { ...item } })
            }
          > <FaRegTrashAlt size={30}/>Todo</button>
          

          <button onClick={() => {
            dispatch({
              type: "REMOVE_ONE_FROM_CART",
              payload: { ...item },
            });
          }} > <FaRegTrashAlt size={30}/>Producto </button>
      
        </div>

       
        </div>
      ))}
 
    </div>

    </div>
   
    </>
  );
};

export default Cart;
