// import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();

  const onClickHandlerBtnVolver = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>SOY FORM PAGE</h1>
      image, name, height, weight, life_span, temperaments,
      <form>
        <label htmlFor="">NOMBRE</label>
        <input type="text" />
        <label htmlFor="">ALTURA</label>
        <input type="text" />
        <label htmlFor="">PESO</label>
        <input type="text" />
        <label htmlFor="">ESPECTATIVA DE VIDA</label>
        <input type="text" />
        <label htmlFor="">IMAGEN(URL)</label>
        <input type="text" />
      </form>
      <button onClick={onClickHandlerBtnVolver}>VOLVER</button>
    </div>
  );
}

export default FormPage;
