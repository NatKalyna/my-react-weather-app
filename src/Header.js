import React from "react";

import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="col-4">
          <ul className="indicator">
            <li>
              💧Humidity:{" "}
              <span>
                {" "}
                {""}
                {Math.round(props.data.humidity)}
              </span>{" "}
              %
            </li>
            <li>
              💨Wind:{" "}
              <span>
                {""}
                {Math.round(props.data.wind)}
              </span>{" "}
              km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="mainTemperature">
            <span>
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </div>
          <div className="weatherIcon">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <h6>
            <FormatedDate date={props.data.date} />
          </h6>
          <h5>{props.data.description}</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
