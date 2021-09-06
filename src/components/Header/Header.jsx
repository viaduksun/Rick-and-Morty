import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapp}>
          <div className={styles.logo}>
            <img src="img/logo.png" alt="logo" />
          </div>
          <div className={styles.menu}>
            <NavLink
              exact
              to="/"
              className={styles.menuLink}
              activeClassName={styles.menuLink_active}
            >
              <p className={styles.menuText}>Characters</p>
            </NavLink>
            <NavLink
              to="/episodes"
              className={styles.menuLink}
              activeClassName={styles.menuLink_active}
            >
              <p className={styles.menuText}>Episodes</p>
            </NavLink>
            <NavLink
              to="/locations"
              className={styles.menuLink}
              activeClassName={styles.menuLink_active}
            >
              <p className={styles.menuText}>Locations</p>
            </NavLink>
            <NavLink
              to="/watch-list"
              className={styles.menuLink}
              activeClassName={styles.menuLink_active}
            >
              <p className={styles.menuText}>My watch list</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
