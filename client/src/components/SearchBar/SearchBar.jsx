import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();

  const handleOnChange = async (ev) => {
    dispatch(getDogByName(ev.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Búsqueda por raza"
        onChange={handleOnChange}
      />
      <button>BUSCAR</button>
    </div>
  );
}

export default SearchBar;
