// import styles from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import PreLoader from "../PreLoader/PreLoader";
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
    <RenderDogs />
  );
}

export default HomePage;
