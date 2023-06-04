import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate("/home");
  };

  return (
    <div className={styles.errorContent}>
      <div className={styles.image}></div>
      <p className={styles.text}>ERROR 404</p>
      <p className={styles.text}>PAGINA NO ENCONTRADA</p>
      <button className={styles.btnHome} onClick={clickHandle}>
        HOME
      </button>
    </div>
  );
}

export default ErrorPage;
