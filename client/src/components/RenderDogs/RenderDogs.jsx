import styles from "./RenderDogs.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";

function RenderDogs() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const dogsPerPage = useSelector((state) => state.dogsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const navigate = useNavigate();
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  const onClickHandlerBtnCreate = () => {
    navigate("/form");
  };

  return (
    <div>
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
