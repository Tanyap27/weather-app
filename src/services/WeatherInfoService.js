import React, { useEffect, useState } from 'react';
import WeatherCard from "../components/WeatherCard";
import axios from "axios";

export const baseUrl = 'https://api.openweathermap.org/data/2.5';
export const apiKey = process.env.REACT_APP_API_KEY;

if (apiKey === undefined) {
    throw new Error('No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY')
}

export const getWeatherInformation = async (lat, long) => {

    const London =  `${baseUrl}/weather?q=London,uk&units=metric&APPID=${apiKey}`;
    const Berlin = `${baseUrl}/weather?q=Berlin,de&units=metric&APPID=${apiKey}`;
    const Current = `${baseUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`;

    const requestLondon = axios.get(London);
    const requestBerlin = axios.get(Berlin);
    const requestCurrent = axios.get(Current)

    try{
        const response = await axios.all([requestBerlin, requestLondon, requestCurrent])
            .then(axios.spread((...responses) => {
                const firstResponse = responses[0]
                const secondResponse = responses[1]
                const thirdResponse = responses[2]
                console.log(firstResponse)
                return ([firstResponse.data, secondResponse.data, thirdResponse.data])
            }))
        return response;
    } catch(error)  {
        throw error;
    }
};

export default function WeatherInfoService() {
    const [data, setData] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const getNavigation = () =>{
        navigator.geolocation.getCurrentPosition(function(Position) {
            setLat(Position.coords.latitude);
            setLong(Position.coords.longitude);
        }, function (e) {
            console.error("Error Code");
        },{
            enableHighAccuracy: true, maximumAge:15000, timeout: 10000
        });
    }

    useEffect(() => {
        async function fetchMyAPI() {
           const getInfo =  await getWeatherInformation(lat, long)
            setData(getInfo)
        }
        fetchMyAPI()
    }, [lat, long]);

    useEffect(() => {
        getNavigation()
    },[]);

    return (
        <div className="App">
            <div>
                <WeatherCard weatherData={data}/>
            </div>
        </div>
    );
}