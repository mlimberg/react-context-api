import React from 'react';

let isSignedIn = false;

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
    { id: 4, item: 'Swashbuckler', rating: 'PG' },
    { id: 5, item: 'Peter Pan', rating: 'G' },
    { id: 6, item: 'The Princess Bride', rating: 'PG' },
    { id: 7, item: 'Captain Phillips', rating: 'PG-13' },
  ]
}

const updateSignIn = val => {
  isSignedIn = val;
}

const UserContext = React.createContext(user);

const withUser = (Component) => {
  return (props) => {
    return (
      <UserContext.Consumer>
        { user => <Component {...props} user={ isSignedIn ? user : null } updateSignIn={updateSignIn} /> }
      </UserContext.Consumer>
    )
  }
}

export default withUser;