import React, { useEffect, useState } from 'react';
import WeatherCard from "../components/WeatherCard";
import axios from "axios";

export const baseUrl = 'https://api.openweathermap.org/data/2.5';
export const apiKey = process.env.REACT_APP_API_KEY;

export default function WeatherInfoService() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getWeatherInformation = async () => {
            const London =  `${baseUrl}/weather?q=London,uk&APPID=${apiKey}`;
            const Berlin = `${baseUrl}/weather?q=Berlin, de&APPID=${apiKey}`;
            const Current = `${baseUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`;

            navigator.geolocation.getCurrentPosition(function(Position) {
                setLat(Position.coords.latitude);
                setLong(Position.coords.longitude);
            }, function (e) {
                console.error("Error Code");
                },{
                enableHighAccuracy: true, maximumAge:15000, timeout: 30000
            });

            const requestLondon = axios.get(London);
            const requestBerlin = axios.get(Berlin);
            const requestCurrent = axios.get(Current)
            try{
                await axios.all([requestCurrent, requestLondon, requestBerlin])
                    .then(axios.spread((...responses) => {
                        const firstResponse = responses[0]
                        const secondResponse = responses[1]
                        const thirdResponse = responses[2]
                        setData([firstResponse.data, secondResponse.data, thirdResponse.data])
                    }))
            } catch(error)  {
                throw error;
            }
        };
        // setTimeout(getWeatherInformation, 10000);
        getWeatherInformation()
    }, [lat, long]);

    return (
        <div className="App">
            <div>
                <WeatherCard weatherData={data}/>
            </div>
        </div>
    );
}