import PropTypes from "prop-types";
import styles from "./NavbarIcon.module.css";

const NavbarIcon = ({ className = "" }) => {
  return (
    <img
      className={[styles.navbarIcon, className].join(" ")}
      alt=""
      src="/navbar.svg"
    />
  );
};

NavbarIcon.propTypes = {
  className: PropTypes.string,
};

export default NavbarIcon;
