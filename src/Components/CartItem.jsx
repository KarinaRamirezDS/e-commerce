import React from 'react'

const CartItem = ({data, delFromCart, totalP}) => {
    let {id,name, description, price, quantity} = data;





    
    return (
        <div style={{ borderBottom: "thin solid gray"}}>
            <h1>{name}</h1>
            <h1>{description}</h1>
            <h1>${price}.00 x {quantity} = ${price * quantity}.00</h1>
            <button onClick={() => delFromCart(id)}>Eliminar producto</button>
            <button onClick={() => delFromCart(id, true)}>Eliminar productos</button>
            
        </div>
    )
}

export default CartItem
