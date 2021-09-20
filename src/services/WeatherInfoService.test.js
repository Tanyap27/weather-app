import React from "react";
import axios from 'axios';
import {apiKey, baseUrl, getWeatherInformation} from "./WeatherInfoService";
import WeatherInfoService from "./WeatherInfoService";
import { cleanup } from "@testing-library/react";

jest.mock('axios');

describe('WeatherInfoService', () => {

        describe('without Locations in the list', () => {
                it('should return undefined result', () => {
                        const result = getWeatherInformation();
                        expect(result).resolves.toEqual( undefined );
                });
        });

        describe('with Locations in the list', () => {

                afterAll(() => {
                        cleanup();
                        jest.clearAllMocks();
                });

                beforeAll(() => {
                        axios.get.mockClear();
                        axios.all = jest.fn();
                        axios.spread = jest.fn();
                });

                it('should call axios.all once', () => {
                        getWeatherInformation();
                        expect(axios.all).toHaveBeenCalledTimes(1);
                })

                it('should all axios.get thrice for each location', () =>{
                        getWeatherInformation();
                        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/weather?q=London,uk&units=metric&APPID=${apiKey}`)
                        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/weather?q=Berlin,de&units=metric&APPID=${apiKey}`)
                        expect(axios.get).toHaveBeenCalledTimes(3);
                })
        })
});