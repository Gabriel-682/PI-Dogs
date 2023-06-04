import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const Navigate = useNavigate();

  function onClickHandler() {
    Navigate("/home");
  }
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageContent}>
        <div className={styles.img}></div>
        <div className={styles.welcome}>
          <h1>BIENVENIDO</h1>
          <button onClick={onClickHandler}>HOME</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
