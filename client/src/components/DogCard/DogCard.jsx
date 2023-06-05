import styles from "./DogCard.module.css";
import { Link } from "react-router-dom";

function DogCard({ id, image, name, temperament, weight }) {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
      <div className={styles.dogContenedor}>
        <img className={styles.dogImage} src={image} alt="Dog" />
        <p className={styles.name}>{name}</p>
        <p className={styles.dataCard}>{`Peso: ${weight}`}</p>
        <p className={styles.dataCard}>Temperaments:</p>
        <div className={styles.temperamentList}>
          {temperament?.map((temp) => (
            <p key={temp.name} className={styles.tempFont}>{`${temp.name} `}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default DogCard;
