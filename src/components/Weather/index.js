import React, { useState } from "react";
import { api } from "../../App";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (e) => {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
  };

   
  const checkBtn = (e) => {
    if (e.key === "Enter") {
       search()
    } 
   }
   
  
  const dataBuilder = (d) => {
    const months = [
      "Janauary",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <div className="container-weather">
        <div className="weather-1">
          <p>Get World Weather Update</p>
          <h2>
            Get Weather <i class="fa-solid fa-cloud"></i>
          </h2>
        </div>

        <div
          className={
            typeof weather.main != "undefined"
              ? weather.main.temp < 20
                ? "weather"
                : "weather_hot"
              : "weather_normal"
          }
        >
          <div className="column">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Weather..."
              className={
                typeof weather.main != "undefined"
                  ? weather.main.temp < 20
                    ? "input-field"
                    : "input-field_hot"
                  : "input-field-normal"
              }
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyDown={checkBtn}
            />
            <button className="search_btn" onClick={() => search()}><i class="fa-solid fa-magnifying-glass"></i></button>
            <div className={(typeof weather.main == "undefined") ? "weather_normal_text" : "weather_normal_text_nobody"}>Search Here</div>

            {typeof weather.main != "undefined" ? (
              <>
                <div className="location_box">
                  <div className="location">
                    <h1>
                      {weather.name}, {weather.sys.country}
                    </h1>
                  </div>
                  <div className="date">
                    <h4>{dataBuilder(new Date())}</h4>
                  </div>
                </div>
                <div className="weather_box">
                  <div className="weather_w_s">{weather.weather[0].main}</div>
                  <div className="temp">
                    <p>{weather.main.temp}°C</p>
                  </div>
                  <div
                    className={
                      typeof weather.main != "undefined"
                        ? weather.main.temp < 20
                          ? "little_details"
                          : "little_details_hot"
                        : "little_details"
                    }
                  >
                    <h3>Feels Like : {weather.main.feels_like}</h3>
                    <h3>Air Pressure : {weather.wind.speed}</h3>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
