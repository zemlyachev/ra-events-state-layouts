import PropTypes from "prop-types";

function ShopItem({ item }) {
  return (
    <div className="product-item">
      <div className="products-item-img">
        <img className="image" src={item.img} alt={item.name} />
      </div>
      <span className="product-name">{item.name}</span>
      <span className="product-color">{item.color}</span>
      <span className="product-price">{"$" + item.price}</span>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ShopItem;
