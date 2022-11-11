import React from "react";

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Poltava" />
      <div className="footer">
        <a
          href="https://github.com/NatKalyna/my-react-weather-app"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Natalia Kalenska 💙💛
      </div>
    </div>
  );
}

export default App;
