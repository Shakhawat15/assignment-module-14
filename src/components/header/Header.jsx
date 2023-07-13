import PropTypes from "prop-types";
import "./Header.css";
const Header = ({ title }) => {
  return (
    <div>
      <h2 className="head text-uppercase">{title}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
