import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../store/characters/actions";
import styles from "./TransitionsModal.module.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TransitionsModal = ({ isOpen }) => {
  const currentCard = useSelector((state) => state.characters.currentCard);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    dispatch(setModalClose());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={styles.Modal}>
            <div className={styles.header}>
              <img src={currentCard.image} alt={currentCard.name} />
              <h2 className={styles.title}>{currentCard.name}</h2>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Created:</p>
              <p className={styles.itemValue}>
                {currentCard.created.slice(0, 10)}
              </p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Gender:</p>
              <p className={styles.itemValue}>{currentCard.gender}</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Location:</p>
              <p className={styles.itemValue}>{currentCard.location.name}</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Origin:</p>
              <p className={styles.itemValue}>{currentCard.origin.name}</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Species:</p>
              <p className={styles.itemValue}>{currentCard.species}</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Status:</p>
              <p className={styles.itemValue}>{currentCard.status}</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.itemName}>Type:</p>
              <p className={styles.itemValue}>{currentCard.type}</p>
            </div>
            <div className={styles.btnBlock}>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                disableElevation
              >
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default TransitionsModal;
