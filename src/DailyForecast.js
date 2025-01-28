import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function search() {
    let apiKey = "441fcacb9dt020b37114da0ba3e3f5of";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="DailyForecast-info row">
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
