import React from "react";
import axios from 'axios';
import { getWeatherInformation } from "./WeatherInfoService";
import WeatherInfoService from "./WeatherInfoService";

jest.mock('axios');
axios.all = jest.fn()
axios.spread = jest.fn()

describe('WeatherInfoService', () => {
        test('Should mock axios', () => {

                const apiKey = process.env.REACT_APP_API_KEY;

                axios.get.mockImplementation( () => Promise.resolve({ data: {
                        name:'London'
                        }}));
                const res = getWeatherInformation();
                expect(axios.all).toHaveBeenCalledTimes(1);
        })
})