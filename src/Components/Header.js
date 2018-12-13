import React from 'react';
import logo from './logo.svg';
import UserContext from '../context/UserContext';

import './Header.css';

const Header = ({ signOut }) => {

  return (
    <UserContext.Consumer>
      { user => {

        const toggleMessage = () => {
            let msg = 'Welcome! Please sign in'
            
            if (user) msg = `Welcome to React Context, ${user.username}!`

            return msg;
        }

        const toggleSignOut = () => {
          if (user) {
            return (
              <a
                onClick={signOut}
                className='sign-out-btn'
            >
                Sign Out
            </a>
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
      }}
    </UserContext.Consumer>
  )
}

export default Header;