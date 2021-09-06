import React from "react";
import WatchlistForm from "../WatchlistForm/WatchlistForm";
import WatchlistTable from "../WatchlistTable/WatchlistTable";
import styles from "./WatchListField.module.scss";

const WatchListField = () => {
  return (
    <div className={styles.WatchListFieldWrapper}>
      <div className={styles.WatchListField}>
        <WatchlistForm />
        <WatchlistTable />
      </div>
    </div>
  );
};

export default WatchListField;
