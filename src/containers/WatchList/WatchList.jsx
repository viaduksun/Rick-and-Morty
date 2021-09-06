import React from "react";
import WatchListField from "../../components/WatchListField/WatchListField";
import styles from "./WatchList.module.scss";

const WatchList = () => {
  return (
    <div className={styles.WatchList}>
      <div className="container">
        <WatchListField />
      </div>
    </div>
  );
};

export default WatchList;
