import React, { useContext } from 'react';

import LoadingContext from '../context/LoadingContext';
import Loader from './Loader';

const Button = ({
    text = 'Submit',
    handleClick = () => {}
}) => {
    const loading = useContext(LoadingContext);
    const buttonDisplay = !loading ? text : <Loader />;

    return (
        <button onClick={handleClick} >
            {buttonDisplay}
        </button>
    )
}

export default Button;