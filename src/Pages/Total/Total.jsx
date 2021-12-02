import React, { useContext } from "react";
import {FaRegTrashAlt, FaCashRegister} from 'react-icons/fa';
//Context
import StoreContext from "../../Context/StoreContext";
import { Link } from "react-router-dom";

import "./Total.styles.css"
const Total = () => {

    const { state} = useContext(StoreContext);
  
    return(

    
    <div className="productoTotal" >

     
      <p className="totalt font-bold"> Total de productos:
      {" "}
              {state?.cart?.length === 0
                ? 0
                : state?.cart?.reduce(function (a, b) {
                    return { count: a.count + b.count };
                  }).count}

                  </p>
    
        <div >
       
          <div  >
    
              <ul>
                {state?.cart?.map((item) => (
                  <li >
                    <div  className="art">
                      <h6>{item.name}</h6>
                      <small >{item.description}</small>
                    </div>
                    <div  className="art">
                   
                      <h1>${item.price}.00 x {item.count} = ${item.price * item.count}.00</h1>
                      <br />
                      <small >{item.count} productos.</small>
                     
                    </div>
                  </li>
                ))}
                <li>
                  <span className="totalt font-bold">Total</span>
                  <strong className="totalt font-bold">${state.total.toFixed(2)}</strong>
                 
                </li>
               
              </ul>





            
          
          </div>
         
       
      </div>
  
    </div>

  );
}

export default Total
