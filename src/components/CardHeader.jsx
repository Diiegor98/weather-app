//Icono que acompaña al título
import titleIcon from "../../assets/nublado.png";

export default function CardHeader() {
  return (
    <div className="title-container d-flex gap-3 align-items-center justify-content-center">
      <img src={titleIcon} alt="Sol" />
      <h1 className="card-title fs-2 fw-bold">Weather app</h1>
    </div>
  );
}
