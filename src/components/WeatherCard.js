import { useEffect } from 'react';
import statusFromCode from '../service/statusFromCode';


function WeatherCard({weatherCode}) {

  return (
    <div className="card" >
      <div className="card-body">{statusFromCode(parseInt(weatherCode))}</div>
    </div>
  );
}

export default WeatherCard;
