import React from "react";

function FutureWeather(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="future-weather">
      <ul>
        <li className="day-week">{day()}</li>
        <li className="icon">
          <img src={props.data.condition.icon_url} alt={props.data.icon} />
        </li>
        <li>
          <strong>{Math.round(props.data.temperature.maximum)}℃</strong>
        </li>
        <li>{Math.round(props.data.temperature.minimum)}℃</li>
      </ul>
    </div>
  );
}
export default FutureWeather;
