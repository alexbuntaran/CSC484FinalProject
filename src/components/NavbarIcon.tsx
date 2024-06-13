import { FunctionComponent } from "react";
import styles from "./NavbarIcon.module.css";

export type NavbarIconType = {
  className?: string;
};

const NavbarIcon: FunctionComponent<NavbarIconType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.navbarIcon, className].join(" ")}
      alt=""
      src="/navbar.svg"
    />
  );
};

export default NavbarIcon;
