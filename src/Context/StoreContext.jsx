import React, { createContext, useReducer } from "react";

//Creamos el contexto
const StoreContext = createContext();


//REDUCER

const initialState = {
  list : [
    {
      id: 1,
      name: "Frambuesas",
      description : "Paquete de frambuesas de 500gr",
      image: "https://picsum.photos/id/102/600/400",
      price: 250
    },
    {
      id: 2,
      name: "Cafetera",
      description : "Practica cafetera para preparar un buen café Veracruzano todas las mañanas",
      image: "https://picsum.photos/id/1060/600/400",
      price: 550
    },
    {
      id: 3,
      name: "Fresas",
      description : "500gr de fresas frescas",
      image: "https://picsum.photos/id/1080/600/400",
      price: 100
    },
    {
      id: 4,
      name: "Bicicleta",
      description : "Bonita bicicleta para salir a hacer ejercicio",
      image: "https://picsum.photos/id/146/600/400",
      price: 320
    },{
      id: 5,
      name: "Zapatos",
      description : "Lindos zapatos, para la novia, para la esposa...",
        image: "https://picsum.photos/id/21/600/400",
        price: 800
    },
    {
      id: 6,
      name: "Miel de abeja natural",
      description : "1lt de miel natural",
      image: "https://picsum.photos/id/312/600/400",
      price: 120
    },
    {
      id: 7,
      name: "Atrapasueños",
      description : "Atrapasueños para la decoración de la habitación del niño, de la niña...",
        image: "https://picsum.photos/id/104/600/400",
        price: 90
    }, {
      id: 8,
      name: "Bicicleta",
      description : "Bonita bicicleta para salir a hacer ejercicio",
      image: "https://picsum.photos/id/146/600/400",
      price: 1656
    },{
      id: 9,
      name: "Zapatillas",
      description : "Lindos zapatos, para la novia, para la esposa...",
        image: "https://picsum.photos/id/21/600/400",
        price: 234
    },
    {
      id: 10,
      name: "Miel de abeja natural",
      description : "2lt de miel natural",
      image: "https://picsum.photos/id/312/600/400",
      price: 130
    },
    {
      id: 11,
      name: "Costilla ",
      description : "Carne de primera calidad, lista para azar",
        image: "https://baconmockup.com/640/360",
        price: 720
    }, 
  ],
  cart: [],
  total: 0,
  repeat: [],
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + action.payload.price
    };
    /*case "REMOVE_FROM_CART":

    return {
      ...state,
      cart: state.cart.filter(item  => item.id !== action.payload.id),
      total: state.total - action.payload.price
    }*/
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.count,
      };

    case "ADD_TO_CART2": {
      let newItemCart = action.payload.id;
      let productOnCart = state.cart.find((item) => item.id === newItemCart);
      return productOnCart 
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item,
            ),
            total: state.total + action.payload.price,
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, count: 1 }],
            total: state.total + action.payload.price,
          };
    }

    case "REMOVE_ONE_FROM_CART": {
      let itemToDelete = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      return itemToDelete.count > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count - 1 }
                : item,
            ),
            total: state.total - action.payload.price,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            total: state.total - action.payload.price,
          };
    }

    case "CLEAR_CART":
      return initialState;

    


    default:
      return state;
  };
};


//Provider
const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer,initialState);

  const data = {
    state,
    dispatch,
  
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreContext;
export { StoreProvider };
