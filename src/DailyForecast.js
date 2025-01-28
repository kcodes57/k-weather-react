import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "441fcacb9dt020b37114da0ba3e3f5of";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="DailyForecast-info row">
        <div className="col-6">
          <div className="DailyForecast-day">Fri</div>
          <span className="DailyForecast-maxtemp">18°</span>
          <span>|</span>
          <span className="DailyForecast-mintemp">11°</span>
        </div>
        <div className="DailyForecast-icon col-6">⛅</div>
      </div>
    </div>
  );
}
