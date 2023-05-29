import styles from "./HomePage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import PreLoader from "../PreLoader/PreLoader";

function HomePage() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const dispatch = useDispatch();
  const totalDogs = dogsRender.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  const getAllTemperaments = async () => {
    await axios("http://localhost:3001/temperaments");
  };

  useEffect(() => {
    // console.log("UseEffect");
    getAllTemperaments();
    dispatch(getAllDogs());
  }, [dispatch]);

  return !dogsRender.length && !dogsRender.error ? (
    <PreLoader />
  ) : (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav setCurrentPage={setCurrentPage} />
      <div className={styles.dogsContenedor}>
        {dogsRender.error ? (
          <div>
            <div>{dogsRender.error}</div>
            <button>CREAR</button>
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
