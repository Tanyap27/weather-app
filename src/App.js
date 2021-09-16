import './App.css';
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
      <div className="container">
        <h1 style={{textAlign:"center", marginTop:"30px"}}>Weather Dashboard</h1>
          <WeatherCard/>
      </div>
  );
}

export default App;
