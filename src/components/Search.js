import React, { useState } from "react";
import { fetchWeather } from "../api/fetchWeather";
import Display from "./Display";

export default function Search() {
    
    const [city, setCity] = useState('');
    const [wth, setWth] = useState({});
    const [pending, setPending] = useState(null);
    const [err, setErr] = useState(null);

    const handleInput = (e) => {
        setCity(e.target.value);
    }

    const search = async (e) => {
        if(e.key === 'Enter') {
            setPending(true);
            await fetchWeather(city)
                .then( res => {
                    setWth(res);
                    setPending(null);
                    if (!res.main) {
                        // console.log('we return a response that is not the weather obj', res);
                        setErr('please check your internet connection');
                    }
                })
                .catch(err => {
                    if (err.message.indexOf('404') !== -1) {
                        console.log(err.message);
                        setErr('Sorry, city was not found');
                    }
                    setPending(null);
                    setTimeout(() => {
                        setErr(null);
                    }, 10000);
                });
            setCity('');
        }
    }

    return (
        <div>
            <input 
                placeholder='search...' value={ city } className='search opacity' onChange={handleInput} onKeyPress={search}
            />
            {pending && <h2 className='loading opacity'>Loading...</h2>}
            {err && <h3 className='loading opacity'>Failed: {err}</h3>}
            {wth.main && <Display wth={wth} />}
        </div>
    )

}
