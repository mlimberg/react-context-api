import React from 'react';
import logo from './logo.svg';
import UserContext from './UserContext';

const Header = () => {
  return (
    <UserContext.Consumer>
      { user => {
        return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{`Welcome to React Context, ${user.username}`}</h1>
          </header>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Header;