/* Estilos CSS */
import "./app.css";

/* Hook */
import { useState } from "react";

/* Components */
import CardHeader from "./components/CardHeader";
import CardForm from "./components/CardForm";
import CardWeather from "./components/CardWeather";

function App() {

  //dataWeather contiene el clima del fetch
  const [dataWeather, setDataWeather] = useState(null);

  //Si todavia no hay data muestra un loading
  const [loading, setLoading] = useState(false);

  return (
    <main className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <CardHeader />
          <CardForm setDataWeather={setDataWeather} setLoading={setLoading} />
          <CardWeather dataWeather={dataWeather} loading={loading} />
        </div>
      </div>
    </main>
  );
}

export default App;
