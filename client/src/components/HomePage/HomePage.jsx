// import styles from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import PreLoader from "../PreLoader/PreLoader";
import Nav from "../Nav/Nav";
import Filters from "../Filters/Filters";
import RenderDogs from "../RenderDogs/RenderDogs";

function HomePage() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getAllDogs());
  }, [dispatch]);

  return !dogsRender.length && !dogsRender.error ? (
    <PreLoader />
  ) : (
    <div>
      <h1>SOY HOME PAGE</h1>
      <Nav />
      <Filters />
      <RenderDogs />
    </div>
  );
}

export default HomePage;
