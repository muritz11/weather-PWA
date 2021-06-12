import React, { useState } from "react";

export default function Search() {
    
    const [city, setCity] = useState('');

    const handleInput = (e) => {
        setCity(e.target.value);
    }

    return (
        <div>
            <input 
            placeholder='search...'
            value={ city }
            className='search opacity'
            />
        </div>
    )

}