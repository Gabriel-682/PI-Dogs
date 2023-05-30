import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllDogs, getTemperaments, orderBy } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import PreLoader from "../PreLoader/PreLoader";

function HomePage() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalDogs = dogsRender.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  const onClickHandlerBtnCreate = () => {
    navigate("/form");
  };

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getAllDogs());
  }, [dispatch]);

  const onChangeHandlerOrder = (ev) => {
    dispatch(orderBy(ev.target.value));
  };

  return !dogsRender.length && !dogsRender.error ? (
    <PreLoader />
  ) : (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav setCurrentPage={setCurrentPage} />
      <div className="filtros">
        <label htmlFor="">FILTRAR POR: </label>
        <select
          name="isApi - ver si sirve esta propiedad"
          defaultValue={"default"}
        >
          <option value="default" disabled>
            FUENTE
          </option>
          <option value="api">API</option>
          <option value="dataBase">Data Base</option>
          <option value="reset">Reset</option>
        </select>
        <select
          name="Temperamentos - ver si sirve esta propiedad"
          defaultValue={"default"}
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
      <div className={styles.dogsContenedor}>
        {dogsRender.error ? (
          <div>
            <div>{dogsRender.error}</div>
            <button onClick={onClickHandlerBtnCreate}>CREAR</button>
          </div>
        ) : (
          dogsRender
            .map((dog) => (
              <DogCard
                key={dog.id}
                id={dog.id}
                image={dog.image}
                name={dog.name}
                temperament={dog.Temperaments}
                weight={dog.weight}
              />
            ))
            .slice(firstIndex, lastIndex)
        )}
      </div>
      <Pagination
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDogs={totalDogs}
      />
    </div>
  );
}

export default HomePage;
