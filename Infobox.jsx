import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { styled } from '@mui/material';

export default function Infobox({ result = {} }) {
    let hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let cold_url = "https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
    let rain_url = "https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.webp?a=1&b=1&s=612x612&w=0&k=20&c=5JbnjvMjP0e-eOi9OhaS6CzHR_I3UWdkZaYjDcBjL94=";
    let style={
        background: 'linear-gradient(135deg,#95a19e,#05040a)',
    color: '#fff',
    }

    return (
        <div className="infobox">

            <div className="card">
                <Card  style={style} sx={{ maxWidth: 345  }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                             result.humidity > 80 ? rain_url : result.temp > 15 ? hot_url : cold_url 
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {result.city} {result.humidity > 80 ? <ThunderstormIcon /> : result.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" component={'span'}>
                            <p>Temperature={result.temp}&deg;C</p>
                            <p>Humidity={result.humidity}</p>
                            <p>Min Temp={result.tempMin}</p>
                            <p>Max Temp={result.tempMax}</p>
                            <p>The weather can be described as <i>{result.weather} </i> and feelslike {result.feelslike}&deg;c </p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>

    )
}