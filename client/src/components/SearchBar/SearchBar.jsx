import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/actions";

function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [breed, setBreed] = useState("");

  // const onChangeHandler = (ev) => {
  //   dispatch(getDogByName(ev.target.value));
  // };

  const onChangeHandler = (ev) => {
    setBreed(ev.target.value);
  };

  const onClickHandlerHide = () => {
    setShowInput(!showInput);
  };

  const onClickHandlerSearch = (breed) => {
    setCurrentPage(1);
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
        {showInput ? "OCULTAR" : "BUSCAR"}
      </button>
    </div>
  );
}

export default SearchBar;
