import React from "react";
import axios from 'axios';
import WeatherInfoService from "./WeatherInfoService";

jest.mock('./WeatherInfoService');

describe('WeatherInfoService', () => {
        test('Should mock axios', () => {

                const apiKey = process.env.REACT_APP_API_KEY;

                axios.get.mockImplementationOnce( () => Promise.resolve({ data: WeatherInfoService()}));

                const res = WeatherInfoService;
                console.log(res);
                expect(axios.get).toHaveBeenCalledWith("https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + apiKey)
                expect(res.data.response).toBe(true);
                expect(axios.get).toHaveBeenCalledTimes(1);
        })
})