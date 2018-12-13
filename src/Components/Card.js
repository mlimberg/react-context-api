import React, { useContext } from 'react';

import FavoritesDispatch from '../context/FavoritesDispatch';

import './App.css';

const Card = ({ id, item, rating }) => {
    const dispatch = useContext(FavoritesDispatch);
    
    function removeItem() {
        dispatch({ type: 'REMOVE_FAVE', id })
    }

    return (    
        <div className='card'>
            <div
                className='delete-btn'
                onClick={removeItem}
            >
                &#x2715;
            </div>
            <h3>{item}</h3>
            <p>{`Rating: ${rating}`}</p>
        </div>  
    )
}

export default Card;