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
    <div>
      {showInput ? (
        <div>
          <input
            type="text"
            placeholder="Búsqueda por raza"
            onChange={onChangeHandler}
          />
          <button onClick={() => onClickHandlerSearch(breed)}>BUSCAR!</button>
        </div>
      ) : null}
      <button onClick={onClickHandlerHide}>
        {showInput ? "RESET" : "BUSCAR"}
      </button>
    </div>
  );
}

export default SearchBar;
