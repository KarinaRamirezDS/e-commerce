import { TYPES } from "../actions/ShoppingActions";

export const shoppingInitialState = {

        products : [
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
          }
        ],
        cart: [],
        total: 0
}

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);
            //console.log(newItem);

            let itemInCart = state.cart.find(iteml => iteml.id === newItem.id)


            return itemInCart 
            ? {
              ...state,
              cart:state.cart.map((item) =>
              item.id === newItem.id
              ? { ...item, quantity:item.quantity + 1}
              :item ),
              total: state.total + action.payload.price
            } 
            :{
              ...state,
              cart: [...state.cart,{...newItem, quantity: 1}],
              total: state.total + action.payload.price

            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
         let itemToDelete = state.cart.find((item) => item.id === action.payload);

         return itemToDelete.quantity > 1
         ?{
           ...state,
           cart: state.cart.map((item) => 
           item.id === action.payload
           ? {...item, quantity: item.quantity - 1}
           : item
           )
         }
         :{
           ...state,
           cart: state.cart.filter((item) => item.id !== action.payload)
         }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
          return {
            ...state,
              cart: state.cart.filter((item) => item.id !== action.payload)
            
          }
        }
        case TYPES.CLEAR_CART:
          return shoppingInitialState
       
        default:
            return state;
    }
}