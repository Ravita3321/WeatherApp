import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


    export default function InfoBox({ info }) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  

    return(<div className="InfoBox">
       <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
         <p>Temprature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp ={info.tempMax}&deg;C</p>
         <p> 
            The weather can be described as <i>{info.weather}</i> feels like
             {info.feelslike}&deg;C
             </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}
