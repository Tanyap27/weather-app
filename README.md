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

# Running the App

To run the ap in development mode go into main(weather-app) folder and execute:

### npm install

Installs all the required dependencies for the project

### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.



