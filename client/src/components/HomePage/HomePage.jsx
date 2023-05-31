import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import PreLoader from "../PreLoader/PreLoader";
import Filters from "../Filters/Filters";

function HomePage() {
  const dogsRender = useSelector((state) => state.dogsRender);
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

  return !dogsRender.length && !dogsRender.error ? (
    <PreLoader />
  ) : (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav setCurrentPage={setCurrentPage} />
      <Filters />
      <div className={styles.dogsContenedor}>
        {dogsRender.error ? (
          <div>
            <div>{dogsRender.error}</div>
            <button onClick={onClickHandlerBtnCreate}>CREAR!</button>
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
