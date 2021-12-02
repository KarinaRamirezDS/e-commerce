import React from 'react'

const ProductItem = ({data, addToCart}) => {
    let {id, name, description, image, price } = data;
    return (
        <div style={{border:"thin solid gray", padding:"1rem"}}>
            <h1>{name}</h1>
            <h1>{description}</h1>
            <img src={image}></img>
            <h1>${price}.00</h1>
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div>
    )
}

export default ProductItem
