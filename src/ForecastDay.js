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

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="DailyForecast-info row">
        <div>
          <div className="DailyForecast-day">{formatDate()}</div>
          <span className="DailyForecast-maxtemp">{maxTemp()}</span>
          <span>|</span>
          <span className="DailyForecast-mintemp">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
