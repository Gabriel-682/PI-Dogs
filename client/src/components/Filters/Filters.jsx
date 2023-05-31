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
    <div className="filtros">
      <label htmlFor="">FILTRAR POR: </label>
      <select
        name="isApi - ver si sirve esta propiedad"
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
        name="Temperamentos - ver si sirve esta propiedad"
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
      <label htmlFor="">ORDENAR POR:</label>
      <select
        name="order - ver si sirve esta propiedad"
        defaultValue={"default"}
        onChange={onChangeHandlerOrder}
      >
        <option value="default">--selecciona--</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="mayorPeso">Mayor peso</option>
        <option value="menorPeso">Menor peso</option>
      </select>
    </div>
  );
}

export default Filters;
