import React, { useState, useContext } from 'react';

import SubmitButton from './SubmitButton'
import { useUpdateField } from './customHooks/index.js';

import './SignIn.css'

const About = ({ signIn, error }) => {
    const email = useUpdateField('')
    const password = useUpdateField('')
    const [inputError, setInputError] = useState(true)
    const [submitted, setSubmitted] = useState(false)

    function attemptSignIn(e) {
        e.preventDefault()
        setSubmitted(true)

        if(!email.value || !password.value) {
            return setInputError(true)
        }
        
        signIn(email.value, password.value)
    }

    function handleClass(val) {
        const hasError = inputError && submitted && !val
        const setError = hasError ? 'input-error' : ''

        return `inputClass ${setError}`
    }

    return (
        <form 
            className='signin-container'
            onSubmit={attemptSignIn}
        >
            {error && <div className='banner-error'>{error}</div>}
            <input
                className={handleClass(email.value)}
                {...email}
            />
            <input
                className={handleClass(password.value)}
                {...password}
                type='password'
            />
            <SubmitButton
                text='Sign In'
            />
        </form>
    )
}

export default About;