import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from '../Card/Card';
import UIContainer from '../../UI/Container/Container';
import './Search.css'
export default function WeatherSearch() {
    const [weather, setWeather] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(()=>{
        const APIkey = process.env.REACT_APP_APIKEY;
        const cityname = 'rio de janeiro'
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric&lang=pt`)
        .then(res=>{
            console.log(res.data);
            setWeather(res.data)
        }).catch(err=> console.log(err))
    },[])
    return (
        <UIContainer>
            <h1 className="weather-search__title">PREVISÃO DO TEMPO</h1>
            <div className="weather-search__input">
        <input type="search"placeholder="Buscar Cidade..." className="weather-search__input-input"/>
        <button type="submit" className="weather-search__input-button"><i class="fas fa-search"></i></button>
        </div>
        <WeatherCard weather={weather}/>
        </UIContainer>
    )
}
