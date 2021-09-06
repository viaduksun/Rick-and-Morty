import React from "react";
import Card from "../Card/Card";
import PaginationComponent from "../Pagination/PaginationComponent";
import styles from "./CharacterField.module.scss";

const CharacterField = ({ characters }) => {
  return (
    <div className={styles.CharactersFieldWrapper}>
      <div className={styles.CharactersField}>
        {characters.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
};

export default CharacterField;
