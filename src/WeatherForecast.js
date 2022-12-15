import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }


    let apiKey = "170ed67c56f7d3751961a6f26123ed61";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); 

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Mon</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19º
              </span>
              <span className="WeatherForecast-temperature-min">10º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

