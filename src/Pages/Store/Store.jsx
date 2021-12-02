import React, { useContext } from "react";
import "./Store.styles.css";
//Context
import StoreContext from "../../Context/StoreContext";

const Store = () => {
  const { state, dispatch } = useContext(StoreContext);


/*
  const handleAddProduct = data => {
    let newCart;
    let isNewProduct = cart.indexOf(
      cart.find(product => product.id === data.id)
    );
    if (isNewProduct !== -1){
      newCart = cart.map(product =>
        product.id === data.id ? {...product, qty: product.qry + 1 } : product);
      } else {   
        newCart = [...cart, data];
      }
        dispatch(addProductAction({newCart, price:data.price}));
    };
  */


   
  return (
    <div className="mains">
    
      <h2>Catálogo de productos</h2>
      <div className="lista-productos">
      {state?.list?.map(item => (
        <div key={item.id} className="producto-cards">
          <img src={item.image} alt="" />
          <div class="producto-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p className="precio">${item.price}°°</p>
      
         
         
          <button onClick={() => {
            dispatch({
              type: "ADD_TO_CART2",
              payload: { ...item },
            });
          }}
        >  Agregar al carrito </button>


      

        
        </div>
        </div>
      ))}
    </div>
   
    </div>
  );




};

export default Store;
