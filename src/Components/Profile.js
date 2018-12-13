import React, { Component } from 'react';
import About from './About';
import Favorites from './Favorites';
import './App.css';

const Profile = ({ saveUpdates }) => (
    <div className='profile-container'>
        <About saveUpdates={saveUpdates} />
        <Favorites />
    </div>
)

export default Profile;