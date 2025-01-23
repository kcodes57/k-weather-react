import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <img src={props.data.icon} alt={props.data.description} />
      <div className="row">
        <ul className="Weather-type col-7">
          <li className="Temp">
            {Math.round(props.data.temperature)}{" "}
            <span className="Unit">°C</span>
          </li>
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
