import React, { useEffect, useState } from "react";
import getEpisodes from "../../api/getEpisodes";
import EpisodeField from "../../components/EpisodeField/EpisodeField";
// import FilterBlock from "../../components/Filters/FilterBlock";
import styles from "./Episodes.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setEpisodePages } from "../../store/episodes/actions";
import Loader from "../../components/UI/Loader/Loader";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.episodes.currentEpisodePage);
  const currentQuery = useSelector(
    (state) => state.episodes.currentEpisodeQuery
  );
  useEffect(() => {
    setIsLoading(true);
    getEpisodes(currentPage, currentQuery).then((res) => {
      setEpisodes(res.results);
      if (res.info) {
        dispatch(setEpisodePages(res.info.pages));
      }
      setIsLoading(false);
    });
  }, [currentPage, currentQuery, dispatch]);

  return (
    <div className={styles.Episodes}>
      {isLoading && <Loader />}
      <div className="container">
        <div className="flex-row">
          <EpisodeField episodes={episodes} />
        </div>
      </div>
    </div>
  );
};

export default Episodes;
