import React, { useEffect, useState } from 'react';
import WeatherCard from "../components/WeatherCard";
import axios from "axios";

export const baseUrl = 'https://api.openweathermap.org/data/2.5';
export const apiKey = process.env.REACT_APP_API_KEY;

export default function WeatherInfoService() {
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);
    const [data, setData] = useState([]);

    // navigator.geolocation.getCurrentPosition(function(showPosition) {
    //     setLatitude(showPosition.coords.latitude);
    //     setLongitude(showPosition.coords.longitude);
    // });

    const London =  `${baseUrl}/weather?q=London,uk&APPID=${apiKey}`;
    const Berlin = `${baseUrl}/weather?q=Berlin, de&APPID=${apiKey}`;
    // const Current = `${baseUrl}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`;

    useEffect(() => {
        const getWeatherInformation = async () => {

            const requestLondon = axios.get(London);
            const requestBerlin = axios.get(Berlin);
            // const requestCurrent = axios.get(Current)
            try{
                await axios.all([ requestLondon, requestBerlin])
                    .then(axios.spread((...responses) => {
                        const firstResponse = responses[0]
                        const secondResponse = responses[1]
                        // const thirdResponse = responses[2]
                        // console.log(firstResponse.data,secondResponse.data);
                        setData([firstResponse.data, secondResponse.data])
                        console.log([firstResponse, secondResponse])
                    }))
            } catch(error)  {
                throw error;
            }

        };
        getWeatherInformation()
    }, []);

    return (
        <div className="App">
            <div>
                <WeatherCard weatherData={data}/>
            </div>
        </div>
    );
}