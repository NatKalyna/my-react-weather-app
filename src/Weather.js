import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherForecast from "./WeatherForecast";

function Weather() {
  return (
    <div>
      <SearchForm />
      <Header />
      <WeatherForecast />
    </div>
  );
}

export default Weather;
