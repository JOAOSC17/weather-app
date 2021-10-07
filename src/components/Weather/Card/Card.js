import React from 'react'
import './Card.css'
export default function WeatherCard({weather}) {
    if(!weather) return <div>Carregando..</div>
    return (
        <div className="weather-card">
            <span className="weather-card__glassphormism">{weather.name}</span>
            <div className="weather-card__info">
            <h1 className="weather-card__info-title">{weather.name}</h1>
            <p className="weather-card__info-temp">{weather.main.temp.toFixed(1)} C°</p>
            </div>
        </div>
    )
}
