import React, { Component, useState } from 'react';
import './Components/App.css';
import UserContext from './Context/UserContext';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    }  
    
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    const user = {
      username: 'steve@testing.com',
      firstName: 'Davy',
      lastName: 'Jones',
      age: 292,
      phoneNumber: '555-555-5555',
      street: '10000 leagues',
      city: 'Under The Sea',
      state: 'FL',
      zip: 12345,
      favorites: [
        { id: 1, item: 'Pirates of the Caribbean', rating: 'PG-13' },
        { id: 2, item: 'Hook', rating: 'PG' },
        { id: 3, item: 'The Goonies', rating: 'PG' },
        { id: 5, item: 'Swashbuckler', rating: 'PG' },
        { id: 6, item: 'Peter Pan', rating: 'G' },
        { id: 7, item: 'The Princess Bride', rating: 'PG' },
        { id: 8, item: 'Captain Phillips', rating: 'PG-13' },
      ]
    }

    this.setState({ user })
  }

  signOut() {
    this.setState({ user: null })
  }


  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <UserContext.Provider value={user}>
          <Header signOut={this.signOut} />
          {user ? <Profile /> : <SignIn signIn={this.signIn} />}

        </UserContext.Provider>

        <Footer />
      </div>
    );
  }
}

export default App;
