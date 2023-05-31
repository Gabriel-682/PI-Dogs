import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Nav() {
  return (
    <div>
      <p>SOY LA NAV</p>
      <Link to={"/form"}>CREAR RAZA</Link>
      <SearchBar />
    </div>
  );
}

export default Nav;
