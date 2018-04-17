import React from 'react';
import './App.css';
import UserContext from './UserContext';

const About = () => {
  return (
    <UserContext.Consumer>
      { user => {
        return (
          <div className='profile-section '>
            <div className='section-header'>
              <h1>Personal Information:</h1>
            </div>
            <div className='section-body'>
              <label>
                First Name
                <input value={user.firstName}/>
              </label>
              <label>
                Last Name
                <input value={user.lastName}/>
              </label>
              <label>
                Age
                <input value={user.age}/>
              </label>
              <label>
                Phone
                <input value={user.phoneNumber}/>
              </label>
              <label>
                Street
                <input value={user.street}/>
              </label>
              <label>
                City
                <input value={user.city}/>
              </label>
              <label>
                State
                <input value={user.state}/>
              </label>
              <label>
                Zip
                <input value={user.zip}/>
              </label>
            </div>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default About;