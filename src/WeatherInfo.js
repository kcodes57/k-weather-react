import React from "react";
import "./Weather.css";

import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1 className="City">{props.data.city}</h1>
      <p className="Country">{props.data.country}</p>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <img
        src={props.data.iconUrl}
        alt={props.data.description}
        className="currentWeatherIcon"
      />
      <div className="row">
        <ul className="Weather-type col-7">
          <WeatherTemperature celsius={props.data.temperature} />
        </ul>
        <ul className="col-5">
          {" "}
          <li>{props.data.description}</li>
          <li>
            humidity: <strong>{props.data.humidity}</strong>
          </li>
          <li>
            wind: <strong>{props.data.wind} km/h</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
