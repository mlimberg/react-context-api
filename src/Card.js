import React, { Component } from 'react';
import './App.css';
import WithUser from './UserContext';

const Card = ({...props, user}) => {
  const { id, item, rating, deleteCard } = props;
  
  const toggleItem = () => {
    if (item === 'Swashbuckler') {
      return (
        <a href="http://www.imdb.com/title/tt0075294/" target="_blank">
          {item}
        </a>
      )
    } else {
      return item
    }
  }

  return (    
    <div className='card'>
      <span className='delete-btn' onClick={() => deleteCard(id)}>X</span>
      <h3>{toggleItem()}</h3>
      <p>{`Category: ${rating}`}</p>
    </div>  
  )
}


export default WithUser(Card);