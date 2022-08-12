import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <ul>
      {items.map((product) => {
        return (
          <li className="shop-item">
            <ShopItem item={product} />
          </li>
        );
      })}
    </ul>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListView;
