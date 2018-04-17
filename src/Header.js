import React from 'react';
import logo from './logo.svg';
import UserContext from './UserContext';

const Header = () => {
  


  return (
    <UserContext.Consumer>
      { user => {

        const toggleMessage = () => {
          if (user) {
            return `Welcome to React Context, ${user.username}`
          } else {
            return "Welcome! Please sign in"
          }
        }


        return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{ toggleMessage() }</h1>
          </header>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Header;