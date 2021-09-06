import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.content}>
          <p>Kyiv 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
