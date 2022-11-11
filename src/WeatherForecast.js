import React from "react";

import FutureWeather from "./FutureWeather";

import "./WeatherForecast.css";

function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div class="col">
          <FutureWeather
            day="Saturday"
            icon="🌞"
            daytemperature={28}
            nighttemperature={14}
          />
        </div>
        <div class="col">
          <FutureWeather
            day="Sunday"
            icon="🌞"
            daytemperature={25}
            nighttemperature={13}
          />
        </div>
        <div class="col">
          <FutureWeather
            day="Monday"
            icon="🌤"
            daytemperature={29}
            nighttemperature={17}
          />
        </div>
        <div class="col">
          <FutureWeather
            day="Tuesday"
            icon="🌦"
            daytemperature={32}
            nighttemperature={18}
          />
        </div>
        <div class="col">
          <FutureWeather
            day="Wednesday"
            icon="⛈"
            daytemperature={33}
            nighttemperature={19}
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
