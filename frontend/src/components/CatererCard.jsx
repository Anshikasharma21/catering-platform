function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CatererCard({ caterer }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="avatar">{getInitials(caterer.name)}</div>
        <div className="rating-badge">⭐ {caterer.rating}</div>
      </div>

      <h2 className="card-name">{caterer.name}</h2>

      <p className="card-location">📍 {caterer.location}</p>

      <div className="cuisines">
        {caterer.cuisines.map((cuisine) => (
          <span key={cuisine} className="cuisine-tag">
            {cuisine}
          </span>
        ))}
      </div>

      <div className="card-divider" />

      <div className="card-footer">
        <div className="price">
          ₹{caterer.pricePerPlate}
          <span className="price-label"> / plate</span>
        </div>
        <button className="enquire-btn">Enquire</button>
      </div>
    </div>
  );
}

export default CatererCard;