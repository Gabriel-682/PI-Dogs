import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Nav() {
  return (
    <div className={styles.nav}>
      <Link
        className={styles.navLink}
        style={{ textDecoration: "none" }}
        to={"/"}
      >
        PORTADA
      </Link>
      <Link
        className={styles.navLink}
        style={{ textDecoration: "none" }}
        to={"/form"}
      >
        CREAR RAZA
      </Link>

      <SearchBar />
    </div>
  );
}

export default Nav;
