import styles from "./FormPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments, postDog } from "../../redux/actions";
import validation from "../../utils/validation";

function FormPage() {
  const temperamentsState = useSelector((state) => state.temperaments);
  const newDataBaseDog = useSelector((state) => state.newDataBaseDog);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageDefault =
    "https://freedesignfile.com/upload/2022/04/Dog-sticking-out-tongue-cartoon-vector.jpg";
  const [errors, setErrors] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    image: "",
    temperaments: "Debe seleccionar al menos un temperamento.",
  });
  const [newDogInput, setNewDogInput] = useState({
    name: undefined,
    minHeight: undefined,
    maxHeight: undefined,
    minWeight: undefined,
    maxWeight: undefined,
    minLife_span: undefined,
    maxLife_span: undefined,
    image: undefined,
    temperaments: [],
  });

  const newDog = {
    name: newDogInput.name,
    height: `${newDogInput.minHeight} - ${newDogInput.maxHeight}`,
    weight: `${newDogInput.minWeight} - ${newDogInput.maxWeight}`,
    life_span: `${newDogInput.minLife_span} - ${newDogInput.maxLife_span}`,
    image: newDogInput.image ? newDogInput.image : imageDefault,
    temperaments: newDogInput.temperaments,
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]); //BORRAR TODO ESTE USEEFFECT

  const handleInputChange = (ev) => {
    setNewDogInput({ ...newDogInput, [ev.target.name]: ev.target.value });
    setErrors(
      validation({ ...newDogInput, [ev.target.name]: ev.target.value })
    );
  };

  const handleSelectChange = (ev) => {
    setNewDogInput({
      ...newDogInput,
      temperaments: [...newDogInput.temperaments, Number(ev.target.value)],
    });
    setErrors(
      validation({
        ...newDogInput,
        temperaments: [...newDogInput.temperaments, Number(ev.target.value)],
      })
    );
  };

  const deleteTemperament = (ev, tempId) => {
    ev.preventDefault();
    setNewDogInput({
      ...newDogInput,
      temperaments: newDogInput.temperaments.filter((temp) => temp !== tempId),
    });
    setErrors(
      validation({
        ...newDogInput,
        temperaments: newDogInput.temperaments.filter(
          (temp) => temp !== tempId
        ),
      })
    );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(postDog(newDog));
  };

  const onClickHandlerBtnVolver = () => {
    navigate(-1);
  };

  return (
    <div className={styles.formPageContent}>
      <div className={styles.picFormContent}>
        <div className={styles.image}>
          <img src={newDog.image} alt="Sin imagen para mostrar." />
        </div>
        <div className={styles.form}>
          {/* Nombre. Altura (diferenciar entre altura mínima y máxima de la raza).
        Peso (diferenciar entre peso mínimo y máximo de la raza). Años de vida.
        Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
        Botón para crear la nueva raza. */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">NOMBRE: </label>
            <br />
            <input type="text" name="name" onChange={handleInputChange} />
            {errors.name && <p className={styles.errorsPs}>{errors.name}</p>}
            <br />

            <label>ALTURA: </label>
            <br />
            <label htmlFor="minHeight">Min.: </label>
            <input type="text" name="minHeight" onChange={handleInputChange} />
            <label htmlFor="maxHeight">Máx.: </label>
            <input type="text" name="maxHeight" onChange={handleInputChange} />
            {errors.minHeight && (
              <p className={styles.errorsPs}>{errors.minHeight}</p>
            )}
            {errors.maxHeight && (
              <p className={styles.errorsPs}>{errors.maxHeight}</p>
            )}
            <br />

            <label>PESO: </label>
            <br />
            <label htmlFor="minWeight">Min.: </label>
            <input type="text" name="minWeight" onChange={handleInputChange} />
            <label htmlFor="maxWeight">Máx.: </label>
            <input type="text" name="maxWeight" onChange={handleInputChange} />
            {errors.minWeight && (
              <p className={styles.errorsPs}>{errors.minWeight}</p>
            )}
            {errors.maxWeight && (
              <p className={styles.errorsPs}>{errors.maxWeight}</p>
            )}
            <br />

            <label>ESPECTATIVA DE VIDA: </label>
            <br />
            <label htmlFor="minLife_span">Min.: </label>
            <input
              type="text"
              name="minLife_span"
              onChange={handleInputChange}
            />
            <label htmlFor="maxLife_span">Máx.: </label>
            <input
              type="text"
              name="maxLife_span"
              onChange={handleInputChange}
            />
            {errors.minLife_span && (
              <p className={styles.errorsPs}>{errors.minLife_span}</p>
            )}
            {errors.maxLife_span && (
              <p className={styles.errorsPs}>{errors.maxLife_span}</p>
            )}
            <br />

            <label htmlFor="image">IMAGEN(URL): </label>
            <br />
            <input type="text" name="image" onChange={handleInputChange} />
            {errors.image && <p className={styles.errorsPs}>{errors.image}</p>}
            <br />

            <label htmlFor="selecTemperaments">Temperamentos:</label>
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
            {errors.temperaments && (
              <p className={styles.errorsPs}>{errors.temperaments}</p>
            )}

            <div className={styles.temperamentsContent}>
              {newDogInput.temperaments.length
                ? newDogInput.temperaments.map((temp) => (
                    <div key={temp} className={styles.temperamentShown}>
                      <div>
                        {temperamentsState.find((el) => el.id === temp).name}
                      </div>
                      <button
                        className={styles.btnTemperamentShown}
                        onClick={(ev) => deleteTemperament(ev, temp)}
                      >
                        X
                      </button>
                    </div>
                  ))
                : null}
            </div>
            <button
              type="submit"
              disabled={
                !newDogInput.name ||
                !newDogInput.minWeight ||
                !newDogInput.maxHeight ||
                !newDogInput.maxWeight ||
                !newDogInput.minHeight ||
                !newDogInput.minLife_span ||
                !newDogInput.maxLife_span ||
                !newDogInput.temperaments.length ||
                errors.name ||
                errors.minWeight ||
                errors.maxHeight ||
                errors.maxWeight ||
                errors.minHeight ||
                errors.minLife_span ||
                errors.maxLife_span ||
                errors.image ||
                errors.temperaments.length
              }
            >
              CREAR!
            </button>
          </form>
        </div>
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
