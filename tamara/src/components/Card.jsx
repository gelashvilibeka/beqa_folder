import './card.css';

function Card({ imageSrc, title, desc }) {
  return (
    <div className="card">
      <img className="img-card" src={imageSrc} alt={title} />
      <h2 className="title-card">{title}</h2>
      <p className="desc-card">{desc}</p>
    </div>
  );
}

Card.defaultProps = {
  imageSrc: '',
  title: '',
  desc: '',
};

export default Card;

