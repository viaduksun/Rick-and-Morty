import React from "react";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../store/characters/actions";
import styles from "./Card.module.scss";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const date = item.created.slice(0, 10);
  const handleClick = () => {
    dispatch(setModalOpen(item.id));
  };
  return (
    <div className={styles.Card} onClick={handleClick}>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          {item.name}
          <span> (</span>
          {item.species}
          <span>)</span>
        </div>
        <p className={styles.location}>Location: {item.location.name}</p>
        <p className={styles.date}>Created: {date}</p>
      </div>
    </div>
  );
};

export default Card;
