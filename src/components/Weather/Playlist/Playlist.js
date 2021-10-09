import React from 'react'

export default function WeatherPlaylist({weather}) {
    const temp= weather.main.temp;
    if(temp > 32){
        return <div>Esta tocando rock</div>
    }
    if(temp < 32 && temp > 24){
        return <div>Esta tocando pop</div>
    }
    if(temp < 24 && temp > 16){
        return <div>Esta tocando classica</div>
    }
    if(temp < 16){
        return <div>Esta tocando lofi</div>
    }
    return (
        <div>
            eldsdlsdkkldsldksdkldksldk
        </div>
    )
}
