import style from "./FormPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments } from "../../redux/actions";

function FormPage() {
  const temperaments = useSelector((state) => state.temperaments);
  const [newDog, setNewDog] = useState({
    name: "",
    minHeight: 0,
    maxHeight: 0,
    // height: "",
    minWeight: 0,
    maxWeight: 0,
    // weight: "",
    minLife_span: 0,
    maxLife_span: 0,
    // life_span: "",
    image: "",
    temperaments: [],
  });

  const dog = {
    name: newDog.name,
    height: `${newDog.minHeight} - ${newDog.maxHeight}`,
    weight: `${newDog.minWeight} - ${newDog.maxWeight}`,
    life_span: `${newDog.minLife_span} - ${newDog.maxLife_span}`,
    image: newDog.image,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
    console.log(newDog); //BORRAR
    console.log("Dog: ", dog); //BORRAR
  }, [dispatch, newDog]);

  const handleInputChange = (ev) => {
    setNewDog({ ...newDog, [ev.target.name]: ev.target.value });
  };

  const handleSelectChange = (ev) => {
    setNewDog({ ...newDog, temperaments: [...temperaments, ev.target.id] });
  };

  const onClickHandlerBtnVolver = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>SOY FORM PAGE</h1>
      <div className={style.image}></div>
      <div>
        {/* Nombre. Altura (diferenciar entre altura mínima y máxima de la raza).
        Peso (diferenciar entre peso mínimo y máximo de la raza). Años de vida.
        Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
        Botón para crear la nueva raza. */}
        <form>
          <label htmlFor="name">NOMBRE: </label>
          <input type="text" name="name" onChange={handleInputChange} />

          <label>ALTURA: </label>
          <label htmlFor="minHeight">Min.: </label>
          <input type="number" name="minHeight" onChange={handleInputChange} />
          <label htmlFor="maxHeight">Máx.: </label>
          <input type="number" name="maxHeight" onChange={handleInputChange} />

          <label>PESO: </label>
          <label htmlFor="minWeight">Min.: </label>
          <input type="number" name="minWeight" onChange={handleInputChange} />
          <label htmlFor="maxWeight">Máx.: </label>
          <input type="number" name="maxWeight" onChange={handleInputChange} />

          <label>ESPECTATIVA DE VIDA: </label>
          <label htmlFor="minLife_span">Min.: </label>
          <input
            type="number"
            name="minLife_span"
            onChange={handleInputChange}
          />
          <label htmlFor="maxLife_span">Máx.: </label>
          <input
            type="number"
            name="maxLife_span"
            onChange={handleInputChange}
          />

          <label htmlFor="image">IMAGEN(URL): </label>
          <input type="url" name="image" onChange={handleInputChange} />

          <label htmlFor="selecTemperaments">Temperamentos: </label>
          <select name="selecTemperaments" id="" defaultValue={"default"}>
            <option value="default">--seleccione--</option>
            {temperaments?.map((temp) => (
              <option
                key={temp.id}
                value={temp.id}
                onSelect={handleSelectChange} // NO, NO, NO!!
              >
                {temp.name}
              </option>
            ))}
          </select>
          <button>CREAR!</button>
        </form>
      </div>
      <button onClick={onClickHandlerBtnVolver}>VOLVER</button>
    </div>
  );
}

export default FormPage;
