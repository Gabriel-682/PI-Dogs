import style from "./FormPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments, postDog } from "../../redux/actions";

function FormPage() {
  const temperamentsState = useSelector((state) => state.temperaments);
  const newDataBaseDog = useSelector((state) => state.newDataBaseDog);
  const [newDogInput, setNewDogInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    image: "",
    temperaments: [],
  });

  const newDog = {
    name: newDogInput.name,
    height: `${newDogInput.minHeight} - ${newDogInput.maxHeight}`,
    weight: `${newDogInput.minWeight} - ${newDogInput.maxWeight}`,
    life_span: `${newDogInput.minLife_span} - ${newDogInput.maxLife_span}`,
    image: newDogInput.image,
    temperaments: newDogInput.temperaments,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]); //BORRAR TODO ESTE USEEFFECT

  const handleInputChange = (ev) => {
    setNewDogInput({ ...newDogInput, [ev.target.name]: ev.target.value });
  };

  const handleSelectChange = (ev) => {
    setNewDogInput({
      ...newDogInput,
      temperaments: [...newDogInput.temperaments, Number(ev.target.value)],
    });
  };

  const deleteTemperament = (ev, tempId) => {
    ev.preventDefault();
    setNewDogInput({
      ...newDogInput,
      temperaments: newDogInput.temperaments.filter((temp) => temp !== tempId),
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(postDog(newDog));
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
        <form onSubmit={handleSubmit}>
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
          <select
            name="selecTemperaments"
            defaultValue={"default"}
            onChange={handleSelectChange}
          >
            <option value="default" disabled>
              --seleccione--
            </option>
            {temperamentsState?.map((temp) => {
              return (
                <option key={temp.id} value={temp.id}>
                  {temp.name}
                </option>
              );
            })}
          </select>
          <div>
            {newDogInput.temperaments.length
              ? newDogInput.temperaments.map((temp) => (
                  <div key={temp}>
                    <div>
                      {temperamentsState.find((el) => el.id === temp).name}
                    </div>
                    <button onClick={(ev) => deleteTemperament(ev, temp)}>
                      X
                    </button>
                  </div>
                ))
              : null}
          </div>
          <button type="submit">CREAR!</button>
        </form>
      </div>
      <button onClick={onClickHandlerBtnVolver}>VOLVER</button>
      <div>{newDataBaseDog.error ? newDataBaseDog.error : null}</div>
      {newDataBaseDog && !newDataBaseDog.error ? (
        <div>
          <p>{newDataBaseDog.name}</p>
          <p>{newDataBaseDog.height}</p>
          <p>{newDataBaseDog.weight}</p>
          <p>{newDataBaseDog.life_span}</p>
          <p>{newDataBaseDog.image}</p>
        </div>
      ) : null}
    </div>
  );
}

export default FormPage;
