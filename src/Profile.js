import React, { Component } from 'react';
import About from './About';
import Favorites from './Favorites';
import './App.css';

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='profile-container'>
        <About />
        <Favorites />
      </div>
    )
  }
}

export default Profile;