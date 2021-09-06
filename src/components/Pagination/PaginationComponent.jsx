import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PaginationComponent.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { setCurrentPageAction } from "../../store/characters/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationComponent = () => {
  const pages = useSelector((state) => state.characters.pages);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handlePagination = (e, value) => {
    dispatch(setCurrentPageAction(value));
  };
  return (
    <div className={styles.Pagination}>
      <div className={classes.root}>
        <Pagination
          count={pages}
          color="primary"
          onChange={handlePagination}
          size="large"
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
