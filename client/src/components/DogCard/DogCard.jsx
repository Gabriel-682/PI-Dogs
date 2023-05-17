function DogCard({ image, name, temperament, weight }) {
  return (
    <div>
      <img src={image} alt="Dog" />
      <p>{name}</p>
      <p>{temperament}</p>
      <p>{weight}</p>
    </div>
  );
}

export default DogCard;
