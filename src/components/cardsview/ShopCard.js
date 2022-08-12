import PropTypes from "prop-types";

function ShopCard({ card }) {
  return (
    <div className="card-container">
      <img className="image" src={card.img} alt={card.name} />
      <div className="card-top-centered">
        <span className="product-name">{card.name}</span>
      </div>
      <div className="card-mid-centered">
        <span className="product-color">{card.color}</span>
      </div>
      <div className="card-bottom-left">
        <span className="product-price">{"$" + card.price}</span>
      </div>
      <div className="card-bottom-right">
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}
ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ShopCard;
