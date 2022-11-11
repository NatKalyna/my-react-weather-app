import React, { useState } from "react";

import Header from "./Header";
import axios from "axios";

function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e947cb2640f1db92e6a19005bc43b435";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
