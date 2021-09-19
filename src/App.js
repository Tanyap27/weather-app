import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeatherInfoService from "./services/WeatherInfoService";
import DetailedWeatherView from "./components/DetailedWeatherView";

export default function App() {
    return (
        <div className="App">
            <h1 style={{textAlign:"center", margin:"40px 0px 60px 0"}}>Weather Dashboard</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <WeatherInfoService/>
                    </Route>
                    <Route path="/DetailedWeatherView" exact>
                        <DetailedWeatherView />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}