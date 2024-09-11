//Hooks
import { useState } from "react";

export default function CardForm({ setDataWeather, setLoading }) {
  //Credenciales API
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "57a3fc09fa634a2c97cf2e48419162a1";

  //City contiene la ciudad que es buscada en el input
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  //Input controlado
  const handleSearchCity = (e) => {
    setCity(e.target.value);
  };

  //Fetch a la ciudad al hacer submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    if (!city || city.trim().length === 0) {
      setError("Empty city is not valid");
      setDataWeather(null);
      return;
    }

    if (city.length > 0) {
      fetchWeather();
    }

    setCity("");
  };

  //Fetch a la API
  const fetchWeather = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);

      if (!response.ok) {
        throw new Error(`City not found`);
      }

      const data = await response.json();

      setError("");
      setDataWeather(data);
    } catch (error) {
      setDataWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-form my-3">
      <form
        onSubmit={handleSearchSubmit}
        className="d-flex justify-content-between align-items-center gap-2"
      >
        <input
          type="text"
          placeholder="Enter a city name"
          value={city}
          onChange={handleSearchCity}
          className="form-control"
        />
        <button type="submit" className="btn btn-dark">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {error && (
        <p className="alert alert-danger text-center p-2 mt-2">{error}</p>
      )}
    </div>
  );
}
