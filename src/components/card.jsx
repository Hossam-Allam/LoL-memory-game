function Card({ name, imageUrl }) {
  return (
    <div className="card">
      {imageUrl && (
        <img src={imageUrl} alt={`${name} splash art`} className="card-img" />
      )}
      {name && <h2 className="card-title">{name}</h2>}
    </div>
  );
}
export default Card;
