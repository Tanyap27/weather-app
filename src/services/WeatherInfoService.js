import React, { useEffect, useState } from 'react';
import WeatherCard from "../components/WeatherCard";

export const baseUrl = 'https://api.openweathermap.org/data/2.5';
export const apiKey = process.env.REACT_APP_API_KEY;

export default function WeatherInfoService() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getCityWeatherInfo = async (city) => {
            await fetch(`${baseUrl}/weather?q=${city}&APPID=${apiKey}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result)
                });
        }
        getCityWeatherInfo("Berlin")
    }, []);

    return (
        <div className="App">
            {(typeof data.main != 'undefined') ? (
                <WeatherCard weatherData={data}/>
            ): (
                <div></div>
            )}
        </div>
    );
}