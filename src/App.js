import React, { Component } from 'react';

import UserContext from './UserContext';
import CardContainer from './CardContainer';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import WithUser from './UserContext';
import './App.css';

class App extends Component {
  
  render() {
    const { user, updateSignIn } = this.props;
    return (
      <div className="App">
          
          <Header />
          
          { user ? <Profile /> : <SignIn signIn={() => updateSignIn(true)} /> }

        <Footer />
      </div>
    );
  }
}

export default WithUser(App);
