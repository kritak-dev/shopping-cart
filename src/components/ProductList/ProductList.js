import React, { useState } from 'react';
import Posters from '../../assets/catalog';
import Product from '../Product/Product';
import './style.css'

export default function ProductList(props) {

    const [cartItems, setCartItems] = useState([]);
    const { isCartOpen } = props;

    function prepareProductView(posters) {
        const postersView = posters.map(poster => {
            return <Product key={poster.name} src={poster.src} alt={poster.name} addItemToCart={addItemToCart} isCartOpen={isCartOpen} />
        });

        return postersView;
    }

    const addItemToCart = (id, count) => {
        console.log(`${count} ${id} added`)
        setCartItems(prevState => {
            if (prevState.length === 0) {
                return [...prevState, {id, count}];
            } else {
                let itemAleradyInCart = false;
                const cartItemsArr = prevState.map(item => {
                    if (item.id === id) {
                        itemAleradyInCart = true;
                        return { id, count: count + item.count};
                    }
                    return item;
                });
                
                if (!itemAleradyInCart) {
                    return [...prevState, {id, count}];
                }

                return cartItemsArr;
            }
        });
    }

    const removeItemFromCart = id => {
        setCartItems(prevState => prevState.filter(cartItem => cartItem.id !== id));
    }

    const displayCheckoutMessage = () => {
        alert('Thanks for buying');
        setCartItems([]);
    }

    const prepareCartView = cartItems => {
        const cartItemsView = cartItems.map(cartItem => {
            const posterToAddToCart = Posters.find(poster => poster.name === cartItem.id);
            return <Product key={posterToAddToCart.name} src={posterToAddToCart.src} alt={posterToAddToCart.name} count={cartItem.count} isCartOpen={isCartOpen} removeItemFromCart={removeItemFromCart} />
        });

       const cartView = (
           <div>
               <div className="grid">
                {cartItemsView}
               </div>
               <button className="checkout-btn" onClick={displayCheckoutMessage}>Checkout</button>
           </div>
       )

        return cartView;
    };

    const emptyCartView = () => {
        return (
            <div>
                You have not added any items to the cart.
            </div>
        );
    }

    const isCartEmpty = () => cartItems.length === 0;

    //const postersView = prepareProductView(Posters);

    return (
        <div className="grid">{ isCartOpen ? (isCartEmpty() ? emptyCartView() : prepareCartView(cartItems)) : prepareProductView(Posters) }</div>
    );
}