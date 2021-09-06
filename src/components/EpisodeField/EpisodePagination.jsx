import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./EpisodeField.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setEpisodeCurrentPage } from "../../store/episodes/actions";

const useStylesPagination = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

const EpisodePagination = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.episodes.episodePages);
  const classes = useStylesPagination();

  const handleChange = (event, value) => {
    dispatch(setEpisodeCurrentPage(value));
  };

  return (
    <div className={styles.EpisodePagination}>
      <div className={classes.root}>
        <Pagination count={pages} shape="rounded" onChange={handleChange} />
      </div>
    </div>
  );
};
export default EpisodePagination;
