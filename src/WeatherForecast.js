import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setloaded] = useState(false);
    let [forecast, setforecast] = useState(null);

    function handleResponse(response){
        setforecast(response.data.daily);
        setloaded(true);
    }

    if (loaded) {
        return (
          <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[0]} />
              </div>
            </div>
          </div>
        );
    } else {
        let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}

