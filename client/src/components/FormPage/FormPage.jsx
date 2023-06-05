import styles from "./FormPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments, postDog, getAllDogs } from "../../redux/actions";
import validation from "../../utils/validation";

function FormPage() {
  const temperamentsState = useSelector((state) => state.temperaments);
  const newDataBaseDog = useSelector((state) => state.newDataBaseDog);
  const dogsRender = useSelector((state) => state.dogsRender);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let allDogsNames = [];
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
    name:
      newDogInput.name?.charAt(0).toUpperCase() +
      newDogInput.name?.substring(1).toLowerCase(),
    height: `${newDogInput.minHeight} - ${newDogInput.maxHeight}`,
    weight: `${newDogInput.minWeight} - ${newDogInput.maxWeight}`,
    life_span: `${newDogInput.minLife_span} - ${newDogInput.maxLife_span}`,
    image: newDogInput.image ? newDogInput.image : imageDefault,
    temperaments: [...new Set(newDogInput.temperaments)],
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  if (Array.isArray(dogsRender)) {
    dogsRender.forEach((dog) => {
      allDogsNames = [...allDogsNames, dog.name];
    });
  }

  const handleInputChange = (ev) => {
    setNewDogInput({ ...newDogInput, [ev.target.name]: ev.target.value });
    setErrors(
      validation(
        { ...newDogInput, [ev.target.name]: ev.target.value },
        allDogsNames
      )
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
    alert("La raza ha sido creada correctamente.");
    navigate("/home");
  };

  const onClickHandlerBtnVolver = () => {
    navigate(-1);
  };

  return (
    <div className={styles.formPageContent}>
      <div className={styles.picFormContent}>
        <div className={styles.image}>
          <img
            className={styles.defaultImage}
            src={newDog.image}
            alt="Sin imagen para mostrar."
          />
        </div>
        <div className={styles.formContent}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <label className={styles.labels} htmlFor="name">
                NOMBRE:{" "}
              </label>
              <input
                className={styles.largeInput}
                type="text"
                name="name"
                onChange={handleInputChange}
              />
              {errors.name && <p className={styles.errorsPs}>{errors.name}</p>}
            </div>

            <div className={styles.inputs}>
              <label className={styles.labels}>ALTURA: </label>
              <div className={styles.numInputs}>
                <label className={styles.labelsSmall} htmlFor="minHeight">
                  Min.:{" "}
                </label>
                <input
                  type="text"
                  name="minHeight"
                  onChange={handleInputChange}
                />
                <label className={styles.labelsSmall} htmlFor="maxHeight">
                  Máx.:{" "}
                </label>
                <input
                  type="text"
                  name="maxHeight"
                  onChange={handleInputChange}
                />
              </div>
              {errors.minHeight && (
                <p className={styles.errorsPs}>{errors.minHeight}</p>
              )}
              {errors.maxHeight && (
                <p className={styles.errorsPs}>{errors.maxHeight}</p>
              )}
            </div>

            <div className={styles.inputs}>
              <label className={styles.labels}>PESO: </label>
              <div className={styles.numInputs}>
                <label className={styles.labelsSmall} htmlFor="minWeight">
                  Min.:{" "}
                </label>
                <input
                  type="text"
                  name="minWeight"
                  onChange={handleInputChange}
                />
                <label className={styles.labelsSmall} htmlFor="maxWeight">
                  Máx.:{" "}
                </label>
                <input
                  type="text"
                  name="maxWeight"
                  onChange={handleInputChange}
                />
              </div>
              {errors.minWeight && (
                <p className={styles.errorsPs}>{errors.minWeight}</p>
              )}
              {errors.maxWeight && (
                <p className={styles.errorsPs}>{errors.maxWeight}</p>
              )}
            </div>

            <div className={styles.inputs}>
              <label className={styles.labels}>ESPECTATIVA DE VIDA: </label>
              <div className={styles.numInputs}>
                <label className={styles.labelsSmall} htmlFor="minLife_span">
                  Min.:{" "}
                </label>
                <input
                  type="text"
                  name="minLife_span"
                  onChange={handleInputChange}
                />
                <label className={styles.labelsSmall} htmlFor="maxLife_span">
                  Máx.:{" "}
                </label>
                <input
                  type="text"
                  name="maxLife_span"
                  onChange={handleInputChange}
                />
              </div>
              {errors.minLife_span && (
                <p className={styles.errorsPs}>{errors.minLife_span}</p>
              )}
              {errors.maxLife_span && (
                <p className={styles.errorsPs}>{errors.maxLife_span}</p>
              )}
            </div>

            <div className={styles.inputs}>
              <label className={styles.labels} htmlFor="image">
                IMAGEN-URL (OPCIONAL):
              </label>
              <input
                className={styles.largeInput}
                type="text"
                name="image"
                onChange={handleInputChange}
              />
              {errors.image && (
                <p className={styles.errorsPs}>{errors.image}</p>
              )}
            </div>

            <div className={styles.tempDiv}>
              <label className={styles.labels} htmlFor="selecTemperaments">
                TEMPERAMENTOS:
              </label>
              <select
              className={styles.selectTempForm}
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
                      <div
                        key={Math.ceil(Math.random() * 125)}
                        className={styles.temperamentShown}
                      >
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
            </div>
            <button
              className={styles.btnDir}
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
                errors.temperaments.length ||
                newDataBaseDog.error
              }
            >
              CREAR!
            </button>
          </form>
        </div>
      </div>
      <button className={styles.btnDir} onClick={onClickHandlerBtnVolver}>
        VOLVER
      </button>
      {newDataBaseDog.error ? <div>{newDataBaseDog.error}</div> : null}
    </div>
  );
}

export default FormPage;
