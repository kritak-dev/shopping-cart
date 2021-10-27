import React, { useState } from 'react';
import './style.css';

export default function AddButton(props) {

    const { addToCart, id } = props;

    const [count, setCount] = useState(1);

    const  addItem = () =>  setCount(count + 1);

    const removeItem = () => setCount(count > 1 ? count - 1 : count);

    const addNewItem = () => addToCart(id, count);
        
    return (
        <div>
            <button className="cartbtn" onClick={addNewItem}>Add to Cart</button>
            <div className="counter">
                <div className="btn" onClick={addItem}>+</div>
                <div className="count">{count}</div>
                <div className="btn" onClick={removeItem}>-</div>
            </div>
        </div>
    );
}