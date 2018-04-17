import React, { Component } from 'react';
import './App.css';
import UserContext from './UserContext';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, item, rating } = this.props;
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
      <UserContext.Consumer>
        { value => {
            console.log('VALUE ', value)
            return (
              <div className='card'>
                <span className='delete-btn' onClick={() => value.deleteCard(id)}>X</span>
                <h3>{toggleItem()}</h3>
                <p>{`Category: ${rating}`}</p>
              </div>  
            )
        }}
      </UserContext.Consumer>
    )
  }
}

export default Card;