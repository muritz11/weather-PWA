import React, { useState } from "react";
import { fetchWeather } from "../api/fetchWeather";
import Display from "./Display";

export default function Search() {
    
    const [city, setCity] = useState('');
    const [wth, setWth] = useState({});

    const handleInput = (e) => {
        setCity(e.target.value);
    }

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(city);
            // console.log(data);

            setWth(data);
            setCity('');
        }
    }

    return (
        <div>
            <input 
                placeholder='search...' value={ city } className='search opacity' onChange={handleInput} onKeyPress={search}
            />
            {wth.main && <Display wth={wth} />}
        </div>
    )

}