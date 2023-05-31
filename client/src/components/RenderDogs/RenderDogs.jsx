import styles from "./RenderDogs.module.css";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Filters from "../Filters/Filters";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";

function RenderDogs() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const navigate = useNavigate();
  //   const totalDogs = dogsRender.length;
  const dogsPerPage = useSelector((state) => state.dogsPerPage);
  //   const dogsPerPage = 8;
  const currentPage = useSelector((state) => state.currentPage);
  //   const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  const onClickHandlerBtnCreate = () => {
    navigate("/form");
  };

  return (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav />
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
      <Pagination />
    </div>
  );
}

export default RenderDogs;
