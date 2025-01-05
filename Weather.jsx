import Searchbox from './Searchbox.jsx'
import Infobox from './Infobox';
import './Weather.css'
import { useState } from 'react';
export default function Weather() {
    let [weatherinfo, setweatherinfo] = useState(
        {
            city:'delhi',
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            feelslike: 24.84,
            weather: "haze",
        }
    )
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return (
        <div className='weather'>
            <h2>WehterInfo</h2>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox result={weatherinfo} />
        </div>
    )
}