import React from 'react';
import './App.css';
import UserContext from '../Context/UserContext';
import Card from './Card';

const Favorites = () => {
  return (
    <UserContext.Consumer>
      {user => {
        const renderFavorites = () => user.favorites.map(fav => <Card {...fav} key={fav.id} />) 

        return (
          <div className='profile-section '>
            <div className='section-header'>
              <h1>Favorites:</h1>
            </div>
            <div className='section-body'>
              { renderFavorites() }
            </div>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Favorites;