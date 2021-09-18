import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import './DetailedWeatherView.css'

function DetailedWeatherView() {
    const history = useHistory();
    const { state } = useLocation();
    return (
        <div className='detailView'>
            <div><Icon style={{fontSize: '2.9em'}} name='long arrow alternate left' onClick={() => history.goBack()}/></div>
            <h2>{state.name}</h2>
            <div style={{ float: 'left' }}>
                <p>Weather: {state.weather[0].main}</p>
                <p>Temperature: {state.main.temp}</p>
                <p>Max Temperature: {state.main.temp_max}</p>
                <p>Min Temperature: {state.main.temp_min} </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>Sunrise: {state.sys.sunrise} </p>
                <p>Sunset: {state.sys.sunset} </p>
                <p>Visibility: {state.visibility} </p>
            </div>
        </div>
    );
}
export default DetailedWeatherView