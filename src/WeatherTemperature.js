import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  let celsiusTemperature = Math.round(props.celsius);
  let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    celsiusTemperature = Math.round(props.celsius);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <ul>
          <li className="Temp">{celsiusTemperature} </li>

          <span className="Unit">
            <a href="/" onClick={showCelsius} className=" Unit">
              <button className="unitButton">°C</button>
            </a>
          </span>
          <span className="Unit">
            <a href="/" onClick={showFahrenheit} className=" Unit">
              <button className="unitButton">°F</button>
            </a>
          </span>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <ul>
          <li className="Temp">{fahrenheitTemperature} </li>

          <span className="Unit">
            <a href="/" onClick={showCelsius} className=" Unit">
              <button className="unitButton">°C</button>
            </a>
          </span>
          <span className="Unit">
            <a href="/" onClick={showFahrenheit} className=" Unit">
              <button className="unitButton">°F</button>
            </a>
          </span>
        </ul>
      </div>
    );
  }
}
