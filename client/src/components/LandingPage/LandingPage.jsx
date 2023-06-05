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
          <h1 className={styles.welcomeTitle}>BIENVENIDO</h1>
          <p className={styles.welcomeText}>
            En nuestra web podrás consultar detalles sobre las razas de perros
            existentes. Si crees que falta alguna, podrás crear tu raza
            personalizada !
          </p>
          <button className={styles.btnIngresar} onClick={onClickHandler}>INGRESAR !</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
