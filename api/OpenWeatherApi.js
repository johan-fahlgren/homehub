import React from "react";

const apiKey = process.env.REACT_APP_OPEN_WEATHER;

console.log(apiKey);

const weatherUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=60.5217788&lon=15.7447501&exclude=hourly,daily&appid={'${}'}";

/* async fetchWeatherData(weatherUrl){
    let weatherData = await fetch(weatherUrl).then((responce) => {
        if(responce.ok){
            return responce.json();
        }else{
            throw "Something went wrong, status: " + response.status;
        }
    })
}; */
