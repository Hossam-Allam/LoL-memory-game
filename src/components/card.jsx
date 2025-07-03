function Card({ name, imageUrl, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img-container">
        <img src={imageUrl} alt={name} className="card-img" />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
}
export default Card;
