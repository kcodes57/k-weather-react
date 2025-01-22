import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.description.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  let city = "London";
  let apiKey = "441fcacb9dt020b37114da0ba3e3f5of";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
        <div className="Container">
          <h1>London</h1>
          <h3>Monday, 20th September</h3>
          <img src={weatherData.icon} alt={weatherData.description} />
          <div className="row">
            <ul className="Weather-type col-7">
              <li className="Temp">
                {weatherData.temperature} <span className="Unit">°C</span>
              </li>
            </ul>
            <ul className="col-5">
              {" "}
              <li>{weatherData.description}</li>
              <li>
                humidity: <strong>{weatherData.humidity}%</strong>
              </li>
              <li>
                wind: <strong>{weatherData.wind} km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
