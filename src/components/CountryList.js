import { useState, Fragment } from 'react';
import WeatherCard from './WeatherCard';

const locations = [
  { country: "Germany", longitude: 13.4115, latitude: 52.5235},
  { country: "France", longitude: 2.3510, latitude: 48.8567 },
  { country: "United Kingdom", longitude: -0.1262, latitude: 51.5002 },
  { country: "Russia", longitude: 37.6176, latitude: 55.7558 },
]

function CountryList() {
  const [weatherCode, setWeatherCode] = useState(0);

  const onChange = async e => {
    let currentLocation = locations.find(location => location.country === e.target.value);

    let data = await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}&current_weather=true`)).json()
      
    console.log(data.current_weather.weathercode)
    setWeatherCode(data.current_weather.weathercode)
  }

  return (
    <Fragment>
      <div className="form-group">
        <label>Select country:</label>
        <select
          className="form-control"
          id="sel1"
          onChange={onChange}>
          {locations.map((location, i) => (
            <option key={i}>
              {location.country}
            </option>
          ))}
        </select>
      </div>
      <WeatherCard weatherCode={weatherCode} key={weatherCode}/>
    </Fragment>

  );
}

export default CountryList;


