import React, { useState } from 'react';

import './SignIn.css'

export default ({ signIn }) => {
    const email = updateField('')
    const password = updateField('')
    const [error, setError] = useState(true)
    const [submitted, setSubmitted] = useState(false)

    function updateField(initVal) {
        const [value, setVal] = useState(initVal)
        const handleChange = e => setVal(e.target.value)

        return { value, onChange: handleChange }
    }

    function attemptSignIn() {        
        setSubmitted(true)

        if(!email.value || !password.value) {
            return setError(true)
        }
        
        signIn()
    }

    function handleClass(val) {
        const hasError = error && submitted && !val
        const setError = hasError ? 'error' : ''

        return `inputClass ${setError}`
    }

    return (
        <div className='signin-container'>
            <input
                className={handleClass(email.value)}
                {...email}
            />
            <input
                className={handleClass(password.value)}
                {...password}
                type='password'
            />
            <button onClick={attemptSignIn}>Sign In</button>
        </div>
    )
}
