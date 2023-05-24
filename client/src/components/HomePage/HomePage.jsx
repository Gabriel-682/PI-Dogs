import { useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import styles from "./HomePage.module.css";

function HomePage() {
  const [dogsApi, setDogsApi] = useState([]);
  const totalDogs = dogsApi.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  const getAllDogs = async () => {
    try {
      const { data } = await axios("http://localhost:3001/dogs");
      setDogsApi(data);
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    getAllDogs();
  }, []);

  return (
    <div>
      <h1>SOY HOME PAGE</h1>
      <div className={styles.dogsContenedor}>
        {dogsApi
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
