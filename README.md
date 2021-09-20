# React Weather App

This is a React javascript App that shows weather of current user location, Berlin, and London.
This app is based on:

- React Javascript
- React Hooks
- Async Communication
- Styling with semantic-ui react framework

The app has two pages:
- Weather Dashboard page to display the three locations with name and temperature
- Weather Details page to show more detailed weather information for each location

## Dependencies

Clone the github repo to your machine using
```git clone https://github.com/Tanyap27/weather-app```

The app uses [Open Weather](https://openweathermap.org/) for the data and
**the user will need to register** and generate a free API Key(which might take 15-30 minutes to be active).
Once the key is generated, create a .env file and add an environment variable called
`REACT_APP_OPEN_WEATHER_API_KEY` to the key. This is built into the app and used with
requests.

## Running the App

To run the ap in development mode go into main(weather-app) folder and execute:

### npm install

Installs all the required dependencies for the project

### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

## Weather App Description

Index.js is the entry point for the app, which imports the App.js
WeatherCard component is imported in App.js along with Router support.

### Sub components

The weather app is divided into following parts:

- services
    This includes the logic to call the openweathermap api using the private API key for 3 different locations:Current, Berlin, London.
    The current location is extracted using the geolocation service(it gets the browser location and returns the co-ordinates of the user)
    This service also handles the error conditions and uses react hooks such useState and useEffect to manage state.

- components
    This includes WeatherCard and DetailedWeatherView components.
    The WeatherCard component displays the basic information for the locations such as the name and temperature(displayed in Celsius) in a card component.
    The DetailedWeatherView component displays the detailed information of each location in a card component.

