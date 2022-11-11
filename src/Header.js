import React from "react";
import FormatedDate from "./FormatedDate";

function Header(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="col-4">
          <ul className="indicator">
            <li>
              💧Humidity: <span>{props.data.humidity}</span> %
            </li>
            <li>
              💨Wind: <span>{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="mainTemperature">
            <span>{Math.round(props.data.main.temperature)}</span>
            <span className="celsius">°C</span>
            <span className="separator">|</span>
            <span className="fahrenheit">°F</span>
          </div>
          <div>
            <img src={props.data.icon} alt={props.data.description} />
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
