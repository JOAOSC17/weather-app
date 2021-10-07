import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from '../Card/Card';
export default function WeatherSearch() {
    const [weather, setWeather] = useState(null)
    useEffect(()=>{
        const APIkey = process.env.REACT_APP_APIKEY;
        const cityname = 'dublin'
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${APIkey}`)
        .then(res=>{
            console.log(res.data);
            setWeather(res.data)
        }).catch(err=> console.log(err))
    },[])
    return (
        <WeatherCard weather={weather}/>
    )
}
