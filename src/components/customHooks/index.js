import { useState } from 'react';

export function useUpdateField(initVal, cb = null) {
    const [value, setVal] = useState(initVal)
    const handleChange = e => {
        e.stopPropagation()
        e.preventDefault()
        setVal(e.target.value)
        if (cb) cb(e)
    }

    return {
        value,
        onChange: handleChange,
    }
}