//import React from 'react';
import './style.css';
import AddButton from '../AddButton/AddButton';

const Product = (props) => {

    const { addItemToCart, isCartOpen, removeItemFromCart } = props;

    const addToCart = (id, count) => {
        addItemToCart(id, count)
    }

    const deleteItem = evt => {
        removeItemFromCart(evt.target.id);
    }

    const showCartItems = () => {
        const { src, alt, count } = props;
        return (
            <div>
                <img src={src} alt={alt} />
                <p>{count}</p>
                <button id={alt} onClick={deleteItem}>Remove Item</button>
            </div>
        )
    }

    const showProducts = () => {
        const { src, alt } = props;
        
        return (
            <div>
                <img src={src} alt={alt} />
                <AddButton id={alt} addToCart={addToCart} />
            </div>
        )
    }

    return (
        <div>
            { isCartOpen ? showCartItems() : showProducts()}
        </div>
    );
}

export default Product;