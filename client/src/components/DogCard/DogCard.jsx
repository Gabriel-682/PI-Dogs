import styles from "./DogCard.module.css";

function DogCard({ image, name, temperament, weight }) {
  return (
    <div className={styles.dogContenedor}>
      <img className={styles.dogImage} src={image} alt="Dog" />
      <p>{name}</p>
      <p>{temperament}</p>
      <p>{weight}</p>
    </div>
  );
}

export default DogCard;
