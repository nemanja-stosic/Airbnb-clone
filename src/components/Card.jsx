import star from "/assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {/* if badge text has some value then display div */}
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`/assets/${props.data.coverImg}`} alt="img" className="card-imgs" />
      <div className="card-stats">
        <img src={star} alt="" className="star-img" />
        <span>{props.data.stats.rating}</span>
        <span className="gray">({props.data.stats.reviewCount}) • </span>
        <span className="gray">{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.data.price}</span> / person
      </p>
    </div>
  );
}
