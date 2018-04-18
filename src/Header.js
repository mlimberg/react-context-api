import React from 'react';

import logo from './logo.svg';
import UserContext from './UserContext';
import WithUser from './UserContext';

const Header = ({ user, updateSignIn }) => {

  const toggleMessage = () => {
    if (user) {
      return `Welcome to React Context, ${user.username}`
    } else {
      return "Welcome! Please sign in"
    }
  }

  const toggleSignOut = () => {
    if (user) {
      return (
        <button onClick={ () => updateSignIn(false) } >Sign Out</button>
      )
    }
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1 className="App-title">{ toggleMessage() }</h1>
        { toggleSignOut() }
      </div>
    </header>
  )
}

export default WithUser(Header);