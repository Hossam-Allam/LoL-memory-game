function Card({ name, imageUrl }) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={imageUrl} alt={name} className="card-img" />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
}
export default Card;
