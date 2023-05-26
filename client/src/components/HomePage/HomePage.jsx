import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import styles from "./HomePage.module.css";
import { getAllDogs } from "../../redux/actions";
import Nav from "../Nav/Nav";

function HomePage() {
  const dogsRender = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();
  const totalDogs = dogsRender.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav />
      <div className={styles.dogsContenedor}>
        {dogsRender
          .map((dog) => (
            <DogCard
              key={dog.name}
              image={dog.image}
              name={dog.name}
              temperament={dog.Temperaments}
              weight={dog.weight}
            />
          ))
          .slice(firstIndex, lastIndex)}
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
