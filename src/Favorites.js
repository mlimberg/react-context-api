import React from 'react';
import './App.css';
import UserContext from './UserContext';
import Card from './Card';
import WithUser from './UserContext';

const Favorites = ({ ...props }) => {
  const { user } = props;
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
}

export default WithUser(Favorites);