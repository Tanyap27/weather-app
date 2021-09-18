import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function WeatherCard({weatherData}) {

     function getIconUrl(code) {
        return `http://openweathermap.org/img/wn/${code}.png`;
    }

    return (
        <div>
            <Card.Group>
                {weatherData.map((weatherInfo) => ((typeof weatherInfo.main != 'undefined') ? (
                    <Card key={weatherInfo.id}>
                        <Card.Content>
                            <Card.Header className="header">{weatherInfo.name}</Card.Header>
                            <Card.Description>
                                    <p style={{ float: 'left' }}>Temperature: {weatherInfo.main.temp}</p>
                                    <div style={{ textAlign: 'right' }}><img src={getIconUrl(weatherInfo.weather[0].icon)}  alt="Weather Icon"/></div>
                            </Card.Description>
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