import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderBy,
  temperamentFilter,
  getAllDogs,
  sourceFilter,
  setCurrentPage,
} from "../../redux/actions";

function Filters() {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const tempSelecValue = "default";

  const onChangeHandlerSource = async (ev) => {
    await dispatch(getAllDogs());
    if (ev.target.value !== "reset") dispatch(sourceFilter(ev.target.value));
    dispatch(setCurrentPage(1));
  };

  const onChangeHandlerTemperaments = async (ev) => {
    await dispatch(getAllDogs());
    if (ev.target.value !== "reset")
      dispatch(temperamentFilter(ev.target.value));
    dispatch(setCurrentPage(1));
  };

  const onChangeHandlerOrder = (ev) => {
    dispatch(orderBy(ev.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.filters}>
      <label className={styles.labelFilters}>FILTRAR POR: </label>
      <select
        className={styles.filtersSelecs}
        name="isApi"
        defaultValue={"default"}
        onChange={onChangeHandlerSource}
      >
        <option value="default" disabled>
          FUENTE
        </option>
        <option value="reset">--reset--</option>
        <option value="api">API</option>
        <option value="dataBase">Creados</option>
      </select>
      <select
        className={styles.filtersSelecs}
        name="temperamentos"
        defaultValue={"default"}
        onChange={onChangeHandlerTemperaments}
      >
        <option value="default" disabled>
          TEMPERAMENTOS
        </option>
        <option value="reset">--reset--</option>
        {temperaments?.map((temp) => {
          return (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          );
        })}
      </select>
      <label className={styles.labelFilters}>ORDENAR POR:</label>
      <select
        className={styles.filtersSelecs}
        name="order"
        value={tempSelecValue}
        onChange={onChangeHandlerOrder}
      >
        <option value="default">--seleccionar--</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="mayorPeso">Mayor peso</option>
        <option value="menorPeso">Menor peso</option>
      </select>
    </div>
  );
}

export default Filters;
