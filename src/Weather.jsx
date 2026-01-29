import { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [coords, setCoords] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // ✅ change title color based on weather
  const updateTitleColor = (condition) => {
    const title = document.getElementById("appTitle");
    if (!title) return;

    title.classList.remove("sunny", "cloudy", "rainy", "snowy");

    if (condition === "Clear") title.classList.add("sunny");
    else if (condition === "Clouds") title.classList.add("cloudy");
    else if (condition === "Rain" || condition === "Drizzle")
      title.classList.add("rainy");
    else if (condition === "Snow") title.classList.add("snowy");
  };

  const fetchByCity = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
      setCoords(null);

      // 🔥 THIS LINE updates title color
      updateTitleColor(data.weather[0].main);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchByLocation = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("Location error");

      const data = await res.json();
      setWeather(data);

      // 🔥 THIS LINE updates title color
      updateTitleColor(data.weather[0].main);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔑 refetch when unit changes
  useEffect(() => {
    if (weather && city) {
      fetchByCity(city);
    }
    if (weather && coords) {
      fetchByLocation(coords.lat, coords.lon);
    }
  }, [unit]);

  const getWeatherByCity = () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    fetchByCity(city);
  };

  const getWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lon: longitude });
        fetchByLocation(latitude, longitude);
      },
      () => setError("Location permission denied")
    );
  };

  return (
    <div className="weather-card">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <div className="buttons">
        <button onClick={getWeatherByCity}>Get Weather</button>

        <button
          className="toggle"
          onClick={() =>
            setUnit(unit === "metric" ? "imperial" : "metric")
          }
        >
          {unit === "metric" ? "°F" : "°C"}
        </button>
      </div>

      <button
        style={{ marginTop: "10px", width: "100%" }}
        onClick={getWeatherByLocation}
      >
        📍 Use Current Location
      </button>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="result">
          <h3>{weather.name}</h3>
          <p>
            🌡️ {weather.main.temp}°
            {unit === "metric" ? "C" : "F"}
          </p>
          <p>☁️ {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
