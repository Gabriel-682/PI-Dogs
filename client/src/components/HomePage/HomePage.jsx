import { useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

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
      {dogsApi
        .map((dog) => (
          <DogCard
            key={dog.name}
            image={dog.image.url}
            name={dog.name}
            temperament={dog.temperament}
            weight={dog.weight.metric}
          />
        ))
        .slice(firstIndex, lastIndex)}
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
