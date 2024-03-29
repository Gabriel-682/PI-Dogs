import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogByName, getAllDogs, setCurrentPage } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [breed, setBreed] = useState("");

  const onChangeHandler = (ev) => {
    setBreed(ev.target.value);
  };

  const onClickHandlerHide = () => {
    showInput && dispatch(getAllDogs());
    setShowInput(!showInput);
  };

  const onClickHandlerSearch = (breed) => {
    dispatch(setCurrentPage(1));
    dispatch(getDogByName(breed));
  };

  return (
    <div className={styles.searchBarContent}>
      {showInput ? (
        <div className={styles.searchInput}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Búsqueda por raza"
            onChange={onChangeHandler}
          />
          <button
            className={styles.btnSearch}
            onClick={() => onClickHandlerSearch(breed)}
          >
            BUSCAR !
          </button>
        </div>
      ) : null}
      <button className={styles.btnSearch} onClick={onClickHandlerHide}>
        {showInput ? "RESET" : "BUSCAR"}
      </button>
    </div>
  );
}

export default SearchBar;
