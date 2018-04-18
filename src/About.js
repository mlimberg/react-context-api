import React from 'react';
import './App.css';
import UserContext from './UserContext';

const About = () => {
  return (
    <UserContext.Consumer>
      { value => {
        const { user } = value;
        return (
          <div className='profile-section '>
            <div className='section-header'>
              <h1>Personal Information:</h1>
            </div>
            <div className='section-body'>
              <label>
                First Name
                <input readOnly value={user.firstName}/>
              </label>
              <label>
                Last Name
                <input readOnly value={user.lastName}/>
              </label>
              <label>
                Age
                <input readOnly value={user.age}/>
              </label>
              <label>
                Phone
                <input readOnly value={user.phoneNumber}/>
              </label>
              <label>
                Street
                <input readOnly value={user.street}/>
              </label>
              <label>
                City
                <input readOnly value={user.city}/>
              </label>
              <label>
                State
                <input readOnly value={user.state}/>
              </label>
              <label>
                Zip
                <input readOnly value={user.zip}/>
              </label>
            </div>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default About;