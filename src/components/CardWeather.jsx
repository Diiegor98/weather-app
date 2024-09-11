//Imagen default cuando no se buscó nada
import defaultCloud from "../../assets/default-clouds.png";

export default function CardWeather({ dataWeather, loading }) {
  return (
    <div className="card-data mt-4 d-flex justify-content-around">
      {loading ? (
        <div className="spinner-container">
          <span className="spinner-border spinner-border-lg"></span>
        </div>
      ) : dataWeather ? (
        <>
          <div className="data-container d-flex flex-column">
            <span className="fs-4">{dataWeather.name}</span>
            <span className="fs-2 fw-bold">
              {(dataWeather?.main?.temp - 273.15).toFixed(0)}°C
            </span>
            <span className="">{dataWeather?.weather[0]?.description}</span>
          </div>
          <div className="data-image">
            <img
              src={`https://openweathermap.org/img/wn/${dataWeather?.weather[0]?.icon}@2x.png`}
              alt="Icono clima"
            />
          </div>
        </>
      ) : (
        <img className="w-50" src={defaultCloud} alt="Nubes animadas" />
      )}
    </div>
  );
}
