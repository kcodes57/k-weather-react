import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
      <div className="Container">
        <h1>London</h1>
        <h3>Monday, 20th September</h3>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          alt="cloudy"
        />
        <div className="row">
          <ul className="Weather-type col-7">
            <li className="Temp">
              4 <span className="Unit">°C</span>
            </li>
          </ul>
          <ul className="col-5">
            {" "}
            <li>overcast clouds</li>
            <li>
              humidity: <strong>87%</strong>
            </li>
            <li>
              wind: <strong>3.5 km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
