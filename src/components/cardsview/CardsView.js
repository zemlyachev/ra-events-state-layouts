import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
  return (
    <ul className="cards">
      {cards.map((product) => {
        return (
          <li className="shop-card">
            <ShopCard card={product} />
          </li>
        );
      })}
    </ul>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsView;
