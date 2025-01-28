import React from "react";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function formatDate() {
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
    <div className="ForecastDay">
      <div className="DailyForecast-info row">
        <div className="col-6">
          <div className="DailyForecast-day">{formatDate()}</div>
          <span className="DailyForecast-maxtemp">{maxTemp()}</span>
          <span>|</span>
          <span className="DailyForecast-mintemp">{minTemp()}</span>
        </div>
        <div className="DailyForecast-icon col-6">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.icon}
          />
        </div>
      </div>
    </div>
  );
}
