import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeatherInfoService from "./services/WeatherInfoService";
import DetailedWeatherView from "./components/DetailedWeatherView";

export default function App() {
    return (
        // <div className="container">
        //   <h1 style={{textAlign:"center", marginTop:"30px"}}>Weather Dashboard</h1>
        //     <WeatherInfoService/>
        // </div>
        <div className="App">
            <h1 style={{textAlign:"center", marginTop:"30px"}}>Weather Dashboard</h1>
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