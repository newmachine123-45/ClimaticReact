import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Material.css'



export default function Searchbox({ updateinfo }) {
    let [city, setcity] = useState('');
    let [error, seterror] = useState(false);
    let url = "https://api.openweathermap.org/data/2.5/weather";

    let key = "49318497f56a77a3bb5eb29092b3d24d"
    let getweathertinfo = async () => {
        try {
            let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
            let jsonres = await response.json();
            console.log(jsonres);
            let result = {
                city:jsonres.name,
                temp: jsonres.main.temp,
                tempMin: jsonres.main.temp_min,
                tempMax: jsonres.main.temp_max,
                humidity: jsonres.main.humidity,
                feelslike: jsonres.main.feels_like,
                weather: jsonres.weather[0].description,
            }
            console.log(result);
            return result
        }catch(err){
            throw err;
        }
  }
    let cityname = (e) => {
        setcity(e.target.value)
    }


    let handleclick = async (e) => {
       try{
        e.preventDefault();
        console.log(city);
        getweathertinfo();
        setcity('')
        let newinfo = await getweathertinfo();
        updateinfo(newinfo);
       }catch(err){
        seterror(true)
       }
    }
    return (
        <>
            <form onSubmit={handleclick}>
                <div className='material'>
                    <TextField id="cityname" label="city name" variant="outlined" required value={city} onChange={cityname} />
                    <br /><br />
                    <Button variant="outlined" onClick={handleclick}>
                        Search
                    </Button>
                </div>
                {error && <p style={{color:'red', display:'hidden'}}>No such Place exists!</p>}
            </form>

        </>
    )
}
