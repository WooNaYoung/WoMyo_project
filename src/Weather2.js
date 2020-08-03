import React, { useState } from "react";

const api = {
  key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
  base: "http://api.openweathermap.org/data/2.5/",
};

const Weather2 = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(weather);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
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
    let days = [
      "Sunday",
      "monday",
      "Tuesday",
      "Wednesday",
      "Tursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${year} ${month} ${date} ${day}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "appwarm"
            : "app"
          : "app"
      }
    >
      <div className="top margin">
        <button>KR</button>
        <button>EN</button>
      </div>
      <div className="search-box">
        {/* <input
          type="text"
          placeholder="나라를 입력하세요"
          className="search-bar search-bar-1"
        /> */}

        {/* <input
          type="text"
          placeholder="추천 코디를 알고 싶은 나라 이름, 혹은 도시명을 입력하세요"
          className="search-bar search-bar-2"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        /> */}
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box margin">
            <div className="location">
              {weather.name},{weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box margin">
            <div className="tem">{Math.round(weather.main.temp - 273.15)}℃</div>
          </div>

          <div className="weather margin">{weather.weather[0].main}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather2;
