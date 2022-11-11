import React, { useState, useEffect } from "react";
import axios from "axios";
import FutureWeather from "./FutureWeather";

function WeatherForecast(props) {
  const [forecastLoaded, setLoadedForecast] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoadedForecast(false);
  }, [props.cityForecast]);

  function showForecast(response) {
    setForecastData(response.data.daily);
    setLoadedForecast(true);
  }

  if (forecastLoaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <FutureWeather data={forecastData[0]} />
          </div>
          <div className="col">
            <FutureWeather data={forecastData[1]} />
          </div>
          <div className="col">
            <FutureWeather data={forecastData[2]} />
          </div>
          <div className="col">
            <FutureWeather data={forecastData[3]} />
          </div>
          <div className="col">
            <FutureWeather data={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `c00b6e3e1cc217d87916a8b794f7ca77`;
    let city = props.cityForecast;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}

export default WeatherForecast;
