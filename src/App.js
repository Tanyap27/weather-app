import './App.css';
import React from "react";
import WeatherInfoService from "./services/WeatherInfoService";

export default function App() {
  return (
      <div className="container">
        <h1 style={{textAlign:"center", marginTop:"30px"}}>Weather Dashboard</h1>
          <WeatherInfoService/>
      </div>
  );
}
