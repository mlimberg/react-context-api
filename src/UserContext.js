import React from 'react';

let isSignedIn = false;
let onUpdateCBs = [];

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

const UserContext = React.createContext(user);

export default (Component) => {
  return class extends React.Component {
    constructor() {
      super()

      this.updateSignIn = this.updateSignIn.bind(this)
      this.deleteCard = this.deleteCard.bind(this)
      this.update = this.update.bind(this)
      this.runUpdates = this.runUpdates.bind(this)
    }

    update() {
      this.forceUpdate()
    }

    componentDidMount() {
      onUpdateCBs.push(this.update)
    }

    runUpdates() {
      onUpdateCBs.forEach(fn => fn())      
    }

    updateSignIn(val) {
      isSignedIn = val;
      this.runUpdates();
    }

    deleteCard(id) {
      const newFavorites = user.favorites.filter(fav => fav.id !== id);
      user.favorites = newFavorites
      this.runUpdates()
    }

    componentWillUnmount() {
      onUpdateCBs = onUpdateCBs.filter(fn => fn !== this.update)
    }

    render() {
      return (
        <UserContext.Consumer>
          { user => <Component 
                      {...this.props} 
                      user={ isSignedIn ? user : null } 
                      updateSignIn={this.updateSignIn}
                      deleteCard={this.deleteCard}
                    /> 
          }
        </UserContext.Consumer>
      )
    }
  }
}
