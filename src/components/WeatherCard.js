import React from 'react';
import { Card } from 'semantic-ui-react'

export default function WeatherCard({weatherData}) {
    return (
        <Card.Group>
            {weatherData.map((weatherInfo) => (
                <Card key={weatherInfo.id}>
                    <Card.Content>
                        <Card.Header className="header">{weatherInfo.name}</Card.Header>
                        <Card.Description>
                            Temperature: {weatherInfo.main.temp} <br/>
                            Max Temperature: {weatherInfo.main.temp_max} <br/>
                            Min Temperature: {weatherInfo.main.temp_min} <br/>
                            Sunrise: {weatherInfo.sys.sunrise} <br/>
                            Sunset: {weatherInfo.sys.sunset} <br/>
                            Visibility: {weatherInfo.visibility} <br/>
                            Weather: {weatherInfo.weather[0].description} <br/>
                        </Card.Description>
                        <div className="ui bottom attached button">
                            <button className="ui button" onClick={(console.log('clicked'))}>Weather Detail</button>
                        </div>
                    </Card.Content>
                </Card>
            ))}

        </Card.Group>
    )
}
