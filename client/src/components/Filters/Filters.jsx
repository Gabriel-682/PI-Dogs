import { useDispatch, useSelector } from "react-redux";
import {
  orderBy,
  temperamentFilter,
  getAllDogs,
  sourceFilter,
} from "../../redux/actions";

function Filters() {
  const temperaments = useSelector((state) => state.temperaments);
  const dogsrender = useSelector((state) => state.dogsrender);
  const dispatch = useDispatch();

  const onChangeHandlerSource = async (ev) => {
    await dispatch(getAllDogs());
    if (ev.target.value !== "reset") dispatch(sourceFilter(ev.target.value));
  };

  const onChangeHandlerTemperaments = async (ev) => {
    await dispatch(getAllDogs());
    dispatch(temperamentFilter(ev.target.value));
  };

  const onChangeHandlerOrder = (ev) => {
    dispatch(orderBy(ev.target.value));
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
        <option value="api">API</option>
        <option value="dataBase">Creados</option>
        <option value="reset">--reset--</option>
      </select>
      <select
        name="Temperamentos - ver si sirve esta propiedad"
        defaultValue={"default"}
        onChange={onChangeHandlerTemperaments}
      >
        <option value="default" disabled>
          TEMPERAMENTOS
        </option>
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
        defaultValue={"az"}
        onChange={onChangeHandlerOrder}
      >
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="mayorPeso">Mayor peso</option>
        <option value="menorPeso">Menor peso</option>
      </select>
    </div>
  );
}

export default Filters;
