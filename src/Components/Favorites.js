import React, { useContext, useState, useEffect } from 'react';

import SubmitButton from './SubmitButton';
import Card from './Card';
import UserContext from '../context/UserContext';
import FavoritesDispatch from '../context/FavoritesDispatch';
import { useUpdateField } from './customHooks/index.js';

import './App.css';
import './Favorites.css';

const Favorites = () => {
    const [showForm, setShowForm] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [item, setItem] = useState('')
    const dispatch = useContext(FavoritesDispatch);
    const [rating, setRating] = useState('')
    const user = useContext(UserContext);
    const errorClass = hasError ? 'input-error' : '';
    const renderFavorites = () => user.favorites.map(fav => <Card {...fav} key={fav.id} />)

    function toggleForm() {
        setShowForm(!showForm)
    }

    function addFavorite(e) {
        e.preventDefault()
        
        if (!item.value) {
            return setHasError(true)
        }

        dispatch({ 
            type: 'ADD_FAVE', 
            item: {
                item: item.value,
                id: Date.now(),
                rating: rating.value || 'N/A'
            }
        })

        reset()
    }

    function reset() {
        item.value = ''
        rating.value = ''
        setShowForm(false)
        setHasError(false)
    }

    return (
        <div className='profile-section '>
            <div className='section-header'>
                <h1>Favorites:</h1>
            </div>
            <div className='section-body'>
                {!showForm ?
                    <button
                        onClick={toggleForm}
                        className='add-fave-btn'
                    >
                        Add Favorite
                    </button>
                    :
                    <form
                        className='add-fave-form'
                        onSubmit={addFavorite}
                    >
                        <div
                            className='hide-form'
                            onClick={toggleForm}
                        >
                            &#x2715;
                        </div>
                        <input
                            {...item}
                            name='item'
                            placeholder='Title'
                            className={errorClass}
                        />
                        <input
                            {...rating}
                            name='rating'
                            placeholder='Rating'
                        />
                        <SubmitButton
                            className='add-btn'
                            text='Add'
                        />
                    </form>
                }
                {renderFavorites()}
            </div>
        </div>
    )
}

export default Favorites;