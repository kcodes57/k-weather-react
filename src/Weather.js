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
        <div className="row">
          <ul className="col-9">
            <li>Monday, September 20</li>
            <li>4°C</li>
            <li>overcast clouds</li>
          </ul>
          <ul className="col-3">
            <li>humidity: 87%</li>
            <li>wind: 2.57 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
