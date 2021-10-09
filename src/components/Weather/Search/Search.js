import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from '../Card/Card';
import UIContainer from '../../UI/Container/Container';
import './Search.css'
import WeatherPlaylist from '../Playlist/Playlist';
export default function WeatherSearch() {
    const [weather, setWeather] = useState(null);
    const [search, setSearch] = useState("");
    const [isFecth, setIsFecth] = useState(false);
    console.log(search);
    const APIkey = process.env.REACT_APP_APIKEY;
    useEffect(()=>{        
    },[])
    function searchCity(search){
        setIsFecth(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=metric&lang=pt`)
        .then(res=>{
            console.log(res.data);
            setWeather(res.data);
        }).catch(err=> console.log(err))
        setIsFecth(false);
        setSearch('');
    }
    return (
        <>
        <UIContainer>
            <h1 className="weather-search__title">PREVISÃO DO TEMPO</h1>
            <div className="weather-search__input">
        <input type="text"placeholder="Buscar Cidade..." value={search} className="weather-search__input-input" onChange={(ev)=>setSearch(ev.target.value)}/>
        <button type="submit" onClick={()=>searchCity(search)} className="weather-search__input-button"><i class="fas fa-search"></i></button>
        </div>
        {!isFecth && weather && (
        <WeatherCard weather={weather} isFecth={isFecth}/>)}
        </UIContainer>
        {!isFecth && weather && (
            <WeatherPlaylist weather={weather} isFecth={isFecth}/>)}
        </>
    )
}
