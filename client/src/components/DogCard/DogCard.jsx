import styles from "./DogCard.module.css";

function DogCard({ image, name, temperament, weight }) {
  return (
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
  );
}

export default DogCard;
