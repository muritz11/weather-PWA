import React from "react";

export default function Dislay({wth}) {
    
    return (
        <div className='display opacity'>
            <h3>{wth.name}<sup className='country'><small>{wth.sys.country}</small></sup></h3>
            <br />
            <h1>{Math.round(wth.main.temp)}<sup><small>&deg;C</small></sup></h1>
            <br />
            <div className='info'>
                <img className='city-icon' src={`https://openweathermap.org/img/wn/${wth.weather[0].icon}@2x.png`} alt={wth.weather[0].description} />
                <p>{wth.weather[0].description}</p>
            </div>
        </div>
    )

}