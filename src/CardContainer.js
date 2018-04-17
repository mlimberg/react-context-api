import React, { Component } from 'react';
import Card from './Card.js';

export default class CardContainer extends Component {

  render() {
    const renderCards = () => {
      return this.props.cards.map((card, i) => {
        return <Card {...card} key={i}/>
      })
    }

    return (
      <div className='card-container'>
        { renderCards() }
      </div>
    )
  }
}