import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Nav({ setCurrentPage }) {
  return (
    <div>
      <p>SOY LA NAV</p>
      <Link to={"/form"}>CREAR RAZA</Link>
      <SearchBar setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Nav;
