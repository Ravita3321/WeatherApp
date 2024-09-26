import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
  let [city,setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f20eb4557222c8adc3d5b8508a0dd54b";

 let getWeatherInfo = async () => {
  let responce = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  let jsonResponce = await responce.json();
  // console.log(jsonResponce);
  let result = {
    city: city,
    temp: jsonResponce.main.temp,
    tempMin: jsonResponce.main.temp,
    tempMax: jsonResponce.main.temp_max,
    humidity: jsonResponce.main.humidity,
    feelslike: jsonResponce.main.feels_like,
    weather: jsonResponce.weather[0].description,
  };
  console.log(result);
  return result;
 };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

 let handleSubmit = async (evt) => {
  evt.preventDefault();
  console.log(city);
  setCity("");
  let newInfo = await getWeatherInfo();
  updateInfo(newInfo);
};

    return (
    <div className='SearchBox'>
<form onSubmit={handleSubmit}>
<TextField
 id="city"
  label="city name" 
  variant="outlined" 
  required 
  value={city} 
  onChange={handleChange}
  />
<br></br><br></br>
<Button variant="contained" type="submit">
        Search
      </Button>
      </form>
    </div>
    );
}