import React, { useState, useContext, useEffect } from 'react';

import { useUpdateField } from './customHooks/index.js';
import UserContext from '../context/UserContext';
import SubmitButton from './SubmitButton';

import './App.css';
import './About.css';

const About = ({ saveUpdates }) => {
    const userContext = useContext(UserContext);
    const [userState, setUserState] = useState(userContext)
    const [changeMade, setChangeMade] = useState(false)
    const [updatedFields, setUpdatedField] = useState({})

    const firstName = useUpdateField(userState.firstName, trackChange) // a way to use custom hook...
    const lastName = updateField(userState.lastName)
    const age = updateField(userState.age)
    const phoneNumber = updateField(userState.phoneNumber)
    const street = updateField(userState.street)
    const city = updateField(userState.city)
    const state = updateField(userState.state)
    const zip = updateField(userState.zip)

    function updateField(initialValue) {
        const [value, setVal] = useState(initialValue)
        
        function handleChange(e) {
            const { name } = e.target;
            setVal(e.target.value)

            if (value !== userContext[name]) {
                trackChange(e)
            } 
        }

        return {
            value,
            onChange: handleChange
        }
    }

    function trackChange(e) {
        const { name, value } = e.target
        setChangeMade(true)
        setUpdatedField({ ...updatedFields, [name]: value })
    }

    function handleBlur(e) {
        const { name, value } = e.target;

        if (value !== userContext[name]) {
            
            setUpdatedField({...updatedFields, [name]: value })
            setChangeMade(true)
        }
    }

    function handleSave() {
            saveUpdates(updatedFields)
                .then(() => setChangeMade(false))
    }

    return (
        <div className='profile-section '>
            <div className='section-header'>
                <h1>Personal Information:</h1>
            </div>

            <div className='section-body about-section'>
                <label>
                    First Name:
                    <input {...firstName}  name='firstName' />
                </label>
                <label>
                    Last Name:
                    <input {...lastName} name='lastName' />
                </label>
                <label>
                    Age:
                    <input {...age} name='age' />
                </label>
                <label>
                    Phone:
                    <input {...phoneNumber} name='phoneNumber' />
                </label>
                <label>
                    Street:
                    <input {...street} name='street' />
                </label>
                <label>
                    City:
                    <input {...city} name='city' />
                </label>
                <label>
                    State:
                    <input {...state} name='state' />
                </label>
                <label>
                    Zip:
                    <input {...zip} name='zip' />
                </label>
                <div className='save-changes-btn'>
                    {changeMade && 
                        <SubmitButton 
                            text='Save Changes'
                            handleClick={handleSave}
                        />
                    }
                </div>
            </div>
        </div>
    )
}    

export default About;