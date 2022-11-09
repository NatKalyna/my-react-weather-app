import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-4">
          <ul className="indicator">
            <li>
              💧Humidity: <span>85</span> %
            </li>
            <li>
              💨Wind: <span>18</span> km/h
            </li>
          </ul>
        </div>
        <div class="col-4">
          <div className="mainTemperature">
            <span>25</span>
            <span className="celsius">°C</span>
            <span className="separator">|</span>
            <span className="fahrenheit">°F</span>
          </div>
        </div>
        <div class="col-4">
          <h1>Poltava</h1>
          <h6>Friday 13:12</h6>
          <h5>Sunny</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
