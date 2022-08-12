import PropTypes from "prop-types";

function IconSwith({icon, onSwitch}) {
  return (
    <div className="icon-switch">
      <span className="material-icons" onClick={() => onSwitch(icon)}>
        {icon}
      </span>
    </div>
  );
}

IconSwith.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwith;
