import React, { Component } from 'react';

import UserContext from './UserContext';
import CardContainer from './CardContainer';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.deleteCard = id => {
      const favorites = this.state.user.favorites.filter(fav => fav.id !== id);
      const user = Object.assign({}, this.state.user, { favorites });
      const newState = Object.assign({}, this.state, { user })
      
      this.setState(newState);
    }

    this.state = {
      user: null,
      deleteCard: this.deleteCard
    }  
    
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    const user = {}

    this.setState({ user })
  }

  signOut() {
    this.setState({ user: null })
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
          
          <Header signOut={this.signOut} />
          
          { user ? <Profile /> : <SignIn signIn={this.signIn} /> }


        <Footer />
      </div>
    );
  }
}

export default App;
