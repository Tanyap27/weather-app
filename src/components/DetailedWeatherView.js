import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react'
import './DetailedWeatherView.css'

function DetailedWeatherView() {
    const history = useHistory();
    const { state } = useLocation();

    function getIconUrl(code) {
        return `http://openweathermap.org/img/wn/${code}.png`;
    }

    return (
        <div className='detailView'>
            <div className={'backIcon'}><Icon name='long arrow alternate left' onClick={() => history.goBack()}/></div>
            <Card style={{minWidth: "25vw", backgroundColor:'#D3D3D3'}}>
                <Card.Content>
                    <h3 style={{float:'left'}}>{state.name}</h3>
                    <div style={{ textAlign: 'right' }}><img src={getIconUrl(state.weather[0].icon)}  alt="Weather Icon"/></div>
                </Card.Content>
                <Card.Content style={{
                    height: "200px",
                    backgroundImage: `url(https://cdn.pixabay.com/photo/2013/11/28/10/38/blue-220114_1280.jpg)`,// TODO: use image from local storage
                    backgroundSize: "cover"
                }}>
                    <Card.Meta style={{ float: 'left', color: 'white' }}>
                        <p>Temperature: {state.main.temp} &deg;C</p>
                        <p>Weather: {state.weather[0].main}</p>
                        <p>Max Temperature: {state.main.temp_max}</p>
                        <p>Min Temperature: {state.main.temp_min} </p>
                    </Card.Meta>
                    <Card.Meta style={{textAlign: 'right', color: 'white'}}>
                        <p>Sunrise: {state.sys.sunrise} </p>
                        <p>Sunset: {state.sys.sunset} </p>
                        <p>Visibility: {state.visibility} </p>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui bottom attached button">
                        <Button name='long arrow alternate left' onClick={() => history.goBack()}>Weather Dashboard</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}
export default DetailedWeatherView