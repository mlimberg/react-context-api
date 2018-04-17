import React from 'react';

const SignIn = ({ signIn }) => {
  return (
    <div className='signin-container'>
      <button onClick={ signIn }>Sign In</button>
    </div>
  )
}

export default SignIn;