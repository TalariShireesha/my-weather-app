import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 id="appTitle" className="app-title">🌤️ My Weather App</h1>

      <Weather />
    </div>
  );
}

export default App;
