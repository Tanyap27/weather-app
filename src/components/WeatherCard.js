import React from 'react';
import { Card, Button, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function WeatherCard({weatherData}) {

     function getIconUrl(code) {
        return `http://openweathermap.org/img/wn/${code}.png`;
    }

    return (
        <div>
            <Header as={'h1'} style={{textAlign:"center", margin:"4vh 0 7vh 0"}}>Weather Dashboard</Header>
            <Card.Group style={{paddingLeft:'23.5vw'}}>
                {weatherData.map((weatherInfo) => ((typeof weatherInfo.main != 'undefined') ? (
                    <Card key={weatherInfo.id} style={{backgroundColor:'#D3D3D3'}}>
                        <Card.Content>
                            <h3 style={{float:'left'}}>{weatherInfo.name}</h3>
                            <div style={{ textAlign: 'right' }}><img src={getIconUrl(weatherInfo.weather[0].icon)}  alt="Weather Icon"/></div>
                        </Card.Content>
                        <Card.Content style={{
                            height: "200px",
                            backgroundImage: `url(https://cdn.pixabay.com/photo/2013/11/28/10/38/blue-220114_1280.jpg)`,// TODO: use image from local storage
                            backgroundSize: "cover",
                        }}>
                            <Card.Description>
                                    <h3 style={{ float: 'left', color:'white' }}>{weatherInfo.main.temp} &deg;C</h3>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui bottom attached button">
                                <Link
                                    to={{
                                        pathname: '/DetailedWeatherView',
                                        state: weatherInfo
                                    }}
                                ><Button>Weather Detail</Button></Link>
                            </div>
                        </Card.Content>
                    </Card>
                        ) :
                    ( <div></div> )
                ))}
            </Card.Group>
        </div>
    )
}