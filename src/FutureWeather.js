import React from "react";

function FutureWeather(props) {
  return (
    <div className="future-weather">
      <ul>
        <li className="day-week">{props.day}</li>
        <li className="icon">{props.icon}</li>
        <li>
          <strong>{props.daytemperature}℃</strong>
        </li>
        <li>{props.nighttemperature}℃</li>
      </ul>
    </div>
  );
}
export default FutureWeather;
