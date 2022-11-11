import React, { useState } from "react";

import Header from "./Header";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconurl: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "c00b6e3e1cc217d87916a8b794f7ca77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter your city"
                  id="city-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                  id="search-button"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Current"
                  className="btn btn-success w-100"
                  id="current-button"
                />
              </div>
            </div>
          </div>
        </form>
        <Header data={weather} />
        <WeatherForecast cityForecast={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
