import styles from "./DogCard.module.css";
import { Link } from "react-router-dom";

function DogCard({ id, image, name, temperament, weight }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.dogContenedor}>
        <img className={styles.dogImage} src={image} alt="Dog" />
        <p>{name}</p>
        <div>
          {temperament?.map((temp) => (
            <p key={temp.name}>{temp.name}</p>
          ))}
        </div>
        <p>{weight}</p>
      </div>
    </Link>
  );
}

export default DogCard;
